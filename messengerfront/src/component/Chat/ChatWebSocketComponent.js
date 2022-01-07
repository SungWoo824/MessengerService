import React, {useState, useEffect} from "react";
import SockJsClient from "react-stomp";
import axios from "axios";
import ChatApi from "../../lib/ChatApi";
import {AuthenticationService} from "../../lib/Authentication";
import ChatContentComponent from "./ChatContentComponent";


function ChatWebSocketComponent() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const authenticationService = new AuthenticationService();
    const user = authenticationService.getLoggedInUserName();
    // useEffect(() => {
    //     axios.get(
    //
    //     ).then(function(res) {
    //         res.forEach(data => {
    //             const chatData = {
    //
    //             }
    //             setMessages(prevState => [chatData, ...prevState]);
    //         })
    //     })
    // }, []);
    const onMessageReceived = (msg) =>{
        console.log("New Message Received ! ", msg);
        setMessages(messages.concat(msg));
    };
    return (
        <>
            <SockJsClient
                url={"http://localhost:8080/my-chat?user_name="+user}
                topics={["/topic/group"]}
                onConnect={console.log("connected!")}
                onDisconnect={console.log("disconnected!")}
                onMessage={(msg) => onMessageReceived(msg)}
            />
            <div className="message">
                <div id="chat-content">
                    {messages.map((message)=>(
                        <ChatContentComponent
                            id={message.id}
                            chatNo={message.chatNo}
                            memberName={message.memberName}
                            chatContent={message.chatContent}
                            chatFileType={message.chatFileType}
                            chatStatus={message.chatStatus}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ChatWebSocketComponent;