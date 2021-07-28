package com.sw.messenger.service;

import com.sw.messenger.domain.Member;
import com.sw.messenger.domain.UserRole;
import com.sw.messenger.domain.dto.ResponseMessage;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberServiceImpl implements MemberService{
    @Override
    public ResponseMessage memberSignUp(Member member) {
        String inputPw = member.getMemberPw();
        member.setMemberPw(new BCryptPasswordEncoder().encode(inputPw));

        member.setUserRole(UserRole.USER);



        return null;
    }
}
