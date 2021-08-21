import React from "react";
import MainNavigation from "../component/MainNavigation";
import {AuthenticationService} from "../lib/Authentication";
import SignUpComponent from "../component/SignUpComponent";

function SignUp (){
    const authenticationService = new AuthenticationService();
    const isSet = authenticationService.isUserLoggedIn();
    return (
        <div>
            <MainNavigation state={isSet}/>
            <SignUpComponent/>
        </div>
    )

}
export default SignUp;