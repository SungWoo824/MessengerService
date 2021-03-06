import React from "react";
import {Link} from "react-router-dom";
import ChatTeamModalComponent from "../component/Chat/Modal/ChatTeamModalComponent";
import ChatLeftSideComponent from "../component/Chat/LeftSideBar/ChatLeftSideComponent";
import ChatTopNavComponent from "../component/Chat/TopNav/ChatTopNavComponent";
import ChatAreaComponent from "../component/Chat/ChatAreaComponent";
import TeamInviteComponent from "../component/Chat/Modal/TeamInviteComponent";
import TopicCreateModalComponent from "../component/Chat/Modal/TopicCreateModalComponent";
import TopicMemberListComponent from "../component/Chat/TopicMemberListComponent";
import TopicModifyModalComponent from "../component/Chat/Modal/TopicModifyModalComponent";
import TopicExitModalComponent from "../component/Chat/Modal/TopicExitModalComponent";
import TopicInviteModalComponent from "../component/Chat/Modal/TopicInviteModalComponent";
import "./Chat.css";

function Topic({match}) {
    return (
      <div className="collapse-item">
          <ChatLeftSideComponent teamDomain={match.params.teamDomain}/>
          <div className="content-container">
          <ChatTopNavComponent teamDomain={match.params.teamDomain} topicNo={match.params.topicNo}/>
          <ChatAreaComponent/>
          </div>
          <div id="content">
              {/*채팅 부분*/}
              {/*팀  모달 시작*/}
              {/*<ChatTeamModalComponent/>*/}
              {/*// <!-- 팀 리스트end -->*/}

              {/*// <!-- 팀 초대 -->*/}
              {/*<TeamInviteComponent/>*/}
              {/*// <!-- 팀 초대 end -->*/}
              {/*팀  모달 종료 */}

              {/*토픽 모달 시작*/}
              {/*    // <!-- 토픽 기능 모달-->*/}
              {/*    // <!-- 토픽생성 모달 -->*/}
              {/*<TopicCreateModalComponent/>*/}
              {/*// <!-- 새토픽 생성 end -->*/}

              {/*// <!-- 토픽 참여자리스트 -->*/}
              {/*<TopicMemberListComponent/>*/}
              {/*// <!-- 토픽 참여자end -->*/}

              {/*// <!-- 토픽 정보변경 -->*/}
              {/*<TopicModifyModalComponent/>*/}
              {/*// <!-- 토픽 정보변경end -->*/}


              {/*// <!-- 토픽 나가기(소유자) -->*/}
              {/*<TopicExitModalComponent/>*/}
              {/*// <!-- 토픽 나가기(소유자) end -->*/}


              {/*// <!-- 토픽 초대 -->*/}
              {/*<TopicInviteModalComponent/>*/}
          </div>
      </div>
    );

}

export default Topic;