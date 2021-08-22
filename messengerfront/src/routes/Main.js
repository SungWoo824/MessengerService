import React from "react";
import MainIndex from "../component/MainIndex";
import MainNavigation from "../component/MainNavigation";
import "./Main.css";

class Home extends React.Component{
    render() {
        return (
            <div>
                <MainNavigation/>
                <MainIndex/>
            </div>
        );
    }
}

export default Home;