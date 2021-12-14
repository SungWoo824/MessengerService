import React from "react";
import {Link} from "react-router-dom";

function ChatContentComponent({id, chatNo, memberName, chatContent, chatFileType, chatStatus}) {
    return (
        <div>
            {chatStatus===2
            ?
            (<div className="msg-wrap">
                <div className="msg-profile">
                    <img id="member-profile-img" src='' alt="profileImg"/>
                </div>

                <div className="msg-con">
                    <span>{memberName}</span>
                    <p className="msg">{chatContent}</p>
                </div>
            </div>):
            (<div className="msg-wrap">
                <div className="msg-profile">
                    <img id="member-profile-img" src='' alt="profileImg"/>
                </div>

                <div className="msg-con">
                    <span>{memberName}</span>
                    <div className="card border-primary mb-3 admin-card chat-card">
                        <div className="card-body admin-card-body">
                            {chatFileType === "text" ?
                            (<div>
                                <Link to={"filedownload?chat_file_no="+{chatNo}}>
                                    <img id="chat_dummy" src="" alt="textFileImage"/>
                                </Link>
                            </div>):
                            (chatFileType === "image" ?(
                            <div>
                                <Link to={"filedownload?chat_file_no="+{chatNo}}>
                                    <img id="chat_dummy" src='' alt="imageFileImage"/>
                                </Link>
                            </div>
                            ):(
                            <div>
                                <Link to={"filedownload?chat_file_no="+{chatNo}}>
                                    <img id="chat_dummy" src="" alt="otherFileImage"/>
                                </Link>
                            </div>
                            ))
                            }
                            <p className="card-text">
                                <Link to="#">

                                </Link>
                            </p>
                        </div>
                        <div className="card-header">{chatContent}</div>
                    </div>
                </div>
            </div>)

            }
        </div>
    )
}
export default ChatContentComponent;