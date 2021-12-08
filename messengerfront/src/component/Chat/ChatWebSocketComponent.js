import React, {useState} from "react";
import SockJsClient from "react-stomp";
import ChatApi from "../../lib/ChatApi";
import {AuthenticationService} from "../../lib/Authentication";

function ChatWebSocketComponent() {
    const [messages, setMessages] = useState([]);
    const authenticationService = new AuthenticationService();
    const user = authenticationService.getLoggedInUserName();

    const onMessageReceived = (msg) =>{
        console.log("New Message Received ! ", msg);
        setMessages(messages.concat(msg));
    };

    const handleMessageSubmit = (msg) => {
        ChatApi
            .sendMessage(user.name, msg)
            .then((res) => {
                console.log("sent", res);
            })
            .catch((e) => {
                console.log(e);
            });
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
                <div id="chat-content">


                </div>
            </div>
        </div>
    );
}

export default ChatWebSocketComponent;