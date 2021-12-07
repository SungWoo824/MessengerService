import React from "react";
import {Link} from "react-router-dom";

function MypageTeamListComponent({teamNo, teamName, teamDomain, teamMemberJobPosition}) {
    return (
        <div>
            <div>
                <div className="mypage-div">
                    <div className="mypage-name-div">
                        <h4>
                            {teamName}
                        </h4>
                        <br/>
                        <h6>
                            <span>
                                {teamDomain}
                            </span>
                            <span className="badge badge-primary">
                                {teamMemberJobPosition}
                            </span>
                        </h6>
                    </div>

                    <div className="mypage-team-div">
                        <Link to={"/team/manage/"+teamNo} className="btn btn-outline-secondary">
                            설정
                        </Link>
                    </div>

                    <div className="mypage-team-div">
                        <button type="button" className="btn btn-outline-secondary">
                            소유자 설정
                        </button>
                    </div>


                    <div className="mypage-team-div">
                        <Link to={"/team/"+teamDomain+"/"} className="btn btn-outline-primary btn-lg">
                            이동하기
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MypageTeamListComponent;