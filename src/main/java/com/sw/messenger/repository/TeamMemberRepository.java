package com.sw.messenger.repository;

import com.sw.messenger.domain.TeamMember;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeamMemberRepository extends JpaRepository<TeamMember,Long> {
    List<TeamMember> findByMember_MemberNo(Long memberNo);
    TeamMember findByMember_MemberNoAndAndTeam_TeamNo(Long memberNo, Long teamNo);
}
