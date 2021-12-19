package com.sw.messenger.repository;

import com.sw.messenger.domain.TopicMember;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TopicMemberRepository extends JpaRepository<TopicMember, Long> {
    List<TopicMember> findByTeam_TeamDomainAndMember_MemberEmail(String teamDomain, String memberEmail);
}
