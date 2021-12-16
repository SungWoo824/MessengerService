import React from "react";
import {Link} from "react-router-dom";
import ChatTopicListComponent from "./ChatTopicListComponent";

function ChatLeftSideComponent(){
    return(
        <div id="content-wrapper">
            {/*왼쪽 바 시작*/}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion newline" id="accordionSidebar">
                <div className="sidebar-brand d-flex" >
                    <div className="logowrap">
                        <div className="sidebar-brand-icon logo-back">
                            <img className="logo-icon" src="/images/logo.png" alt="logo" />
                        </div>
                        <div className="sidebar-brand-text">
                            Circle
                        </div>
                    </div>
                </div>
                <li className="nav-item move-to-main">
                    <Link className="nav-link" to="/member/mypage">
                        <div className="bg-img">
                            <img src="/images/home-bg.png" alt="home-logo"/>
                        </div>
                        <span className="home-name">서클 메인</span>
                    </Link>
                </li>

                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">
                    <Link to="#" className="nav-link topic-new" data-toggle="modal" data-target="#newTopicCreate">
                        <div className="bg-img">
                            <img src="/images/plus-bg.jpeg" alt="home-logo"/>
                        </div>
                        <span className="topic-create-btn home-name">토픽 생성하기</span>
                    </Link>
                </div>

                <hr className="sidebar-divider"/>

                {/*토픽 목록 시작*/}
                <li className="nav-item active">
                    <Link to="#" className="nav-link" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                        <div className="bg-img">
                            <img src="/images/folder-bg.png" alt="home-logo"/>
                        </div>
                        <span className="topic-create-btn topic-icon">토픽</span>
                    </Link>
                    <div id="collapsePages" className="collapse show" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded topic-list-area">
                            <ChatTopicListComponent/>
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