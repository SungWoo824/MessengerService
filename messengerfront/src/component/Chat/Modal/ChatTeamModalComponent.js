import React from "react";

function ChatTeamModalComponent(){

    return (
        <div className="modal fade" id="inTeam" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">
                            팀 멤버 보기
                        </h5>
                        <span className="badge badge-primary">
                                      countTeamMember명
                                  </span>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">
                                          &times;
                                      </span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input type="search" placeholder="멤버 검색" name="member_name" value=""/>
                        <button type="button">
                            찾기
                        </button>
                        {/*<c:forEach items="${memberList}" var="memberListVO">*/}
                            <div className="dropdown-item">
                                {/*<c:out value="${memberListVO.member_name}">*/}
                                    memberListVO.member_name
                                {/*</c:out>*/}
                                <span className="badge badge-pill badge-primary">
                                              memberListVO.member_position
                                          </span>
                                {/*<c:out value="${memberListVO.member_email}">*/}
                                    memberListVO.member_email
                                {/*</c:out>*/}
                                <br/>
                            </div>
                        {/*</c:forEach>*/}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatTeamModalComponent;