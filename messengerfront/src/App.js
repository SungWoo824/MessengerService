import React from "react";
import { HashRouter, Route} from "react-router-dom";
import Home from "./routes/Main";
import './App.css';

function App() {
  return (
    <HashRouter>
        <Route path="/" component={Home}/>
    </HashRouter>
  );
}

export default App;
