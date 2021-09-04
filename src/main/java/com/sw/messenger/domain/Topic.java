package com.sw.messenger.domain;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "topic")
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "topic_no")
    private Long topicNo;

    @Column(name = "topic_name")
    private String topicName;

    @Column(name = "topic_explain")
    private String topicExplain;

    @Column(name = "topic_root")
    private String topicRoot;

    @Column(name = "topic_confidential")
    private int topicConfidential;

    @Column(name = "topic_is_topic", columnDefinition = "int default 0")
    private int topicIsTopic;
}
