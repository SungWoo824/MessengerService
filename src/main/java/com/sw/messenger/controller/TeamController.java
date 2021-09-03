package com.sw.messenger.controller;

import com.sw.messenger.domain.Team;
import com.sw.messenger.domain.dto.ResponseMessage;
import com.sw.messenger.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;

@RestController
@RequestMapping("/team")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @PostMapping("/regist")
    public ResponseEntity<ResponseMessage> registTeam(ServletRequest request, @RequestBody Team team) {
        ResponseMessage responseMessage = teamService.registTeam(request,team);
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
