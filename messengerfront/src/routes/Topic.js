import React from "react";
import {Link} from "react-router-dom";
import ChatTeamModalComponent from "../component/Chat/ChatTeamModalComponent";
import ChatLeftSideComponent from "../component/Chat/ChatLeftSideComponent";
import ChatTopNavComponent from "../component/Chat/ChatTopNavComponent";
import ChatAreaComponent from "../component/Chat/ChatAreaComponent";
import TeamInviteComponent from "../component/Chat/TeamInviteComponent";
import TopicCreateModalComponent from "../component/Chat/TopicCreateModalComponent";
import TopicMemberListComponent from "../component/Chat/TopicMemberListComponent";

function Topic() {
    return (
      <div>
          <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                  <ChatTopNavComponent/>
                  <ChatLeftSideComponent/>
                  {/*채팅 부분*/}
                  <ChatAreaComponent/>
                  {/*팀  모달 시작*/}
                  <ChatTeamModalComponent/>
                  {/*// <!-- 팀 리스트end -->*/}

                  {/*// <!-- 팀 초대 -->*/}
                  <TeamInviteComponent/>
                  {/*// <!-- 팀 초대 end -->*/}
                  {/*팀  모달 종료 */}

                  {/*토픽 모달 시작*/}
                  {/*    // <!-- 토픽 기능 모달-->*/}
                  {/*    // <!-- 토픽생성 모달 -->*/}
                  <TopicCreateModalComponent/>
                  {/*// <!-- 새토픽 생성 end -->*/}

                  {/*// <!-- 토픽 참여자리스트 -->*/}
                  <TopicMemberListComponent/>
                  {/*// <!-- 토픽 참여자end -->*/}

                  {/*// <!-- 토픽 정보변경 -->*/}
                  <div className="modal fade" id="editTopic" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalCenterTitle">
                                      토픽 정보 변경
                                  </h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">
                                          &times;
                                      </span>
                                  </button>
                              </div>
                              <div className="modal-body">
                                  <input type="hidden" name="team_no" value=""/>
                                  <input type="hidden" name="topic_no" value=""/>
                                  이름 :<input type="text" name="topic_name"/>
                                  <span>

                                  </span>
                                  <br/>
                                  <br/>
                                  토픽 설명 :
                                  <textarea name="topic_explain" rows="" cols="">

                                  </textarea>
                                  <br/>
                                  <br/>
                              </div>
                              <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                      닫기
                                  </button>
                                  <button type="submit" id="check-btn" className="btn btn-primary">
                                      수정하기
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/*// <!-- 토픽 정보변경end -->*/}


                  {/*// <!-- 토픽 나가기(소유자) -->*/}
                  <div className="modal fade" id="topicMasterChange" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalCenterTitle">
                                      토픽 관리자 변경
                                  </h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">
                                          &times;
                                      </span>
                                  </button>
                              </div>
                              <div className="modal-body">
                                  <span>
                                      다음 토픽 관리자를 선택해주세요
                                  </span>
                                  <br/>
                                  <hr/>
                                  <input type="hidden" name="topic_no" value="${param.topic_no }"/>
                                  <input type="hidden" name="team_no" value="${param.team_no }"/>
                                  <c:forEach var="tmList" items="${topicMemberList}">
                                      <c:choose>
                                          <c:when test="${tmList.member_no eq sessionScope.member_no}">
                                              <input type="checkbox" disabled/>
                                          </c:when>
                                          <c:otherwise>
                                              <input type="checkbox" name="member_no" value="${tmList.member_no }"/>
                                          </c:otherwise>
                                      </c:choose>
                                      <span>
                                          tmList.member_no/tmList.member_name-tmList.member_email(tmList.topic_member_position)
                                      </span>
                                      <br/>
                                  </c:forEach>
                              </div>
                              <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-dismiss="modal">닫기</button>
                                  <button type="submit"  className="btn btn-primary" >토픽 나가기</button>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/*// <!-- 토픽 나가기(소유자) end -->*/}


                  {/*// <!-- 토픽 초대 -->*/}
                  <div className="modal fade" id="inviteTopic" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalCenterTitle"> 토픽 멤버 초대하기</h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">
                                          &times;
                                      </span>
                                  </button>
                              </div>
                              <div className="modal-body">
                                  <input type="hidden" name="team_no" value=""/>
                                  <input type="hidden" name="topic_no" value=""/>
                                  {/*// <!--  자기자신은 체크할 일이 없으므로 모양만 보여준다 -->*/}
                                  <input type="checkbox"  disabled/>
                                  <input type="checkbox" name="member_no" value=""/>
                                  <span>
                                      tmlist.member_name[tmlist.member_email]
                                  </span>
                                  <br/>
                              </div>
                              <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                      닫기
                                  </button>
                                  <button type="submit" className="btn btn-primary">
                                      초대하기
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );

}

export default Topic;