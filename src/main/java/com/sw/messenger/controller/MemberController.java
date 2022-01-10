package com.sw.messenger.controller;

import com.sw.messenger.config.security.JwtTokenProvider;
import com.sw.messenger.domain.Member;
import com.sw.messenger.domain.dto.ResponseMessage;
import com.sw.messenger.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired
    private MemberService memberService;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

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

    @Secured("ROLE_USER")
    @GetMapping("/info")
    public ResponseEntity<ResponseMessage> getMemberInfo(HttpServletRequest request){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        Authentication authentication = jwtTokenProvider.getAuthentication(jwtTokenProvider.resolveToken(request));
        String id = authentication.getName();
        ResponseMessage responseMessage = memberService.getMemberInfo(id);
        return new ResponseEntity<>(responseMessage,HttpStatus.OK);
    }
}
