import React from "react";
import {Link} from "react-router-dom";

function TeamManageNavigation() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <Link className="navbar-brand" to="/member/mypage">마이페이지로 이동</Link>
            {/* style="color:white"*/}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">

                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="">
                            {/*style="color:white"*/}
                            팀관리
                            <span className="sr-only">
                                (current)
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mypage-team-div">
                {/*style="text-align: right"*/}
                <button id="param_submit_btn" className="btn btn-outline-primary">
                    이동하기
                </button>
            </div>

        </nav>
    );
}

export default TeamManageNavigation;