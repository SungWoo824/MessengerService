import React, {useState} from "react";
import {AuthenticationService} from "../lib/Authentication";
import {useHistory} from "react-router-dom";

function SignInComponent(){
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const history = useHistory();

    const service = new AuthenticationService();
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        service.executeJwtAuthenticationService(inputId, inputPw)
            .then(function (response){
                service.registerSuccessfulLoginForJwt(inputId,response.data.data);
                history.replace("/member/mypage");
            }).catch((error) => {
                alert(error);
        });
    }

    const onPressEnter = (e) => {
      if (e.key==='Enter'){
          onClickLogin();
      }
    }

    return (
        <div className="circle-main-content">
            <div className="main-bg">
                <div id="fullpage">
                    <div className="section">
                        <div className="login-div">
                            <form action="signin" method="post"  onKeyPress={onPressEnter}>
                                <div>
                                    <span>로그인</span>

                                    <div className="form-group signin-form-group">
                                        <label htmlFor="exampleInputEmail1"></label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               name="member_email" aria-describedby="emailHelp"
                                               placeholder="Enter email" onChange={handleInputId}/>
                                    </div>
                                    <div className="form-group signin-form-group">
                                        <label htmlFor="exampleInputPassword1"></label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                               name="member_pw" placeholder="Password" onChange={handleInputPw}/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <button id="loginButton" type="button" className="btn btn-primary signin-submit"
                                         onClick={onClickLogin}>로그인</button>
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