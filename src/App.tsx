import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Header/Header";
import {Nav} from "./Nav/Nav";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;
