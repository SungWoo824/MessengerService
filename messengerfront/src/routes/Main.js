import React from "react";
import MainIndex from "../component/MainIndex";
import MainNavigation from "../component/MainNavigation";
import {AuthenticationService} from "../lib/Authentication";
import "./Main.css";

class Home extends React.Component{
    authenticationService = new AuthenticationService();
    isSet = this.authenticationService.isUserLoggedIn();
    render() {
        return (
            <div>
                <MainNavigation state = {this.isSet}/>
                <MainIndex/>
            </div>
        );
    }
}

export default Home;