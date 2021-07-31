package com.sw.messenger.service;

import com.sw.messenger.domain.Member;
import com.sw.messenger.domain.UserRole;
import com.sw.messenger.domain.dto.ResponseMessage;
import com.sw.messenger.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberServiceImpl implements MemberService{

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public ResponseMessage memberSignUp(Member member) {
        member.setMemberPw(new BCryptPasswordEncoder().encode(member.getMemberPw()));
        member.setMemberRole(UserRole.USER);

        memberRepository.findByMemberEmail(member.getMemberEmail()).ifPresent(member1 -> {
            throw new DuplicateKeyException("이미 존재하는 이메일 입니다.");
        });
        try {
            memberRepository.save(member);
        } catch (DataIntegrityViolationException e){
            throw new DataIntegrityViolationException("오류가 발생했습니다. 다시 시도해주세요.");
        }
        member.setMemberPw("");
        return new ResponseMessage(member,"회원가입에 성공했습니다.");
    }

    @Override
    public ResponseMessage memberSignIn(Member member) {
        member.setMemberPw(new BCryptPasswordEncoder().encode(member.getMemberPw()));
        Member findMember = memberRepository.findByMemberEmailAndMemberPw(member.getMemberEmail(),member.getMemberPw());

        if (findMember==null){
            return new ResponseMessage(null,"존재하지 않는 이메일 또는 잘못된 비밀번호 입니다. 다시 확인해주세요.");
        }

        findMember.setMemberPw("");
        return new ResponseMessage(findMember,"회원정보가 확인 되었습니다.");
    }

    @Override
    public ResponseMessage getMemberInfo(Member member) {

        return null;
    }
}
