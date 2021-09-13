package com.sw.messenger.controller;

import com.sw.messenger.constants.KafkaConstants;
import com.sw.messenger.domain.dto.ChatVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@Slf4j
@RestController
@RequestMapping("/chat")
public class ChatController {
    @Autowired
    private KafkaTemplate<String, ChatVo> kafkaTemplate;

    @PostMapping("/publish")
    public void sendMessage(@RequestBody ChatVo chatVo){
        log.info("Produce message : " + chatVo.toString());
        chatVo.setTimeStamp(LocalDateTime.now().toString());
        try {
            kafkaTemplate.send(KafkaConstants.KAFKA_TOPIC, chatVo).get();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @MessageMapping("/sendMessage")
    @SendTo("/topic/group")
    public ChatVo broadcastGroupMessage(@Payload ChatVo chatVo){
        return chatVo;
    }
}
