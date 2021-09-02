import React from "react";

function TeamManageNavigation() {

    return (
        <!-- 상단 네비바 -->
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand" href="#" style="color:white">팀관리</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">

                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" style="color:white"
                           href="/member_manager_team">
                            팀관리
                            <span className="sr-only">
                                (current)
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mypage-team-div" style="text-align: right">
                <button id="param_submit_btn" className="btn btn-outline-primary">
                    이동하기
                </button>
            </div>

        </nav>
    );
}

export default TeamManageNavigation;