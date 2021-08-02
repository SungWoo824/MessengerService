package com.sw.messenger.advice;

import com.sw.messenger.advice.exception.CAuthenticationEntryPointException;
import com.sw.messenger.advice.exception.CUserNotFoundException;
import com.sw.messenger.domain.dto.ResponseMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestControllerAdvice
public class ExceptionAdvice {

    private final ResponseMessage responseMessage;

    @ExceptionHandler(CUserNotFoundException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    protected ResponseMessage userNotFoundException(HttpServletRequest request, CUserNotFoundException e){
        return responseMessage.getFailResult(500,"잘못된 회원정보입니다.");
    }

    @ExceptionHandler(CAuthenticationEntryPointException.class)
    public ResponseMessage authenticationEntryPointException(HttpServletRequest request, CAuthenticationEntryPointException e){
        return responseMessage.getFailResult(401, "권한이 없습니다.");
    }
}
