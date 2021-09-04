package com.sw.messenger.service;

import com.sw.messenger.config.security.JwtTokenProvider;
import com.sw.messenger.domain.Member;
import com.sw.messenger.domain.Team;
import com.sw.messenger.domain.TeamMember;
import com.sw.messenger.domain.dto.ResponseMessage;
import com.sw.messenger.repository.TeamMemberRepository;
import com.sw.messenger.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class TeamServiceImpl implements TeamService{

    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private TeamMemberRepository teamMemberRepository;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Override
    public ResponseMessage registTeam(Team team, Member member) {
        if(teamRepository.findByTeamDomain(team.getTeamDomain())!=null){
            throw new DuplicateKeyException("이미 존재하는 팀도메인 입니다.");
        }
        Team saveTeam = teamRepository.save(team);

        TeamMember teamMember = new TeamMember();
        teamMember.setTeam(saveTeam);
        teamMember.setMember(member);
        teamMember.setTeamMemberAuth(2);
        teamMember.setTeamMemberGrade("관리자");
        teamMember.setTeamMemberJobPosition("ADMIN");
        teamMemberRepository.save(teamMember);

        return new ResponseMessage(saveTeam,"팀 생성에 성공하였습니다.");
    }

    @Override
    public ResponseMessage getTeamList(Long memberNo) {
        List<TeamMember> teamMemberList = teamMemberRepository.findByMember_MemberNo(memberNo);

        return new ResponseMessage(teamMemberList, "팀 목록 출력에 성공하였습니다.");
    }

    @Override
    public ResponseMessage getTeamInfo(ServletRequest request, Long teamNo) {
        String token = jwtTokenProvider.resolveToken((HttpServletRequest) request);
        Member member = (Member) jwtTokenProvider.getAuthentication(token).getPrincipal();
        TeamMember teamMember = teamMemberRepository.findByMember_MemberNoAndAndTeam_TeamNo(member.getMemberNo(), teamNo);
        if (teamMember==null){
            throw new AccessDeniedException("해당팀에 대한 권한이 없습니다.");
        }

        return new ResponseMessage(teamMember, "팀 정보를 불러왔습니다.");
    }

    @Override
    public ResponseMessage modifyTeamSetting(Team team) {
        return null;
    }

    @Override
    public ResponseMessage teamOwnerSetting(Team team) {
        return null;
    }
}
