import React from "react";

function TopicMemberListComponent(){
    return(
        <div className="modal fade" id="inTopic" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">
                            토픽 참여 멤버 보기
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">
                                          &times;
                                      </span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/*// <!-- 내가 토픽 소유자일 때 나를 제외하고 내보내기 할 수 있는 기능 -->*/}
                        {/*<c:forEach var="tmList" items="${topicMemberList}">*/}
                            tmList.member_name
                            {/*<c:if test="${tmList.topic_member_position eq '토픽소유자'}">*/}
                                <span style="color:#2196f3">(tmList.topic_member_position)</span>
                            {/*</c:if>*/}
                            [tmList.member_email]
                            {/*<c:if*/}
                            {/*    test="${tmaster.topic_member_position eq '토픽소유자' and sessionScope.member_no ne tmList.member_no}">*/}
                                <a style="color:red"
                                   href="outtopic?topic_no=${param.topic_no }&member_no=${tmList.member_no}&team_no=${tmList.team_no}">
                                    내보내기
                                </a>
                                <br/>
                            {/*</c:if>*/}
                            {/*<c:if*/}
                            {/*    test="${tmaster.topic_member_position ne '토픽소유자' or sessionScope.member_no eq tmList.member_no}">*/}
                                <br/>
                            {/*</c:if>*/}
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

export default TopicMemberListComponent;