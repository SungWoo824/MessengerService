import React from "react";
import SockJsClient from "react-stomp";
import ChatApi from "../../lib/ChatApi";

function ChatWebSocketComponent() {
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState(null);

    const onMessageReceived = (msg) =>{
        console.log("New Message Received ! ", msg);
        setMessages(messages.concat(msg));
    };

    const handleLoginSubmit = (name) => {
        setUser({name: name, color : randomColor() });
    }

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
            <div className="message" style="text-align: left">
                <div id="chat-content"  style="display: flex; flex-direction: column-reverse;">


                </div>
            </div>
        </div>
    );
}

export default ChatWebSocketComponent;