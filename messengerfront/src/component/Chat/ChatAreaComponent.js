import React from "react";
import SockJsClient from "react-stomp";
import ChatApi from "../../lib/ChatApi";

function ChatAreaComponent(){
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
    return(
        <div>
            <SockJsClient
                url={"http://localhost:6002/my-chat/"}
                topics={["/topic/group"]}
                onConnect={console.log("connected!")}
                onDisconnect={console.log("disconnected!")}
                onMessage={(msg) => onMessageReceived(msg)}
                debug={false}
            />
            <div className="chat-wrap">
                <div className="chat-aside">
                    <div className="chat-menu-bar">
                        <!-- 채팅 창 -->
                        <div className="container-fluid" style="overflow:auto">

                            <article className="message-wrap">
                                <!-- 메세지 결과 창 -->

                                <div className="message" style="text-align: left">
                                    <div id="chat-content"  style="display: flex; flex-direction: column-reverse;">


                                    </div>
                                </div>

                                <!-- 전송 -->
                                <div className="chat-send-content">
                                    <div className="chat-send-text">
                                        <input id="dropzone" className="form-control user-input" type="text" placeholder="메시지를 입력하세요" onChange={}/>
                                    </div>
                                    <div className="chat-send-button">
                                        <button type="submit" className="btn btn-lg btn-primary send-btn">전송</button>
                                    </div>

                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up">
                </i>
            </a>
        </div>
    );
}

export default ChatAreaComponent;