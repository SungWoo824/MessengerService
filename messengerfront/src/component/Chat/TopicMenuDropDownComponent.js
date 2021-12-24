import React from "react";
import {Link} from "react-router-dom";

function TopicMenuDropDownComponent(topicOwner){
    return (
        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
            {/*토픽소유자*/}
            {topicOwner?
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
                </div>
                :
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

            }

        </div>
    );
}

export default TopicMenuDropDownComponent;