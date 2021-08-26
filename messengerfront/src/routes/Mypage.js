import React from "react";
import axios from "axios";
import MainNavigation from "../component/MainNavigation";
import MypageTeamListComponent from "../component/MypageTeamListComponent";
import MypageInfoComponent from "../component/MypageInfoComponent";
import {AuthenticationService} from "../lib/Authentication";

function Mypage () {
    const authenticationService = new AuthenticationService();
    authenticationService.setupAxiosInterceptors();
    const userInfo = axios.get(
        "http://localhost:8080/member/info"
        )
    console.log(userInfo);
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