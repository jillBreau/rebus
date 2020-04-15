import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import rebus_logo from './rebus_logo.png'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div id="header">
            <div id="banner">
                <img id="logo" src={rebus_logo} alt="'Rebus Puzzles' logo"/>
                <h3 id="tryYourHand">Try your hand at some rebus puzzles.</h3>
            </div>
            <div id="navBar">
                <div id="navBarContent">
                    <div id="navBarButtons">
                      <nav>
                        <Link to="/">
                          <button className="navBarButton" id="homeButton">Home</button>
                        </Link>
                        <Link to="/quiz1">
                          <button className="navBarButton" id="quiz1Button">Quiz 1</button>
                        </Link>
                        <Link to="/quiz2">
                          <button className="navBarButton" id="quiz2Button">Quiz 2</button>
                        </Link>
                      </nav>
                    </div>
                </div>
            </div>
        </div>

        <Switch>
          <Route path="/quiz1">
            <Quiz1 />
          </Route>
          <Route path="/quiz2">
            <Quiz2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

      <div id="footer"></div>
    </Router>
  );
}

function Home() {
  return (
    <div className="contentContainer">
        <div id="intro">
            <h1 id="question">
                What <i>is</i> a rebus?
            </h1>
            <h4 id="definition">
                A rebus is a puzzle device which combines the use of illustrated pictures with individual letters to depict words and/or phrases. Read more <a href="https://en.wikipedia.org/wiki/Rebus" title="Rebus - Wikipedia">here</a>.
            </h4><br/>            
        </div>
    </div>
  );
}

function Quiz1() {
  return (
    <div className="contentContainer">
        <div className="puzzles">
            <h1>Quiz 1</h1>
        </div>
    </div>
  );
}

function Quiz2() {
  return (
    <div className="contentContainer">
        <div className="puzzles">
            <h1>Quiz 2</h1>
        </div>
    </div>
  );
}

export default App;
