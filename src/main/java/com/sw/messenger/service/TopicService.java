package com.sw.messenger.service;

import com.sw.messenger.domain.Member;
import com.sw.messenger.domain.Team;
import com.sw.messenger.domain.Topic;
import com.sw.messenger.domain.dto.ResponseMessage;

public interface TopicService {
    ResponseMessage registTopic(Topic topic, Team team, Member member);
}
