import React from "react";
import { HashRouter, Route} from "react-router-dom";
import Home from "./routes/Main";
import SignIn from "./routes/SignIn";
import './App.css';

function App() {
  return (
    <HashRouter>
        <Route path="/" component={Home}/>
        <Route path="/member/signin" component={SignIn}/>
    </HashRouter>
  );
}

export default App;
