import React, {useEffect, useState, useRef} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {AuthenticationService} from "../../lib/Authentication";
import TopicMenuDropDownComponet from "./TopicMenuDropDownComponent";

function ChatTopNavComponent(props) {
    const topicNo = props.topicNo??-1;
    const teamDomain = props.teamDomain;
    const [topic, setTopic] = useState({});
    const [topicOwner,setTopicOwner] = useState(false);
    const topicDropDownMenu = useRef(null);
    const onClickToggleButton = (e) => {
        console.log(topicDropDownMenu.show());
    }
    const authenticationService = new AuthenticationService();
    authenticationService.setupAxiosInterceptors();
    useEffect(()=> {
        axios.get(
            "http://localhost:8080/topic?topicNo="+topicNo+"&teamDomain="+teamDomain
        ).then(function(res){
            const resData = res.data.data
            setTopic(resData.topic);
            setTopicOwner(resData.topicMemberPosition===2);
        })
    },[props])
    return(
      <div className="chat-top-nav">
          <nav className="navbar-expand navbar-light bg-white top-nav-bar static-top newborder">
              <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
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
                      <Link className="nav-link dropdown-toggle" to="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-user-friends fa-lg">

                          </i>
                          <span className="badge badge-primary">
                                      countTeamMember
                          </span>
                      </Link>

                      <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                          <button className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inTeam">
                              <div>
                                  <span>
                                      팀 멤버 전체 보기
                                  </span>
                                  <span className="badge badge-primary">
                                      countTeamMember
                                  </span>
                              </div>
                          </button>
                          <Link to="#" className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inviteTeam">
                              <div>
                                  <span>
                                      팀 초대하기
                                  </span>
                              </div>
                          </Link>
                      </div>
                  </li>




                  <li className="nav-item dropdown no-arrow topic-menu-nav--item">
                      <button className="nav-link dropdown-toggle" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={onClickToggleButton}>
                          <i className="fas fa-user-plus fa-lg">

                          </i>
                      </button>

                      <TopicMenuDropDownComponet ref={topicDropDownMenu} topicOwner={topicOwner}/>
                  </li>

                  <li className="nav-item dropdown no-arrow topic-menu-nav--item">
                      <Link to="#" className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="mr-2 d-none d-lg-inline text-gray-600 small">member_name</span>
                          <img className="img-profile rounded-circle" src='' alt=""/>
                      </Link>

                      <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                          <Link to="#" className="dropdown-item">
                              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400">

                              </i>
                              내 정보보기
                          </Link>
                          <div className="dropdown-divider">

                          </div>
                          <Link to="#" className="dropdown-item">
                              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400">

                              </i>
                              로그아웃
                          </Link>
                      </div>
                  </li>
              </ul>
          </nav>
      </div>
    );
}

export default ChatTopNavComponent;