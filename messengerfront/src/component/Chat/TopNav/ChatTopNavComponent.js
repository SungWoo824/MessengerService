import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'
import axios from "axios";
import {AuthenticationService} from "../../../lib/Authentication";
import TopicMenuDropDownComponet from "./TopicMenuDropDownComponent";
import TeamMenuDropDownComponent from "./TeamMenuDropDownComponent";
import UserInfoDropDownComponent from "./UserInfoDropDownComponent";

function ChatTopNavComponent(props) {
    const topicNo = props.topicNo??-1;
    const teamDomain = props.teamDomain;
    const [topic, setTopic] = useState({});
    const [topicOwner,setTopicOwner] = useState(false);
    const [topicModalVisible, setTopicModalVisible] = useState(false);
    const modalArea = useRef();

    const openModal = (e) => {
        console.log(e);
        debugger;
        setTopicModalVisible((modalVisible: boolean) => !modalVisible);
    }
    const closeModal = (e) => {
        if (!topicModalVisible && (!modalArea.current || !modalArea.current.contains(e.target))){
            setTopicModalVisible(false);
        }
    }

    const authenticationService = new AuthenticationService();
    authenticationService.setupAxiosInterceptors();
    const userName = authenticationService.getLoggedInUserName();

    useEffect(()=> {
        axios.get(
            "http://localhost:8080/topic?topicNo="+topicNo+"&teamDomain="+teamDomain
        ).then(function(res){
            const resData = res.data.data
            setTopic(resData.topic);
            setTopicOwner(resData.topicMemberPosition===2);

        })
        window.addEventListener('click',closeModal);
    },[props]);
    return(
      <div className="chat-top-nav">
          <nav className="navbar-expand navbar-light bg-white top-nav-bar static-top new-border">
              <button className="btn btn-link d-md-none rounded-circle mr-3">
                  <i className="fa fa-bars">
                  </i>
              </button>

              <div className="chat-img">
                  <div className="chat-img-bg">
                      <div>
                      </div>
                      <i className="fa fa-comment">
                      </i>
                  </div>
              </div>
              <div className="chat-menu-center">
                  <div className="chat-menu-title">
                      <span>{topic.topicName}</span>
                  </div>
                  <div className="chat-menu-sub">
                      <span className="label">토픽정보</span>
                      <span>{topic.topicExplain}</span>
                  </div>
              </div>

              <ul className="navbar-nav topic-menu-nav">

                  {/*팀, 토픽 기능 시작*/}
                  <li className="nav-item dropdown topic-menu-nav--item">
                      <button className="nav-link dropdown-toggle">
                          <i className="fas fa-user-friends fa-lg">

                          </i>
                          <span className="badge badge-primary">
                            countTeamMember
                          </span>
                      </button>

                      <TeamMenuDropDownComponent/>
                  </li>




                  <li className="nav-item dropdown no-arrow topic-menu-nav--item">
                      <div ref={modalArea}>
                          <button className="nav-link dropdown-toggle" onClick={openModal}>
                              <i className="fas fa-user-plus fa-lg">

                              </i>
                          </button>
                          <TopicMenuDropDownComponet
                              topicOwner={topicOwner}
                              visible={topicModalVisible}
                          />
                      </div>

                  </li>

                  <li className="nav-item dropdown no-arrow topic-menu-nav--item">
                      <button className="nav-link dropdown-toggle">
                          <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userName}</span>
                          <img className="img-profile rounded-circle" src='' alt=""/>
                      </button>

                      <UserInfoDropDownComponent/>
                  </li>
              </ul>
          </nav>
      </div>
    );
}

export default ChatTopNavComponent;