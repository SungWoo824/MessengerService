package com.sw.messenger.service;

import com.sw.messenger.advice.exception.CUserNotFoundException;
import com.sw.messenger.config.security.JwtTokenProvider;
import com.sw.messenger.domain.Member;
import com.sw.messenger.domain.UserRole;
import com.sw.messenger.domain.dto.ResponseMessage;
import com.sw.messenger.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    @Autowired
    private MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public ResponseMessage memberSignUp(Member member) {
        member.setMemberPw(passwordEncoder.encode(member.getMemberPw()));
        member.setRoles(Arrays.asList(UserRole.USER.toString()));
        try {
            memberRepository.save(member);
        } catch (DuplicateKeyException e) {
            throw new DuplicateKeyException("이미 존재하는 이메일 입니다.");
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityViolationException("오류가 발생했습니다. 다시 시도해주세요.");
        }
        member.setMemberPw("");
        return new ResponseMessage(member, "회원가입에 성공했습니다.");
    }

    @Override
    public ResponseMessage memberSignIn(Member member) {
        Optional<Member> findMember = Optional.ofNullable(memberRepository.findByMemberEmail(member.getMemberEmail()).orElseThrow(CUserNotFoundException::new));
        if (!passwordEncoder.matches(member.getMemberPw(),findMember.get().getMemberPw())){
            throw new CUserNotFoundException();
        }

        findMember.get().setMemberPw("");
        System.out.println(findMember.get().getRoles());
        return new ResponseMessage(
                jwtTokenProvider.createToken(
                        String.valueOf(findMember.get().getMemberNo()),
                        findMember.get().getRoles()),
                "회원정보가 확인 되었습니다.");
    }

    @Override
    public ResponseMessage getMemberInfo(String memberId) {
        Member member = memberRepository.findByMemberEmail(memberId).orElseThrow(CUserNotFoundException::new);
        return new ResponseMessage(member, "회원정보를 불러왔습니다.");
    }
}
