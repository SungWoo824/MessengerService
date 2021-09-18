package com.sw.messenger.domain;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

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

    @CreationTimestamp
    @Column(name = "chat_time")
    private LocalDateTime chatTime;

    @Column(name = "chat_status")
    private int chatStatus;
}
