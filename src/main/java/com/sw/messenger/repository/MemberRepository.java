package com.sw.messenger.repository;

import com.sw.messenger.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Integer> {
    Optional<Member> findByMemberEmail(String memberEmail);
}
