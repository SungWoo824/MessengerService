import React from "react";
import {Link} from "react-router-dom";

function MypageInfoComponent() {
    return (
        <div className="mypage-div">
            <div className="member-mypage-img">
                <img id="member-profile-img" src='' alt=''/>
            </div>
            <div className="mypage-name-div">
                <span>memberDto.member_name</span>
                <p>memberDto.member_email</p>
            </div>
            <div className="mypage-profile-div">
                <Link to="/member/modify">프로필 설정</Link>
            </div>
        </div>
    );
}
export default MypageInfoComponent;