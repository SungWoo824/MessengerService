package com.sw.messenger.domain.dto;

import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WebSocketTeam {
    private Map<Integer,WebSocketTopic> topicList = new HashMap<>();

    //방에 신규인원을 추가하는 메소드
    public void add(WebSocketSession session, ChatVo chatVo, List<Integer> containList) throws IOException {

        for(int topic_no : containList) {
            boolean exist = topicList.containsKey(topic_no);

            if(!exist) {
                WebSocketTopic room = new WebSocketTopic();
                topicList.put(topic_no, room);
            }

            topicList.get(topic_no).add(session);
        }

    }

    //방에 있는 인원을 삭제하는 메소드
    public void remove(WebSocketSession session, ChatVo chatVo, List<Integer> containList) throws IOException {
        for(int topic_no : containList) {
            topicList.get(topic_no).remove(session);

            if(topicList.get(topic_no).isEmpty()) {
                topicList.remove(topic_no);
            }
        }
    }

    //방에 있는 인원에게 메시지를 전송하는 메소드
    public void sendMessage(ChatVo chatVo, List<Integer> containList) throws IOException {

        for(int topic_no : containList) {

            if(topic_no==chatVo.getTopic_no()) {
                if(chatVo.getStatus()!=4) {
                    chatVo.setStatus(2);
                    topicList.get(topic_no).sendMessages(chatVo);
                }else {
                    topicList.get(topic_no).sendMessages(chatVo);
                }
            }else {
                chatVo.setStatus(3);
                topicList.get(topic_no).sendMessages(chatVo);
            }
        }

    }

    //방 인원수를 알려주는 메소드
    public int count() {
        return topicList.size();
    }

    //방이 비어있는지를 확인하는 메소드
    public boolean isEmpty() {
        return count() == 0;
    }

}
