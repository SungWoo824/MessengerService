import React from "react";
import {Link} from "react-router-dom";

function ChatTopNavComponent() {
    return(
      <div>
          <nav className="navbar navbar-expand navbar-light bg-white topbar static-top newborder">
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
                      <span>topicDto.topic_name</span>
                  </div>
                  <div className="chat-menu-sub">
                      <span className="label">토픽정보</span>
                      <span>topicDto.topic_explain</span>
                  </div>
              </div>

              <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown no-arrow d-sm-none">
                      <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-search fa-fw">

                          </i>
                      </a>
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
                      <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-user-friends fa-lg">

                          </i>
                          <span className="badge badge-primary">
                                      countTeamMember
                                  </span>
                      </a>

                      <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                          <Link to={} className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inTeam">
                              <div>
                                  <span>
                                      팀 멤버 전체 보기
                                  </span>
                                  <span className="badge badge-primary">
                                      countTeamMember
                                  </span>
                              </div>
                          </Link>
                          <a className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inviteTeam">
                              <div>
                                  <span>
                                      팀 초대하기
                                  </span>
                              </div>
                          </a>
                      </div>
                  </li>
                  <!-- 팀, 토픽 기능 종료-->


                  <!-- Nav Item - Messages -->
                  <li className="nav-item dropdown no-arrow mx-1">
                      <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-user-plus fa-lg">

                          </i>
                      </a>
                      <!-- Dropdown - Messages -->
                      <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                          {/*토픽소유자*/}
                          <div>
                              <a className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inTopic">
                                  <div>
                                      <div className="text-truncate">토픽 멤버 보기</div>
                                  </div>
                              </a>
                              <a className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inviteTopic">
                                  <div>
                                      <div className="text-truncate">토픽 초대하기</div>
                                  </div>
                              </a>
                              <a className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#editTopic">
                                  <div>
                                      <div className="text-truncate">토픽 정보 변경</div>
                                  </div>
                              </a>
                              <c:if test="${topicList.size() > 1}">
                                  <a className="dropdown-item d-flex align-items-center" id="topic-delete-btn" href="deletetopic?topic_no=${param.topic_no }&team_no=${param.team_no}">
                                      <div>
                                          <div className="text-truncate">토픽 삭제하기</div>
                                      </div>
                                  </a>
                                  <c:if test="${topicMemberList.size() > 1 }">
                                      <a className="dropdown-item d-flex align-items-center topic-out-btn" data-toggle="modal" data-target="#topicMasterChange">
                                          <div>
                                              <div className="text-truncate">토픽 나가기</div>
                                          </div>
                                      </a>
                                  </c:if>
                                  <c:if test="${topicMemberList.size() < 2 }">
                                      <a className="dropdown-item d-flex align-items-center topic-out-btn" href="outtopic?topic_no=${param.topic_no }&member_no=${sessionScope.member_no}">
                                          <div>
                                              <div className="text-truncate">토픽 나가기</div>
                                          </div>
                                      </a>
                                  </c:if>
                              </c:if>
                          </div>

                          {/*other*/}
                          <div>
                              <a className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inTopic">
                                  <div>
                                      <div className="text-truncate">토픽 멤버 보기</div>
                                  </div>
                              </a>
                              <a className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inviteTopic">
                                  <div>
                                      <div className="text-truncate">토픽 초대하기</div>
                                  </div>
                              </a>
                              <a className="dropdown-item d-flex align-items-center topic-out-btn" href="outtopic?topic_no=${param.topic_no }&member_no=${sessionScope.member_no}">
                                  <div>
                                      <div className="text-truncate">토픽 나가기</div>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </li>

                  <li className="topbar-divider d-none d-sm-block">

                  </li>

                  <!-- Nav Item - User Information -->
                  <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="mr-2 d-none d-lg-inline text-gray-600 small">${member_name }</span>
                          <img className="img-profile rounded-circle" src=''/>
                      </a>
                      <!-- Dropdown - User Information -->
                      <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                          <a className="dropdown-item" href="/member/modify">
                              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400">

                              </i>
                              내 정보보기
                          </a>
                          <div className="dropdown-divider">

                          </div>
                          <a className="dropdown-item" href="/member/signout" >
                              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400">

                              </i>
                              로그아웃
                          </a>
                      </div>
                  </li>
              </ul>
          </nav>
      </div>
    );
}

export default ChatTopNavComponent;