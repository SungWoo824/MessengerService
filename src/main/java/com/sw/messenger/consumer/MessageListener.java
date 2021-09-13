package com.sw.messenger.consumer;

import com.sw.messenger.constants.KafkaConstants;
import com.sw.messenger.domain.dto.ChatVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class MessageListener {

    SimpMessagingTemplate template;

    @KafkaListener(
            topics = KafkaConstants.KAFKA_TOPIC,
            groupId = KafkaConstants.GROUP_ID
    )
    public void listen(ChatVo chatVo){
        log.info("Sending via kafka listener..");
        template.convertAndSend("/topic/group", chatVo);
    }
}
