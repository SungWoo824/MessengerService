import React from "react";

function TopicCreateModalComponent(){
    return(
        <div className="modal fade" id="newTopicCreate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">새 토픽 생성</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input type="hidden" name="team_no" value=""/>
                        이름 : <input type="text" name="topic_name"/>
                        <span>

                                  </span>
                        <br/>
                        <br/>
                        공개여부 :
                        <input type="radio" name="topic_confidential" value="1" checked="checked"/> 비공개
                        <input type="radio" name="topic_confidential" value="0"/> 공개
                        <br/><br/>
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
                            생성하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopicCreateModalComponent;