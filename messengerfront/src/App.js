import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route} from "react-router-dom";
import Home from "./routes/Main";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Mypage from "./routes/Mypage";
import TeamRegist from "./routes/TeamRegist";
import './App.css';
import TeamManage from "./routes/TeamManage";
import Topic from "./routes/Topic";

function App() {
  return (
    <HashRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/member/signin" component={SignIn}/>
        <Route exact path="/member/signup" component={SignUp}/>
        <Route exact path="/member/mypage" component={Mypage}/>
        <Route exact path="/team/regist" component={TeamRegist}/>
        <Route exact path="/team/manage/:teamNo" component={TeamManage}/>
        <Route path="/team/:teamDomain?/:topicNo?" component={Topic}/>
    </HashRouter>
  );
}

export default App;
