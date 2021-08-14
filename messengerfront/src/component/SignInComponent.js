import React, {useState} from "react";
import "../lib/Authentication";

function SignInComponent(){
    const onClick = () => {
        AuthenticationService.executeJwtAuthenticationService().then(r => r.data);
    }
    return (
        <div className="circle-main-content">
            <div className="main-bg">
                <div id="fullpage">
                    <div className="section">
                        <div className="login-div">
                            <form action="signin" method="post">
                                <div>
                                    <span>로그인</span>

                                    <div className="form-group signin-form-group">
                                        <label htmlFor="exampleInputEmail1"></label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               name="member_email" aria-describedby="emailHelp"
                                               placeholder="Enter email"/>
                                    </div>
                                    <div className="form-group signin-form-group">
                                        <label htmlFor="exampleInputPassword1"></label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                               name="member_pw" placeholder="Password"/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <button type="button" className="btn btn-primary signin-submit"
                                         onClick={onClick}>로그인</button>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <div>
                                    <a href="/member/findpw">
                                        <button className="btn signin-submit">비밀번호 찾기</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">

                    </div>
                    <div className="section">

                    </div>
                </div>

            </div>
        </div>
    );
}

export default SignInComponent;