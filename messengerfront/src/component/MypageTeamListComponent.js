import React from "react";

function MypageTeamListComponent() {
    return (
        <div>
            <p> 팀 리스트</p>
            <div>
                <div className="mypage-div">
                    <div className="mypage-name-div">

                        <h4>
                            teamMainVO.team_name
                        </h4>
                        <br/>
                        <h6>
                            <span>
                                memberDto.member_email
                            </span>
                            <span className="badge badge-primary">
                                teamMainVO.member_position
                            </span>
                        </h6>
                    </div>

                    <input type="hidden" name="team_no" className="team_no_value" value=""/>
                    <input type="hidden" name="team_name" className="team_name_value" value=""/>
                    <input type="hidden" name="team_domain" className="team_domain_value" value=""/>
                    <div className="mypage-team-div">
                        <button type="submit" className="btn btn-outline-secondary">
                            설정
                        </button>
                    </div>

                    <input type="hidden" name="team_no" className="team_no_value" value=""/>
                    <input type="hidden" name="team_name" className="team_name_value" value=""/>
                    <input type="hidden" name="team_domain" className="team_domain_value" value=""/>
                    <div className="mypage-team-div">
                        <button type="button" className="btn btn-outline-secondary">
                            소유자 설정
                        </button>
                    </div>

                    <input type="hidden" name="team_no" className="team_no_value" value=""/>
                    <input type="hidden" name="topic_no" className="topic_no_value" value=""/>
                    <div className="mypage-team-div">
                        <button id="param_submit_btn" type="button" className="btn btn-outline-primary btn-lg">
                            이동하기
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MypageTeamListComponent;