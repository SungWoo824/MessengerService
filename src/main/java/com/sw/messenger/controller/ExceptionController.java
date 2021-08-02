package com.sw.messenger.controller;

import com.sw.messenger.advice.exception.CAuthenticationEntryPointException;
import com.sw.messenger.domain.dto.ResponseMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/exception")
public class ExceptionController {

    @GetMapping(value = "/entrypoint")
    public ResponseMessage entrypointException() {
        throw new CAuthenticationEntryPointException();
    }
}
