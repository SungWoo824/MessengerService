import React from "react";
import {Link} from "react-router-dom";

function TeamMenuDropDownComponent() {

    return (
        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
            <button className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inTeam">
                <div>
                    <span>
                      팀 멤버 전체 보기
                    </span>
                    <span className="badge badge-primary">
                        countTeamMember
                    </span>
                </div>
            </button>
            <button className="dropdown-item d-flex align-items-center" data-toggle="modal" data-target="#inviteTeam">
                <div>
                    <span>
                      팀 초대하기
                    </span>
                </div>
            </button>
        </div>
    );
}

export default TeamMenuDropDownComponent;