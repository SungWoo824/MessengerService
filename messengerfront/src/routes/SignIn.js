import React from "react";
import MainNavigation from "../component/MainNavigation";
import SignInComponent from "../component/SignInComponent";
import "./Main.css";
import {AuthenticationService} from "../lib/Authentication";

function SignIn() {
    const authenticationService = new AuthenticationService();
    const isSet = authenticationService.isUserLoggedIn();

    return (
        <div>
            <MainNavigation state={isSet}/>
            <SignInComponent/>
        </div>
    );

}

export default SignIn;