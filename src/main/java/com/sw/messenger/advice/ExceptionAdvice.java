package com.sw.messenger.advice;

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

    @ExceptionHandler(CUserNotFoundException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    protected ResponseMessage userNotFoundException(HttpServletRequest request, CUserNotFoundException e){
        return new ResponseMessage(500,e.getStackTrace(),"잘못된 로그인정보 입니다.");
    }
}
