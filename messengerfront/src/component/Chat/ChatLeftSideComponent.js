import React from "react";

function ChatLeftSideComponent(){
    return(
        <div>
            {/*왼쪽 바 시작*/}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion newline" id="accordionSidebar">
                <div className="sidebar-brand d-flex align-items-center justify-content-center" >
                    <div className="logowrap" onClick="location.href ='${pageContext.request.contextPath}'" style="cursor:pointer;">
                        <div className="sidebar-brand-icon logo-back">
                            <img style="width:44px" src="" alt="logo" />
                        </div>
                        <div className="sidebar-brand-text" style="top: 1.5rem; position: absolute; font-size:20px; top:18px; left:86px; color:#fff;">
                            Circle
                        </div>
                    </div>
                </div>

                <hr className="sidebar-divider my-0"/>
                <div className="sidebar-heading">
                    <a className="nav-link topic-new" data-toggle="modal" data-target="#newTopicCreate">
                        <i style="color:#2196f3" className="fa fa-fw fa-plus topm">

                        </i>
                        <span style="color:#666">토픽 생성하기</span>
                    </a>
                </div>

                <hr className="sidebar-divider"/>

                {/*토픽 목록 시작*/}
                <li className="nav-item active">
                    <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder">

                        </i>
                        <span>토픽</span>
                    </a>
                    <div id="collapsePages" className="collapse show" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            {/*<c:forEach items="${topicList}" var="topicListDto" varStatus="status" >*/}
                                <a className="collapse-item" href="/chat/topic_main?team_no=${param.team_no}&topic_no=${topicListDto.topic_no}">
                                    topicListDto.topic_name
                                    <span className="badge badge-primary badge-pill ${topicListDto.topic_no}">
                                        {/*<c:if test="${memberChatCount[status.index].count ne 0 && topicListDto.topic_no ne param.topic_no}">*/}
                                            memberChatCount[status.index].count
                                        {/*</c:if>*/}
                                    </span>
                                </a>
                            {/*</c:forEach>*/}
                            <div className="collapse-divider">

                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ChatLeftSideComponent;