import React from "react";

function TeamInviteComponent(){
    return(
        <div className="modal fade" id="inviteTeam" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle"> 팀 초대하기</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               name="cert_email" type="email" placeholder="Enter email"/>
                        <br/>
                        <input type="hidden" value="${param.team_no}" name="team_no"/>
                        <input type="hidden" value="${param.topic_no}" name="topic_no"/>
                        <br/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="invite_close" className="btn btn-secondary" data-dismiss="modal">닫기
                        </button>
                        <input type="submit" id="invite-send" className="btn btn-primary invite-send" value="초대하기"/>
                        <span>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamInviteComponent;