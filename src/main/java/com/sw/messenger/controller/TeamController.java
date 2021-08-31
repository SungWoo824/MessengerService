package com.sw.messenger.controller;

import com.sw.messenger.domain.Team;
import com.sw.messenger.domain.dto.ResponseMessage;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;

@RestController
@RequestMapping("/team")
public class TeamController {

    @PostMapping("/regist")
    public ResponseEntity<ResponseMessage> registTeam(ServletRequest request, @RequestBody Team team) {

        return null;
    }

    @GetMapping("/teamList")
    public ResponseEntity<ResponseMessage> teamList(){

        return null;
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
