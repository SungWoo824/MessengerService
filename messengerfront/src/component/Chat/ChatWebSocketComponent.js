import React, {useState, useRef} from "react";
import SockJsClient from "react-stomp";
import ChatApi from "../../lib/ChatApi";
import {AuthenticationService} from "../../lib/Authentication";
import ChatContentComponent from "./ChatContentComponent";


function ChatWebSocketComponent() {
    const [messages, setMessages] = useState([]);
    const authenticationService = new AuthenticationService();
    const user = authenticationService.getLoggedInUserName();
    const chatContentArea = useRef();
    const onMessageReceived = (msg) =>{
        console.log("New Message Received ! ", msg);
        setMessages(messages.concat(msg));
        chatContentArea.current;
    };
    return (
        <div>
            <SockJsClient
                url={"http://localhost:6002/my-chat/"}
                topics={["/topic/group"]}
                onConnect={console.log("connected!")}
                onDisconnect={console.log("disconnected!")}
                onMessage={(msg) => onMessageReceived(msg)}
                debug={false}
            />
            <div className="message">
                <div id="chat-content" ref={chatContentArea}>
                </div>
            </div>
        </div>
    );
}

export default ChatWebSocketComponent;