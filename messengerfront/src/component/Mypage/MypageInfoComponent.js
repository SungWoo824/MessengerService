import React from "react";
import {Link} from "react-router-dom";

function MypageInfoComponent({memberNo,memberEmail,memberName,memberGrade}) {

    return (
        <div className="mypage-div">
            <div className="mypage-div-area">
                <img id="member-profile-img" src='' alt=''/>
            </div>
            <div className="mypage-div-area">
                <span>{memberName}</span>
                <p>{memberEmail}</p>
            </div>
            <div className="mypage-div-area">
                <Link to="/member/modify">프로필 설정</Link>
            </div>
        </div>
    );
}
export default MypageInfoComponent;