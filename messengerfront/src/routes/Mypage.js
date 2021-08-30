import React, {useEffect, useState} from "react";
import axios from "axios";
import MainNavigation from "../component/MainNavigation";
import MypageTeamListComponent from "../component/MypageTeamListComponent";
import MypageInfoComponent from "../component/MypageInfoComponent";
import {AuthenticationService} from "../lib/Authentication";

function Mypage () {
    const authenticationService = new AuthenticationService();
    authenticationService.setupAxiosInterceptors();
    let [nowLoading, setNowLoading] = useState(true);
    // let [teamList, setTeamList] = useState([]);
    let [userInfo, setUserInfo] =useState();
    useEffect(() => {
        axios.get(
            "http://localhost:8080/member/info"
        ).then(function (responese) {
            if (responese.data.data === 401) {
                console.log("Not allow!!!");
            } else {
                setUserInfo(responese.data.data);
                setNowLoading(false);
            }
        });
    },[]);
    console.log(userInfo);
    return (
        <div>
            <MainNavigation/>
            <div className="mypage-main">
                <div className="main-bg">
                    <div id="fullpage">
                        <div className="section">
                            <div className="mypage-main-content">
                                {nowLoading ?
                                    <div>now Loading</div>
                                :
                                    <MypageInfoComponent
                                        memberNo={userInfo.memberNo}
                                        memberEmail={userInfo.memberEmail}
                                        memberName={userInfo.memberName}
                                        memberGrade={userInfo.memberGrade}
                                    />
                                }

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