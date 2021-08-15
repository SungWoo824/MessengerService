import React from "react";
import MainNavigation from "../component/MainNavigation";
import SignInComponent from "../component/SignInComponent";
import "./Main.css";
import {AuthenticationService} from "../lib/Authentication";

class SignIn extends React.Component{
    authenticationService = new AuthenticationService();
    isSet = this.authenticationService.isUserLoggedIn();
    render() {
        return (
            <div>
                <MainNavigation state={this.isSet}/>
                <SignInComponent/>
            </div>
        );
    }

}

export default SignIn;