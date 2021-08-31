package com.sw.messenger.service;

import com.sw.messenger.domain.Member;
import com.sw.messenger.domain.Team;
import com.sw.messenger.domain.dto.ResponseMessage;

import javax.servlet.ServletRequest;

public interface TeamService {
    ResponseMessage registTeam(ServletRequest request,Team team);
    ResponseMessage getTeamList(Long memberNo);
    ResponseMessage modifyTeamSetting(Team team);
    ResponseMessage teamOwnerSetting(Team team);
}
