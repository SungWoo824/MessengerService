import React from "react";
import ChatWebSocketComponent from "./ChatWebSocketComponent";
import ChatSendFormComponent from "./ChatSendFormComponent";


function ChatAreaComponent(){
    return(
        <div>
            <div className="chat-wrap">
                <div className="chat-aside">
                    <div className="chat-menu-bar">
                        <div className="container-fluid">
                            <article className="message-wrap">
                                {/*메세지 결과 창*/}
                                <ChatWebSocketComponent/>
                                {/*전송*/}
                                <ChatSendFormComponent/>
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