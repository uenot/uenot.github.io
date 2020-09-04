import React from 'react';
import './App.css';
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Site from "./pages/Site";
import SideBar from "./SideBar.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <div className="body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutMe} />
            <Route path="/projects" component={Projects} />
            <Route path="/site" component={Site} />
          </Switch>
        </div>
        <SideBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
