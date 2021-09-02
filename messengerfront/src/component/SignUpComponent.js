import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

function SignUpComponent(){
    const [memberEmail, setMemberEmail] = useState('');
    const [memberPw, setMemberPw] = useState('');
    const [memberName, setMemberName] = useState('');
    const history = useHistory();
    const handleEmail = (e) => {
        setMemberEmail(e.target.value);
    }
    const handlePw = (e) => {
        setMemberPw(e.target.value);
    }
    const handleName = (e) => {
        setMemberName(e.target.value);
    }

    const onClickSignUp= () => {
        console.log("sign up click");
        const data = {
            memberEmail : memberEmail,
            memberPw : memberPw,
            memberName : memberName
        };
        const axiosConfig = {
            headers:{
                "Content-Type" : "application/json"
            }
        }
        axios.post(
            'http://localhost:8080/member/signup',
            JSON.stringify(data),
            axiosConfig
        ).then(function(response){
            console.log("회원가입 완료. 로그인 페이지로 이동합니다.");
            history.replace("/member/signin");
        }).catch(function(error){
            console.log("에러가 발생했습니다.", error);
        });
    }
    return (
        <div className="signup-article">
            <div className="main-bg">

                <div id="fullpage">
                    <div className="section">
                        <div className="main-title">
                            <form action="signup" method="post" encType="Multipart/form-data">
                                <div>
                                    <span>회원가입</span>

                                    <div className="form-group signin-form-group">
                                        <input type="email" className="form-control signUpInputForm"
                                               name="member_email" aria-describedby="emailHelp"
                                               placeholder="Enter email" onChange={handleEmail} required/>
                                    </div>
                                    <div className="form-group signin-form-group">
                                        <input type="password" className="form-control signUpInputForm"
                                               name="member_pw" placeholder="Password" onChange={handlePw} required/>
                                    </div>
                                    <div className="form-group signin-form-group">
                                        <input type="text" className="form-control signUpInputForm"
                                               name="member_name" aria-describedby="emailHelp" placeholder="Enter name"
                                               onChange={handleName} required/>
                                    </div>
                                    <div className="form-group signin-form-group">
                                        <input type="file" className="form-control signUpInputForm" name="file"
                                               accept="image/*"/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <button type="button" className="btn btn-primary signin-submit" onClick={onClickSignUp}>회원가입</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="section">

                    </div>
                    <div className="section">

                    </div>
                </div>

            </div>
        </div>
    )
}
export default SignUpComponent;