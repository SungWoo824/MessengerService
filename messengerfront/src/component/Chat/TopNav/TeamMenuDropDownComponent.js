import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

function TeamMenuDropDownComponent(props) {

    return (
        <TeamDropDown id={props.id} visible={props.visible}  className="shadow" aria-labelledby="alertsDropdown">
            <div>
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
        </TeamDropDown>
    );
}
const TeamDropDown = styled.div`
          display: ${(props) => (props.visible ? 'block' : 'none')};
          position: absolute;
          background-color: rgba(0, 0, 0, 0);
        `
export default TeamMenuDropDownComponent;