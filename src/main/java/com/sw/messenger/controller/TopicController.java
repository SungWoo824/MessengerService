package com.sw.messenger.controller;

import com.sw.messenger.domain.dto.ResponseMessage;
import com.sw.messenger.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;

@RestController
@RequestMapping("/topic")
public class TopicController {

    @Autowired
    private TopicService topicService;

    @GetMapping("/")
    public ResponseEntity<ResponseMessage> getTopicInfo(ServletRequest request, @RequestParam Long topicNo) {
        ResponseMessage responseMessage = topicService.getTopicInfo(request, topicNo);

        return new ResponseEntity<>(responseMessage, HttpStatus.OK);
    }
}
