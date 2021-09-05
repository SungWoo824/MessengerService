import React from "react";

function TopicModifyModalComponent(){
    return(
        <div className="modal fade" id="editTopic" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">
                            토픽 정보 변경
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">
                                          &times;
                                      </span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input type="hidden" name="team_no" value=""/>
                        <input type="hidden" name="topic_no" value=""/>
                        이름 :<input type="text" name="topic_name"/>
                        <span>

                                  </span>
                        <br/>
                        <br/>
                        토픽 설명 :
                        <textarea name="topic_explain" rows="" cols="">

                                  </textarea>
                        <br/>
                        <br/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                            닫기
                        </button>
                        <button type="submit" id="check-btn" className="btn btn-primary">
                            수정하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopicModifyModalComponent;