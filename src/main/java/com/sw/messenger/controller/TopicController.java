package com.sw.messenger.controller;

import com.sw.messenger.domain.dto.ResponseMessage;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;

@RestController
@RequestMapping("/topic")
public class TopicController {

    @GetMapping("/")
    public ResponseEntity<ResponseMessage> getTopicInfo(ServletRequest request, @RequestParam String teamDomain, @RequestParam Long topicNo) {
        
        return null;
    }
}
