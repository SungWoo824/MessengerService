import React from "react";
import {Link} from "react-router-dom";

function ChatLeftSideComponent(){
    return(
        <div>
            {/*왼쪽 바 시작*/}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion newline" id="accordionSidebar">
                <div className="sidebar-brand d-flex align-items-center justify-content-center" >
                    <div className="logowrap">
                        <div className="sidebar-brand-icon logo-back">
                            <img src="" alt="logo" />
                        </div>
                        <div className="sidebar-brand-text">
                            Circle
                        </div>
                    </div>
                </div>

                <hr className="sidebar-divider my-0"/>
                <div className="sidebar-heading">
                    <Link to="#" className="nav-link topic-new" data-toggle="modal" data-target="#newTopicCreate">
                        <i className="fa fa-fw fa-plus topm topic-create-li">

                        </i>
                        <span className="topic-create-btn">토픽 생성하기</span>
                    </Link>
                </div>

                <hr className="sidebar-divider"/>

                {/*토픽 목록 시작*/}
                <li className="nav-item active">
                    <Link to="#" className="nav-link" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder">

                        </i>
                        <span>토픽</span>
                    </Link>
                    <div id="collapsePages" className="collapse show" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            {/*<c:forEach items="${topicList}" var="topicListDto" varStatus="status" >*/}
                                <Link to="#" className="collapse-item">
                                    topicListDto.topic_name
                                    <span className="badge badge-primary badge-pill">
                                        {/*<c:if test="${memberChatCount[status.index].count ne 0 && topicListDto.topic_no ne param.topic_no}">*/}
                                            memberChatCount[status.index].count
                                        {/*</c:if>*/}
                                    </span>
                                </Link>
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