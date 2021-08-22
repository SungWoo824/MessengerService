import React from "react";
import MainNavigation from "../component/MainNavigation";
import SignInComponent from "../component/SignInComponent";
import "./Main.css";

function SignIn() {
    return (
        <div>
            <MainNavigation/>
            <SignInComponent/>
        </div>
    );

}

export default SignIn;