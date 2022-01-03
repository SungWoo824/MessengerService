package com.sw.messenger.repository;

import com.sw.messenger.domain.Topic;
import com.sw.messenger.domain.TopicMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TopicMemberRepository extends JpaRepository<TopicMember, Long> {
    public static final String TOPIC_MEMBER_LIST = "SELECT Member .member_email,Member .member_name,Member .member_grade FROM Topic_Member left join member using(member_no) where topic_no = ?1";

    List<TopicMember> findByTeam_TeamDomainAndMember_MemberEmail(String teamDomain, String memberEmail);
    TopicMember findByMember_MemberEmailAndTopic_TopicNo(String memberEmail, Long topicNo);
    TopicMember findByMember_MemberEmailAndTeam_TeamDomain(String memberEmail, String teamDomain);

    @Query(value = TOPIC_MEMBER_LIST,nativeQuery = true)
    List<Object> getTopicMemberList(Long topicNo);
}
