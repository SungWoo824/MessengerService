import React, {useEffect, useState} from "react";
import TeamManageNavigation from "../component/Mypage/TeamManageNavigation";
import TeamManageComponent from "../component/Mypage/TeamManageComponent";
import {useParams} from 'react-router-dom';
import axios from "axios";

function TeamManage() {
    let [isLoading, setIsLoading] = useState(true);
    let [teamInfo, setTeamInfo] = useState([]);
    const {teamNo} = useParams();
    useEffect(() => {
        axios.get("http://localhost:8080/team/modify/teamInfo?teamNo="+teamNo)
            .then(function (response){
                if (response.data.data === 401){
                    console.log("Not allow!!!");
                    return false;
                } else {
                    setTeamInfo(response.data.data);
                    setIsLoading(false);
                }
            });
    },[]);

    return (
        <div>
            <TeamManageNavigation/>
            {
                isLoading
                ?
                <div>Now Loading</div>
                :
                <TeamManageComponent
                    teamNo={teamInfo.team.teamNo}
                    teamName={teamInfo.team.teamName}
                    teamDomain={teamInfo.team.teamDomain}
                    teamMemberPosition={teamInfo.teamMemberPosition}
                    teamMemberAuth={teamInfo.teamMemberAuth}
                    teamMemberGrade={teamInfo.teamMemberGrade}
                />
            }
        </div>
    );
}

export default TeamManage;