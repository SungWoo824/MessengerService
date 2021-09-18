package com.sw.messenger.domain;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "chat_file")
public class ChatFile {
    @Id
    @Column(name = "chat_file_no")
    private Long chatFileNo;

    @ManyToOne
    @JoinColumn(name = "chat_no")
    private Chat chat;

    @Column(name = "chat_file_upload_name")
    private String chatFileUploadName;
    @Column(name = "chat_file_size")
    private int chatFileSize;
    @CreationTimestamp
    @Column(name = "chat_file_time")
    private LocalDateTime chatFileTime;
    @Column(name = "chat_file_type")
    private String chatFileType;
}
