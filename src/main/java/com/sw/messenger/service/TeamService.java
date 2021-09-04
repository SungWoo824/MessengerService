package com.sw.messenger.service;

import com.sw.messenger.domain.Member;
import com.sw.messenger.domain.Team;
import com.sw.messenger.domain.dto.ResponseMessage;

import javax.servlet.ServletRequest;

public interface TeamService {
    ResponseMessage registTeam(Team team, Member member);
    ResponseMessage getTeamList(Long memberNo);
    ResponseMessage getTeamInfo(ServletRequest request, Long TeamNo);
    ResponseMessage modifyTeamSetting(Team team);
    ResponseMessage teamOwnerSetting(Team team);
}
