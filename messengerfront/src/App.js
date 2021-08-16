import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route} from "react-router-dom";
import Home from "./routes/Main";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import './App.css';

function App() {
  return (
    <HashRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/member/signin" component={SignIn}/>
        <Route path="/member/signup" component={SignUp}/>
    </HashRouter>
  );
}

export default App;
