import React, {useState, useEffect} from "react";
import {AuthenticationService} from "../../lib/Authentication";
import ChatContentComponent from "./ChatContentComponent";
import Stomp from "stompjs";
import SockJS from "sockjs-client";


function ChatWebSocketComponent() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const authenticationService = new AuthenticationService();
    const user = authenticationService.getLoggedInUserName();
    const [contents, setContents] = React.useState([]);
    const [username, setUsername] = React.useState('');

    let sockJS = new SockJS("http://localhost:8080/my-chat");
    let stompClient = Stomp.over(sockJS);
    const userToken = localStorage.getItem('token');
    console.log(userToken);

    useEffect(()=>{
        stompClient.connect({"X-AUTH-TOKEN" : userToken},(e)=>{
            console.log(e);
            stompClient.subscribe('/topic/group',(data)=>{
                console.log(data);
                // const newMessage : message = JSON.parse(data.body) as message;
                // addMessage(newMessage);
            });
        },(e)=>{console.log("Socket Error!!!!");});
    },[]);
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