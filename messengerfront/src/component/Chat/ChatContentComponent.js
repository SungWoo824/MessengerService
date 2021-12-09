import React from "react";

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
                    <div className="card border-primary mb-3 admin-card" style="width: 20rem; height: 15rem;">
                        <div className="card-body admin-card-body">
                            {chatFileType === "text" ?
                            (<div>
                                <a href={"filedownload?chat_file_no="+{chatNo}}>
                                    <img id="chat_dummy" src="" alt="textFileImage"/>
                                </a>
                            </div>):
                            (chatFileType === "image" ?(
                            <div>
                                <a href={"filedownload?chat_file_no="+{chatNo}}>
                                    <img id="chat_dummy" src='' alt="imageFileImage"/>
                                </a>
                            </div>
                            ):(
                            <div>
                                <a href={"filedownload?chat_file_no="+{chatNo}}>
                                    <img id="chat_dummy" src="" alt="otherFileImage"/>
                                </a>
                            </div>
                            ))
                            }
                            <p className="card-text">
                                <a href="#">

                                </a>
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