import React from "react";
import MainNavigation from "../component/MainNavigation";
import {AuthenticationService} from "../lib/Authentication";
import SignUpComponent from "../component/SignUpComponent";

class SignUp extends React.Component{
    authenticationService = new AuthenticationService();
    isSet = this.authenticationService.isUserLoggedIn();

    render(){
        return (
            <div>
                <MainNavigation state={this.isSet}/>
                <SignUpComponent/>
            </div>
        )
    }
}
export default SignUp;