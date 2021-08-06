import React from "react";

function MainNavigation({token}) {
    return (
        <div className="circle-header">

            <div className="header-wrap">
                <div className="header-logo">
                    <div className="mainlogo">
                        <a href="">
                            <image src=""/>
                        </a>
                    </div>
                </div>
                <div className="header-gnb">
                    <ul className="gnb-menu">
                        <li><a href="#hash1" data-menuanchor="test1">무료체험하기</a></li>
                        <li><a href="#hash2" data-menuanchor="test2">CIRCLE소개</a></li>
                        <li><a href="#hash3" data-menuanchor="test3">요금안내</a></li>
                        {
                            {token} !== ''
                            ? <li><a href="">내정보</a></li>
                            : null
                        }
                    </ul>
                    <ul className="gnb-menu">
                        {
                            {token} !== ''
                                ?
                                    <li className="logout-btn">
                                        <a href="/member/signout">로그아웃</a>
                                    </li>
                                :
                                    <li className="login-btn">
                                        <a href="/member/signin">로그인</a>
                                    </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainNavigation;