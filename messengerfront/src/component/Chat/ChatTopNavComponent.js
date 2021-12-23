import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {AuthenticationService} from "../../lib/Authentication";

function ChatTopNavComponent(props) {
    const topicNo = props.topicNo??-1;
    const teamDomain = props.teamDomain;
    const [topic, setTopic] = useState({});
    /*
    topicConfidential: 0
topicExplain: "General"
topicIsTopic: 0
topicName: "General"
topicNo: 2
topicRoot: null
     */
    const authenticationService = new AuthenticationService();
    authenticationService.setupAxiosInterceptors();
    useEffect(()=> {
        axios.get(
            "http://localhost:8080/topic?topicNo="+topicNo+"&teamDomain="+teamDomain
        ).then(function(res){
            setTopic(res.data.data);
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

              <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown no-arrow d-sm-none">
                      <Link className="nav-link dropdown-toggle" to="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-search fa-fw">

                          </i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                          <div className="input-group">
                              <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                              <div className="input-group-append">
                                  <button className="btn btn-primary" type="button">
                                      <i className="fas fa-search fa-sm">

                                      </i>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </li>

                  {/*팀, 토픽 기능 시작*/}
                  <li className="nav-item dropdown no-arrow mx-1">
                      <Link className="nav-link dropdown-toggle" to="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-user-friends fa-lg">

                          </i>
                          <span className="badge badge-primary">
                                      countTeamMember
                                  </span>
                      </Link>

                      <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                          <Link to="#" className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inTeam">
                              <div>
                                  <span>
                                      팀 멤버 전체 보기
                                  </span>
                                  <span className="badge badge-primary">
                                      countTeamMember
                                  </span>
                              </div>
                          </Link>
                          <Link to="#" className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inviteTeam">
                              <div>
                                  <span>
                                      팀 초대하기
                                  </span>
                              </div>
                          </Link>
                      </div>
                  </li>




                  <li className="nav-item dropdown no-arrow mx-1">
                      <Link className="nav-link dropdown-toggle" to="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-user-plus fa-lg">

                          </i>
                      </Link>

                      <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                          {/*토픽소유자*/}
                          <div>
                              <Link to="#" className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inTopic">
                                  <div>
                                      <div className="text-truncate">토픽 멤버 보기</div>
                                  </div>
                              </Link>
                              <Link to="#" className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inviteTopic">
                                  <div>
                                      <div className="text-truncate">토픽 초대하기</div>
                                  </div>
                              </Link>
                              <Link to="#" className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#editTopic">
                                  <div>
                                      <div className="text-truncate">토픽 정보 변경</div>
                                  </div>
                              </Link>
                              {/*<c:if test="${topicList.size() > 1}">*/}
                                  <Link to="#" className="dropdown-item d-flex align-items-center" id="topic-delete-btn">
                                      <div>
                                          <div className="text-truncate">토픽 삭제하기</div>
                                      </div>
                                  </Link>
                                  {/*<c:if test="${topicMemberList.size() > 1 }">*/}
                                      <Link to="#" className="dropdown-item d-flex align-items-center topic-out-btn" data-toggle="modal" data-target="#topicMasterChange">
                                          <div>
                                              <div className="text-truncate">토픽 나가기</div>
                                          </div>
                                      </Link>
                                  {/*</c:if>*/}
                                  {/*<c:if test="${topicMemberList.size() < 2 }">*/}
                                      <Link to="#" className="dropdown-item d-flex align-items-center topic-out-btn">
                                          <div>
                                              <div className="text-truncate">토픽 나가기</div>
                                          </div>
                                      </Link>
                                  {/*</c:if>*/}
                              {/*</c:if>*/}
                          </div>

                          {/*other*/}
                          <div>
                              <Link to="#" className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inTopic">
                                  <div>
                                      <div className="text-truncate">토픽 멤버 보기</div>
                                  </div>
                              </Link>
                              <Link to="#" className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inviteTopic">
                                  <div>
                                      <div className="text-truncate">토픽 초대하기</div>
                                  </div>
                              </Link>
                              <Link to="#" className="dropdown-item d-flex align-items-center topic-out-btn">
                                  <div>
                                      <div className="text-truncate">토픽 나가기</div>
                                  </div>
                              </Link>
                          </div>
                      </div>
                  </li>

                  <li className="topbar-divider d-none d-sm-block">

                  </li>


                  <li className="nav-item dropdown no-arrow">
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