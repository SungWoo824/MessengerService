import React from "react";
import {Link} from "react-router-dom";

function UserInfoDropDownComponent(){
    return (
        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
            <Link to="#" className="dropdown-item">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400">

                </i>
                내 정보보기
            </Link>
            <div className="dropdown-divider">

            </div>
            <Link to="#" className="dropdown-item">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400">

                </i>
                로그아웃
            </Link>
        </div>
    );
}

export default UserInfoDropDownComponent;