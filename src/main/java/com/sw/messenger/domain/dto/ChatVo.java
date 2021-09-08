package com.sw.messenger.domain.dto;

import lombok.Data;

@Data
public class ChatVo {
    private int chat_no;
    private int team_no;
    private int topic_no;
    private int member_no;
    private String member_name;
    private String chat_content,chat_file_type;
    private int status;//0(enter), 1(exit), 2(message), 4 (file)
    private int chat_status;
    private String timeStamp;
}
