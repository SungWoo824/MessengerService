import React from "react";

function SignUpComponent(){

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
                                        <label htmlFor="exampleInputEmail1"></label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               name="member_email" aria-describedby="emailHelp"
                                               placeholder="Enter email" required/>
                                    </div>
                                    <div className="form-group signin-form-group">
                                        <label htmlFor="exampleInputPassword1"></label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                               name="member_pw" placeholder="Password" required/>
                                    </div>
                                    <div className="form-group signin-form-group">
                                        <label htmlFor="exampleInputEmail1"></label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                               name="member_name" aria-describedby="emailHelp" placeholder="Enter name"
                                               required/>
                                    </div>
                                    <div className="form-group signin-form-group">
                                        <label htmlFor="exampleInputEmail1"></label>
                                        <input type="file" className="form-control" id="exampleInputEmail1" name="file"
                                               accept="image/*"/>
                                    </div>
                                </div>
                                <div>
                                    <div>

                                        <button type="submit" className="btn btn-primary signin-submit">회원가입</button>


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