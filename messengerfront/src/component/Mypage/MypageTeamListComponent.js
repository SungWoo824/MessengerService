import React from "react";
import {Link} from "react-router-dom";

function MypageTeamListComponent({teamNo, teamName, teamDomain, teamMemberJobPosition}) {
    return (
        <div>
            <div>
                <div className="mypage-div">
                    <div className="mypage-name-div">
                        <span>
                            {teamName}
                        </span>

                        <p>
                            {teamDomain}
                        </p>
                        <p className="badge badge-primary">
                            {teamMemberJobPosition}
                        </p>
                    </div>
                    <div className="mypage-team-div mypage-team-button-first">
                        <Link to={"/team/manage/"+teamNo} className="btn btn-outline-secondary mypage-team-button">
                            설정
                        </Link>
                    </div>

                    <div className="mypage-team-div">
                        <button type="button" className="btn btn-outline-secondary mypage-team-button">
                            소유자 설정
                        </button>
                    </div>


                    <div className="mypage-team-div">
                        <Link to={"/team/"+teamDomain} className="btn btn-outline-secondary mypage-team-button">
                            이동하기
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MypageTeamListComponent;