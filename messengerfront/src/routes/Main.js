import React from "react";
import MainIndex from "../component/MainIndex";
import MainNavigation from "../component/MainNavigation";
import "./Main.css";

class Home extends React.Component{
    state = {
        token : localStorage.getItem("token")??''
    }
    render() {
        return (
            <div>
                <MainNavigation state = {this.state}/>
                <MainIndex/>
            </div>
        );
    }
}

export default Home;