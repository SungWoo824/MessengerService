import React, {useEffect, useRef, useState} from "react";
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
    const [topicMember,setTopicMember] = useState([]);

    const [modalAreaCheck, setModalAreaCheck] = useState({
        teamArea : false,
        topicArea : false,
        userInfoArea : false
    });
    const { teamArea, topicArea, userInfoArea } = modalAreaCheck;
    const areaRef = useRef([]);
    const openModal = (e) => {
        const target = e.target.nextElementSibling.id;
        checkModalArea(target);
    }
    const closeModal = (e) => {
        Object.keys(modalAreaCheck).map(function(key) {
            if (modalAreaCheck[key]){
                let modalArea = null;
                if (key === "teamArea"){
                    modalArea = areaRef.current[0];
                } else if (key === "topicArea") {
                    modalArea = areaRef.current[1];
                } else if (key === "userInfoArea") {
                    modalArea = areaRef.current[2];
                }

                if (!modalArea.current || !modalArea.current.contains(e.target)) {
                    checkModalArea(key);
                }
                return false;
            }
        });
        window.removeEventListener('click',closeModal);
    }
    const checkModalArea = (target) => {
        if (target === "teamArea"){
            setModalAreaCheck({
                "teamArea" : !teamArea,
                "topicArea" : false,
                "userInfoArea" : false
            })
        } else if (target === "topicArea") {
            setModalAreaCheck({
                "teamArea" : false,
                "topicArea" : !topicArea,
                "userInfoArea" : false
            })
        } else if (target === "userInfoArea") {
            setModalAreaCheck({
                "teamArea" : false,
                "topicArea" : false,
                "userInfoArea" : !userInfoArea
            })
        }
    }

    const authenticationService = new AuthenticationService();
    authenticationService.setupAxiosInterceptors();
    const userName = authenticationService.getLoggedInUserName();

    useEffect(()=> {
        axios.get(
            "http://localhost:8080/topic?topicNo="+topicNo+"&teamDomain="+teamDomain
        ).then(function(res){
            const topicInfo = res.data.data.topicMember;
            setTopic(topicInfo.topic);
            setTopicOwner(topicInfo.topicMemberPosition===2);
            const topicMemberList = res.data.data.topicMemberList;
            topicMemberList.forEach(topicMember => {
                setTopicMember(prevState => [...prevState,topicMember]);
            });
            console.log(topicMember);
        })
    },[]);
    useEffect(() => {
        window.addEventListener('click',closeModal);
    },[modalAreaCheck])
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
                  <li ref={elem => (areaRef.current[0] = elem)} className="nav-item dropdown topic-menu-nav--item">
                      <button className="nav-link dropdown-toggle"  onClick={openModal}>
                          <i className="fas fa-user-friends fa-lg">

                          </i>
                          <span className="badge badge-primary">
                            countTeamMember
                          </span>
                      </button>

                      <TeamMenuDropDownComponent
                          id={"teamArea"}
                          topicOwner={topicOwner}
                          visible={teamArea}
                      />
                  </li>




                  <li ref={elem => (areaRef.current[1] = elem)} className="nav-item dropdown no-arrow topic-menu-nav--item">
                      <div>
                          <button className="nav-link dropdown-toggle" onClick={openModal}>
                              <i className="fas fa-user-plus fa-lg">

                              </i>
                          </button>
                          <TopicMenuDropDownComponet
                              id={"topicArea"}
                              topicOwner={topicOwner}
                              visible={topicArea}
                          />
                      </div>

                  </li>

                  <li ref={elem => (areaRef.current[2] = elem)} className="nav-item dropdown no-arrow topic-menu-nav--item">
                      <button className="nav-link dropdown-toggle"  onClick={openModal}>
                          <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userName}</span>
                          <img className="img-profile rounded-circle" src='' alt=""/>
                      </button>

                      <UserInfoDropDownComponent
                          id={"userInfoArea"}
                          topicOwner={topicOwner}
                          visible={userInfoArea}
                      />
                  </li>
              </ul>
          </nav>
      </div>
    );
}

export default ChatTopNavComponent;