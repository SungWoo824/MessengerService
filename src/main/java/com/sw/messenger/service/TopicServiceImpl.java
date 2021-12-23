package com.sw.messenger.service;

import com.sw.messenger.config.security.JwtTokenProvider;
import com.sw.messenger.domain.Member;
import com.sw.messenger.domain.Team;
import com.sw.messenger.domain.Topic;
import com.sw.messenger.domain.TopicMember;
import com.sw.messenger.domain.dto.ResponseMessage;
import com.sw.messenger.repository.TopicMemberRepository;
import com.sw.messenger.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

@Service
public class TopicServiceImpl implements TopicService{
    @Autowired
    private TopicRepository topicRepository;
    @Autowired
    private TopicMemberRepository topicMemberRepository;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

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

    @Override
    public ResponseMessage getTopicInfo(ServletRequest request, Long topicNo, String teamDomain) {
        String token = jwtTokenProvider.resolveToken((HttpServletRequest) request);
        Member member = (Member) jwtTokenProvider.getAuthentication(token).getPrincipal();
        TopicMember topicMember;
        if (topicNo==-1){
            topicMember = topicMemberRepository.findByMember_MemberEmailAndTeam_TeamDomain(member.getMemberEmail(),teamDomain);
        } else {
            topicMember = topicMemberRepository.findByMember_MemberEmailAndTopic_TopicNo(member.getMemberEmail(), topicNo);
        }

        if (topicMember==null){
            throw new AccessDeniedException("해당토픽에 대한 권한이 없습니다.");
        }

        return new ResponseMessage(topicMember.getTopic(),"토픽 정보를 불러왔습니다.");
    }
}
