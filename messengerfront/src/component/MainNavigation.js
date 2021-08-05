import React from "react";
import {Link} from "react-router-dom";

function MainNavigation() {
    return (
        <div className="circle-header">

            <div className="header-wrap">
                <div className="header-logo">
                    <div className="mainlogo">
                        <a href="">
                            <img src=""/>
                        </a>
                    </div>
                </div>
                <div className="header-gnb">
                    <ul className="gnb-menu">
                        <li><a href="#hash1" data-menuanchor="test1">무료체험하기</a></li>
                        <li><a href="#hash2" data-menuanchor="test2">CIRCLE소개</a></li>
                        <li><a href="#hash3" data-menuanchor="test3">요금안내</a></li>
                        <c:choose>
                            <c:when test="${not empty member_email}">
                                <li><a href="${pageContext.request.contextPath}/member/mypage">내정보</a></li>
                            </c:when>
                        </c:choose>
                    </ul>
                    <ul className="gnb-menu">

                        <c:choose>
                            <c:when test="${not empty member_email}">
                                <li className="logout-btn"><a
                                    href="/member/signout">로그아웃</a></li>
                            </c:when>
                            <c:otherwise>
                                <li className="login-btn"><a
                                    href="/member/signin">로그인</a></li>
                            </c:otherwise>
                        </c:choose>


                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainNavigation;