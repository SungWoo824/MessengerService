import React from "react";
import MainNavigation from "../component/MainNavigation";
import SignInComponent from "../component/SignInComponent";
import "./Main.css";

class SignIn extends React.Component{
    state = {
        token : localStorage.getItem("token")??''
    }
    render() {
        return (
            <div>
                <MainNavigation state={this.state}/>
                <SignInComponent/>
            </div>
        );
    }
}

export default SignIn;