import React from "react";

function TeamManageComponent ({teamNo, teamName, teamDomain,
      teamMemberPosition, teamMemberAuth, teamMemberGrade}){

    return (
        <article className="modify-article">
            <div>
                <div className="modify-items">
                    <div className="modify-item-name">
                        팀 정보보기
                    </div>
                    <div className="modify-item-content modify-item2">
                        <div className="modify-origin-div">
                            보기
                        </div>
                        <div className="modify-fix-div">
                            팀 이름 : {teamName}
                            <hr/><br/>
                            등급 : {teamMemberPosition}
                            {teamMemberAuth}
                            {teamMemberGrade}
                            <hr/><br/>
                            도메인 : {teamDomain}
                            <hr/><br/>
                            <button name="modify-cancel" className="btn btn-secondary" >
                                닫기
                            </button>
                        </div>
                    </div>
                </div>

                <div className="modify-items">
                    <div className="modify-item-name">
                        팀 탈퇴
                    </div>
                    <div className="modify-item-content modify-item4">
                        <div className="modify-origin-div">
                            탈퇴하기
                        </div>
                        <div className="modify-fix-div">
                            <h5>비밀번호</h5>
                            <input type="hidden" name="member_no" value=""/>
                            <input type="hidden" name="team_no" value=""/>
                            <input type="password" id="modify-delete-pw" className="form-control" name="member_pw" placeholder="비밀번호"/>
                            <div className="modify-alert">
                                teamDto.team_name 팀에서 탈퇴합니다<br/>
                                정말로 팀 탈퇴를 원하신다면 계정 비밀번호를 입력해주세요.
                            </div>
                            <button id="modify-delete-submit" className="btn btn-primary">
                                팀탈퇴
                            </button>
                            <button name="modify-cancel" className="btn btn-secondary">
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default TeamManageComponent;