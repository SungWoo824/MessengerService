import React from "react";
import {Link} from "react-router-dom";

function ChatTopicListComponent() {

    return (
        <Link to="#" className="collapse-item">
            <strong className="topic-name">
                topicListDto.topic_name
            </strong>
            <span className="badge badge-primary badge-pill">
                memberChatCount[status.index].count
            </span>
        </Link>
    );
}

export default ChatTopicListComponent;