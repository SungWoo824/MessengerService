import React from "react";
import {Link} from "react-router-dom";

import PropTypes from 'prop-types'
import styled from "styled-components";

function TopicMenuDropDownComponent(props){
    return (
        <>
        <TopicMenuDropDown visible={props.visible} className="shadow" aria-labelledby="messagesDropdown">
            {/*토픽소유자*/}
            {props.topicOwner?
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
        </TopicMenuDropDown>
        </>
    );
}

TopicMenuDropDownComponent.propTypes = {
    topicOwner: PropTypes.bool,
}
const TopicMenuDropDown = styled.div`
          display: ${(props) => (props.visible ? 'block' : 'none')};
          z-index: 110;
          background-color: rgba(0, 0, 0, 0);
        `
const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`
export default TopicMenuDropDownComponent;