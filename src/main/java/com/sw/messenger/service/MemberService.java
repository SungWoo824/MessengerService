package com.sw.messenger.service;

import com.sw.messenger.domain.Member;
import com.sw.messenger.domain.dto.ResponseMessage;

public interface MemberService {
    ResponseMessage memberSignUp(Member member);
    ResponseMessage memberSignIn(Member member);
    ResponseMessage getMemberInfo(String memberId);
}
