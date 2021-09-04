package com.sw.messenger.repository;

import com.sw.messenger.domain.TopicMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TopicMemberRepository extends JpaRepository<TopicMember, Long> {
}
