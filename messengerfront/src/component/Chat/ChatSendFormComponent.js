import React, {useState} from "react";
import chatApi from "../../lib/ChatApi";
import authentication from "../../lib/Authentication";

function ChatSendFormComponent() {
    const [inputMessage, setInputMessage] = useState('');
    const handleInputMessage = (e) => {
        setInputMessage(e.target.value);
        console.log(inputMessage);
    }
    // const handleMessageSubmit = (msg) => {
    //     chatApi.sendMessage(authentication.getLoggedInUserName(),msg)
    //         .then((res) => {
    //             console.log("sent", res);
    //         }).catch((e) => {
    //             console.log(e);
    //     })
    // }
    return (
        <form>
            <div className="chat-send-content">
                    <div className="chat-send-text">
                        <input id="dropzone" className="user-input" type="text" placeholder="메시지를 입력하세요" onChange={handleInputMessage}/>
                    </div>
                    <div className="chat-send-button">
                        <button type="submit" className="btn btn-lg btn-primary send-btn">전송</button>
                    </div>
            </div>
        </form>
    );
}

export default ChatSendFormComponent;