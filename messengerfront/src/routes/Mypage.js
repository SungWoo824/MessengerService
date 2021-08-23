import React from "react";
import MainNavigation from "../component/MainNavigation";
import MypageTeamListComponent from "../component/MypageTeamListComponent";
import MypageInfoComponent from "../component/MypageInfoComponent";

function Mypage () {
    return (
        <div>
            <MainNavigation/>
            <div className="mypage-main">
                <div className="main-bg">
                    <div id="fullpage">
                        <div className="section">
                            <div className="mypage-main-content">
                                <MypageInfoComponent/>
                                <hr/>
                                <MypageTeamListComponent/>
                                <div className="mypage-team-create">
                                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                                        팀생성
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Mypage;