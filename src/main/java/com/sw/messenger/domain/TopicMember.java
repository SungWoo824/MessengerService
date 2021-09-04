package com.sw.messenger.domain;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "topic_member")
public class TopicMember {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "topic_member_no")
    private Long topicMemberNo;

    @ManyToOne
    @JoinColumn(name = "member_no")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "team_no")
    private Team team;

    @ManyToOne
    @JoinColumn(name = "topic_no")
    private Topic topic;

    @Column(name = "topic_member_position")
    private int topicMemberPosition;

}
