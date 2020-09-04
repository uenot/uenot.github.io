import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {

  return (
    <div className="home">
      <h1 className="hometitle">Toby Ueno</h1>
      <div className="homenav">
        <Link to="/about">About Me</Link>
        <Link to="/projects">Current Projects</Link>
        <Link to="/aboutsite">About this Site</Link>
      </div>
    </div>
  );
}

export default Home;