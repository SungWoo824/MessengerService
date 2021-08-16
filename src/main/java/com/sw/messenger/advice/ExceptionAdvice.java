package com.sw.messenger.advice;

import com.sw.messenger.advice.exception.CAuthenticationEntryPointException;
import com.sw.messenger.advice.exception.CUserNotFoundException;
import com.sw.messenger.domain.dto.ResponseMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestControllerAdvice
public class ExceptionAdvice {

    @ExceptionHandler(CUserNotFoundException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    protected ResponseMessage userNotFoundException(HttpServletRequest request, CUserNotFoundException e){
        return new ResponseMessage().getFailResult(500,"잘못된 회원정보입니다.");
    }

    @ExceptionHandler(CAuthenticationEntryPointException.class)
    public ResponseMessage authenticationEntryPointException(HttpServletRequest request, CAuthenticationEntryPointException e){
        return new ResponseMessage().getFailResult(401, "권한이 없습니다.");
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseMessage AccessDeniedException(HttpServletRequest request, AccessDeniedException e){
        return new ResponseMessage().getFailResult(401, "보유 권한으로는 접근할수 없습니다.");
    }
}
