import React from "react";
import MainNavigation from "../component/MainNavigation";
import TeamRegistComponent from "../component/Mypage/TeamRegistComponent";

import "./Main.css";

function TeamRegist(){
    return(
        <div>
            <MainNavigation/>
            <TeamRegistComponent/>
        </div>
    )
}

export default TeamRegist;