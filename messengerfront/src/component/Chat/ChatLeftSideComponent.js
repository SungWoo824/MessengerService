import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ChatTopicListComponent from "./ChatTopicListComponent";
import {AuthenticationService} from "../../lib/Authentication";
import axios from "axios";

function ChatLeftSideComponent(props){
    const authenticationService = new AuthenticationService();
    authenticationService.setupAxiosInterceptors();
    let [topicList, setTopicList] = useState([]);
    let [topicLoading,setTopicLoading] = useState(true);

    useEffect(()=>{
        axios.get(
            "http://localhost:8080/team/topic?teamDomain="+props.teamDomain
        ).then(function (res) {
            if (res.data.data === 401) {
                console.log("Not allow!!!");
                return false;
            } else {
                const topicResponse = res.data.data;
                topicResponse.forEach(elem => {
                    setTopicList(prev => [elem.topic, ...prev]);
                })
                setTopicLoading(false);
            }
        })
    },[props]);
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
                            {topicLoading?
                                <div></div>
                                :
                                (topicList.map(topic => (
                                    <ChatTopicListComponent
                                        key={topic.topicNo}
                                        topicNo={topic.topicNo}
                                        topicName={topic.topicName}
                                        topicExplain={topic.topicExplain}
                                        topicConfidential={topic.topicConfidential}
                                        teamDomain = {props.teamDomain}
                                    />
                                )))
                            }

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