import React from "react";
import '../App.css'
import logo from "../logo.svg";

const Home = () => (
    <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to Redmine</h1>
        </header>
        <p className="App-intro">
            {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        </p>
    </div>
);
export default Home;