package com.sw.messenger.service;

import com.sw.messenger.advice.exception.CUserNotFoundException;
import com.sw.messenger.domain.Member;
import com.sw.messenger.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class CustomUserDetailService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String userPk) throws UsernameNotFoundException {
        Member member = memberRepository.findById(Long.valueOf(userPk)).orElseThrow(CUserNotFoundException::new);
        List<String> list = new ArrayList<String>();
        list.add("ROLE_USER");
        member.setRoles(list);
        return member;
    }
}
