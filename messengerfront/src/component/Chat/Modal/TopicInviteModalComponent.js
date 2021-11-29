import React from "react";

function TopicInviteModalComponent(){
    return(
        <div className="modal fade" id="inviteTopic" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle"> 토픽 멤버 초대하기</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">
                                          &times;
                                      </span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input type="hidden" name="team_no" value=""/>
                        <input type="hidden" name="topic_no" value=""/>
                        {/*// <!--  자기자신은 체크할 일이 없으므로 모양만 보여준다 -->*/}
                        <input type="checkbox" disabled/>
                        <input type="checkbox" name="member_no" value=""/>
                        <span>
                                      tmlist.member_name[tmlist.member_email]
                                  </span>
                        <br/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                            닫기
                        </button>
                        <button type="submit" className="btn btn-primary">
                            초대하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TopicInviteModalComponent;