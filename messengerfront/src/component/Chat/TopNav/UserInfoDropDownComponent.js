import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

function UserInfoDropDownComponent(props){
    return (
        <UserInfoDropDown id={props.id} visible={props.visible}  className="shadow" aria-labelledby="userDropdown">
            <div>
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
        </UserInfoDropDown>
    );
}
const UserInfoDropDown = styled.div`
          display: ${(props) => (props.visible ? 'block' : 'none')};
          position: absolute;
          background-color: rgba(0, 0, 0, 0);
        `
export default UserInfoDropDownComponent;