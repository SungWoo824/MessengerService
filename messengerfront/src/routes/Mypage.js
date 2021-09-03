import React, {useEffect, useState} from "react";
import axios from "axios";
import MainNavigation from "../component/MainNavigation";
import MypageTeamListComponent from "../component/Mypage/MypageTeamListComponent";
import MypageInfoComponent from "../component/Mypage/MypageInfoComponent";
import {AuthenticationService} from "../lib/Authentication";
import {Link} from "react-router-dom";

function Mypage () {
    const authenticationService = new AuthenticationService();
    authenticationService.setupAxiosInterceptors();
    let [nowLoading, setNowLoading] = useState(true);
    let [teamLoading, setTeamLoading] = useState(true);
    let [teamList, setTeamList] = useState([]);
    let [userInfo, setUserInfo] =useState({});
    useEffect(() => {
        axios.get(
            "http://localhost:8080/member/info"
        ).then(function (response) {
            if (response.data.data === 401) {
                console.log("Not allow!!!");
                return false;
            } else {
                setUserInfo(response.data.data);
                setNowLoading(false);

                const teamListUrl =response.data.data.memberNo;
                axios.get("http://localhost:8080/team/teamList?memberNo="+teamListUrl)
                    .then(function (teamResponse){
                        console.log(teamResponse.data.data);
                        setTeamList(teamResponse.data.data);
                        setTeamLoading(false);
                    });
            }
        });
    },[]);
    return (
        <div>
            <MainNavigation/>
            <div className="mypage-main">
                <div className="main-bg">
                    <div className="fullpage">
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
                                <p> 팀 리스트</p>
                                {teamLoading ?
                                    <div>now Loading</div>
                                    :
                                    (teamList.map(teamMember => (
                                        <MypageTeamListComponent
                                            key={teamMember.team.teamNo}
                                            teamNo = {teamMember.team.teamNo}
                                            teamName={teamMember.team.teamName}
                                            teamDomain={teamMember.team.teamDomain}
                                            teamMemberJobPosition={teamMember.teamMemberJobPosition}
                                        />
                                    )))
                                }
                                <div className="mypage-team-create">
                                    <Link to="/team/regist" className="btn btn-primary btn-lg btn-block">
                                        팀생성
                                    </Link>
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