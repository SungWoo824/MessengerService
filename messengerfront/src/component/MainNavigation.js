import React from "react";
import {Link} from "react-router-dom";

function MainNavigation({state}) {
    const {token} = {state}.state;
    return (
        <div className="circle-header">

            <div className="header-wrap">
                <div className="header-logo">
                    <div className="mainlogo">
                        <a href="/">
                            {/*<image src=""/>*/}
                            로고이미지
                        </a>
                    </div>
                </div>
                <div className="header-gnb">
                    <ul className="gnb-menu">
                        <li className="gnb-text">
                            <a href="#hash1" data-menuanchor="test1">무료체험하기</a>
                        </li>
                        <li className="gnb-text">
                            <a href="#hash2" data-menuanchor="test2">CIRCLE소개</a>
                        </li>
                        <li className="gnb-text">
                            <a href="#hash3" data-menuanchor="test3">요금안내</a>
                        </li>
                        {
                            token !== ''
                            ? <li className="gnb-text"><Link to="">내정보</Link></li>
                            : null
                        }
                        {
                            token !== ''
                                ?
                                    <li className="logout-btn">
                                        <Link to="/member/signout">로그아웃</Link>
                                    </li>
                                :
                                    <li className="login-btn">
                                        <Link to="/member/signin">로그인</Link>
                                    </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainNavigation;