package com.sw.messenger.domain;

import lombok.Data;

import javax.persistence.*;

@Table(name = "chat")
@Entity
@Data
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long chatNo;
    @ManyToOne
    @JoinColumn(name = "topic_member_no")
    private TopicMember topicMember;

    @Column(name = "chat_content")
    private String chatContent;

    @Column(name = "chat_time")
    private String chatTime;

    @Column(name = "chat_status")
    private int chatStatus;
}
