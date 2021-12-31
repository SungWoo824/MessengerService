import React from "react";
import {Link} from "react-router-dom";

function ChatTopicListComponent({topicNo, topicName, topicExplain, topicConfidential, teamDomain}) {
    return (
        <Link to={`/team/${teamDomain}/${topicName}`} className="collapse-item">
            <strong className="topic-name">
                {topicName}
            </strong>
            <span className="badge badge-primary badge-pill badge-area">
                count
            </span>
        </Link>
    );
}

export default ChatTopicListComponent;