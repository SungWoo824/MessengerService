package com.sw.messenger.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "team_member")
public class TeamMember {
    @Id
    private Long teamMemberNo;

    @ManyToOne
    @JoinColumn(name = "member_no")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "team_no")
    private Team team;

    @Column(name = "team_member_job_position")
    private String teamMemberJobPosition;

    @Column(name = "team_member_grade")
    private String teamMemberGrade;

    @Column(name = "team_member_auth")
    private int teamMemberAuth;
}
