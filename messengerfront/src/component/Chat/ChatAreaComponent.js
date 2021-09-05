import React from "react";

function ChatAreaComponent(){

    return(
        <div>
            <div className="chat-wrap">
                <div className="chat-aside">
                    <div className="chat-menu-bar">
                        <!-- 채팅 창 -->
                        <div className="container-fluid" style="overflow:auto">

                            <article className="message-wrap">
                                <!-- 메세지 결과 창 -->

                                <div className="message" style="text-align: left">
                                    <div id="chat-content"  style="display: flex; flex-direction: column-reverse;">
                                        <c:forEach items="${topicChatList}" var="chatVo">
                                            <c:choose>
                                                <c:when test="${chatVo.chat_status==2}">
                                                    <div className="msg-wrap">
                                                        <div className="msg-profile">
                                                            <img id="member-profile-img" src=''/>
                                                        </div>

                                                        <div className="msg-con">
                                                            <span>chatVo.member_name</span>
                                                            <p className="msg">chatVo.chat_content</p>
                                                        </div>
                                                    </div>
                                                </c:when>

                                                <c:when test="${chatVo.chat_status==4}">

                                                    <div className="msg-wrap">
                                                        <div className="msg-profile">
                                                            <img id="member-profile-img" src=''/>
                                                        </div>

                                                        <div className="msg-con">
                                                            <span>chatVo.member_name</span>
                                                            <div className="card border-primary mb-3 admin-card" style="width: 20rem; height: 15rem;">
                                                                <div className="card-body admin-card-body">
                                                                    <c:choose>
                                                                        <c:when test="${fn:startsWith(chatVo.chat_file_type,'text')}">
                                                                            <div>
                                                                                <a href="filedownload?chat_file_no=${chatVo.chat_no}">
                                                                                    <img id="chat_dummy" src=""/>
                                                                                </a>
                                                                            </div>
                                                                        </c:when>
                                                                        <c:when test="${fn:startsWith(chatVo.chat_file_type,'image')}">
                                                                            <div>
                                                                                <a href="filedownload?chat_file_no=${chatVo.chat_no}">
                                                                                    <img id="chat_dummy" src=''/>
                                                                                </a>
                                                                            </div>
                                                                        </c:when>
                                                                        <c:otherwise>
                                                                            <div>
                                                                                <a href="filedownload?chat_file_no=${chatVo.chat_no}">
                                                                                    <img id="chat_dummy" src=""/>
                                                                                </a>
                                                                            </div>
                                                                        </c:otherwise>

                                                                    </c:choose>
                                                                    <p className="card-text">
                                                                        <a href="#">

                                                                        </a>
                                                                    </p>
                                                                </div>
                                                                <div className="card-header">chatVo.chat_content</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </c:when>
                                            </c:choose>
                                        </c:forEach>

                                    </div>
                                </div>

                                <!-- 전송 -->
                                <div className="chat-send-content">
                                    <div className="chat-send-text">
                                        <input id="dropzone" className="form-control user-input" type="text" placeholder="메시지를 입력하세요"/>
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