import React from "react";
import Axios from "axios";

function ChatSendFormComponent() {
    return (
        <div className="chat-send-content">
            <div className="chat-send-text">
                <input id="dropzone" className="form-control user-input" type="text" placeholder="메시지를 입력하세요" onChange={}/>
            </div>
            <div className="chat-send-button">
                <button type="submit" className="btn btn-lg btn-primary send-btn">전송</button>
            </div>
        </div>
    );
}

export default ChatSendFormComponent;