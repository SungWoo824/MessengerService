package com.sw.messenger.controller;

import com.sw.messenger.config.security.JwtTokenProvider;
import com.sw.messenger.domain.Member;
import com.sw.messenger.domain.Team;
import com.sw.messenger.domain.Topic;
import com.sw.messenger.domain.dto.ResponseMessage;
import com.sw.messenger.service.TeamService;
import com.sw.messenger.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/team")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @Autowired
    private TopicService topicService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/regist")
    public ResponseEntity<ResponseMessage> registTeam(ServletRequest request, @RequestBody Team team) {
        String token = jwtTokenProvider.resolveToken((HttpServletRequest) request);
        Member member = (Member) jwtTokenProvider.getAuthentication(token).getPrincipal();
        Topic topic = new Topic();
        topic.setTopicName("General");
        topic.setTopicConfidential(0);
        topic.setTopicExplain("General");
        ResponseMessage responseMessage = teamService.registTeam(team, member);
        topicService.registTopic(topic, (Team) responseMessage.getData(),member);

        return new ResponseEntity<>(responseMessage, HttpStatus.OK);
    }

    @GetMapping("/teamList")
    public ResponseEntity<ResponseMessage> teamList(@RequestParam Long memberNo){
        ResponseMessage responseMessage = teamService.getTeamList(memberNo);

        return new ResponseEntity<>(responseMessage, HttpStatus.OK);
    }

    @GetMapping("/modify/teamInfo")
    public ResponseEntity<ResponseMessage> getTeamInfo(ServletRequest request, @RequestParam Long teamNo){
        ResponseMessage responseMessage = teamService.getTeamInfo(request,teamNo);

        return new ResponseEntity<>(responseMessage, HttpStatus.OK);
    }

    @PutMapping("/modify/setting")
    public ResponseEntity<ResponseMessage> modifyTeamSetting(){

        return null;
    }

    @PutMapping("/modify/owner")
    public ResponseEntity<ResponseMessage> modifyTeamOwner(){

        return null;
    }
}
