import React from "react";

function TopicExitModalComponent(){
    return(
        <div className="modal fade" id="topicMasterChange" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                        <input type="hidden" name="topic_no" value=""/>
                        <input type="hidden" name="team_no" value=""/>
                        {/*<c:forEach var="tmList" items="${topicMemberList}">*/}
                        {/*    <c:choose>*/}
                        {/*        <c:when test="${tmList.member_no eq sessionScope.member_no}">*/}
                                    <input type="checkbox" disabled/>
                                {/*</c:when>*/}
                                {/*<c:otherwise>*/}
                                    <input type="checkbox" name="member_no" value=""/>
                                {/*</c:otherwise>*/}
                            {/*</c:choose>*/}
                            <span>
                                          tmList.member_no/tmList.member_name-tmList.member_email(tmList.topic_member_position)
                                      </span>
                            <br/>
                        {/*</c:forEach>*/}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">닫기</button>
                        <button type="submit" className="btn btn-primary">토픽 나가기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopicExitModalComponent;