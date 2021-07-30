package com.sw.messenger.controller;

import com.sw.messenger.domain.Member;
import com.sw.messenger.domain.dto.ResponseMessage;
import com.sw.messenger.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/member")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @PostMapping("/signup")
    public ResponseEntity<ResponseMessage> signUpMember(@RequestBody Member member){
        ResponseMessage responseMessage = memberService.memberSignUp(member);
        return new ResponseEntity<>(responseMessage, HttpStatus.OK);
    }

    @PostMapping("/signin")
    public ResponseEntity<ResponseMessage> signInMember(@RequestBody Member member){
        ResponseMessage responseMessage = memberService.memberSignIn(member);
        return new ResponseEntity<>(responseMessage, HttpStatus.OK);
    }
}
