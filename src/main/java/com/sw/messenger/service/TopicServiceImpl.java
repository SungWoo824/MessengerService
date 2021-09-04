package com.sw.messenger.service;

import com.sw.messenger.domain.Member;
import com.sw.messenger.domain.Team;
import com.sw.messenger.domain.Topic;
import com.sw.messenger.domain.TopicMember;
import com.sw.messenger.domain.dto.ResponseMessage;
import com.sw.messenger.repository.TopicMemberRepository;
import com.sw.messenger.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TopicServiceImpl implements TopicService{
    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private TopicMemberRepository topicMemberRepository;

    @Override
    public ResponseMessage registTopic(Topic topic, Team team, Member member) {
        Topic saveTopic = topicRepository.save(topic);
        TopicMember topicMember =new TopicMember();
        topicMember.setTopic(saveTopic);
        topicMember.setMember(member);
        topicMember.setTeam(team);
        topicMember.setTopicMemberPosition(2);
        topicMemberRepository.save(topicMember);

        return new ResponseMessage(saveTopic,"토픽 생성에 성공하였습니다.");
    }
}
