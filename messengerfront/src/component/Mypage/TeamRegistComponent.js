import React, {useState} from "react";
import axios from "axios";
import {AuthenticationService} from "../../lib/Authentication";
import {useHistory} from "react-router-dom";

function TeamRegistComponent() {
    const [teamName, setTeamName] = useState("");
    const [teamDomain, setTeamDomain] = useState("");
    const authenticationService = new AuthenticationService();
    authenticationService.setupAxiosInterceptors();
    const history = useHistory();
    const handleName  = (e) => {
        setTeamName(e.target.value);
    }
    const handleDomain = (e) => {
        setTeamDomain(e.target.value);
    }
    const onClickRegistTeam = () => {
        const data = {
            teamName : teamName,
            teamDomain : teamDomain
        };
        const axiosConfig = {
            headers:{
                "Content-Type" : "application/json"
            }
        }

        axios.post(
            'http://localhost:8080/team/regist',
            JSON.stringify(data),
            axiosConfig
        ).then(function(){
            console.log("팀생성 완료. 팀목록 페이지로 이동합니다.");
            history.replace("/member/mypage");
        }).catch(function(error){
            console.log("에러가 발생했습니다.", error);
        });
    }
    return (
        <div className="mypage-main">
            <div className="main-bg">
                <div id="fullpage">
                    <div className="section">
                        <div className="mypage-main-content">
                            <div className="mypage-div">
                                <div className="mypage-name-div">
                                    <h1> 팀을 만들어 보세요</h1>
                                    <br/><br/>
                                    <h4>팀 이름 </h4>
                                    <input type="text" name="team_name" className="team_nameC"
                                         id="team_nameC" required onChange={handleName}/>
                                    <span id="team_nameS" className="team_nameS">
                                        <br/>
                                    </span>
                                    <h4>팀 도메인</h4>
                                    <input type="text" name="team_domain"
                                      className="team_domainC" id="team_domainC"
                                      required onChange={handleDomain}/>
                                    <button>중복확인</button>
                                    <span id="team_domainS" className="team_domainS">
                                        <br/><br/>
                                    </span>
                                    <button type="submit" className="submitC" id="submitC" onClick={onClickRegistTeam}>
                                        팀 생성하기
                                    </button>
                                    <br/><br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default TeamRegistComponent;