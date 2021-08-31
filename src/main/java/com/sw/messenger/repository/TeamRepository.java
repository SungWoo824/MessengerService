package com.sw.messenger.repository;

import com.sw.messenger.domain.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team,Long> {
    Team findByTeamNo(Long teamNo);
    Team findByTeamDomain(String teamDomain);
}
