package com.sw.messenger.domain.dto;

import com.sw.messenger.domain.TopicMember;
import lombok.Data;

import java.util.List;

@Data
public class TopicVo {
    private TopicMember topicMember;
    private List<Object> topicMemberList;
}
