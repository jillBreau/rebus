import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import logo from './logo.png';
import Home from './routes/Home/Home';
import Quiz1 from './routes/Quizzes/Quiz1';
import Quiz2 from './routes/Quizzes/Quiz2';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div id="header">
              <div id="banner">
                  <img id="logo" src={logo} alt="'Rebus Puzzles' logo"/>
                  <h3 id="tryYourHand">Try your hand at some rebus puzzles!!!</h3>
              </div>
              <div id="navBar">
                  <div id="navBarContent">
                      <div id="navBarButtons">
                        <nav>
                          <NavLink activeClassName="activeLink" exact to="/">
                            <button className="navBarButton" id="homeButton">Home</button>
                          </NavLink>
                          <NavLink activeClassName="activeLink" exact to="/quiz1">
                            <button className="navBarButton" id="quiz1Button">Quiz 1</button>
                          </NavLink>
                          <NavLink activeClassName="activeLink" exact to="/quiz2">
                            <button className="navBarButton" id="quiz2Button">Quiz 2</button>
                          </NavLink>
                        </nav>
                      </div>
                  </div>
              </div>
          </div>

          <Switch>
            <Route path="/quiz1" component={Quiz1} />
            <Route path="/quiz2" component={Quiz2} />
            <Route path="/" component={Home} />
          </Switch>
        </div>

        <div id="footer"></div>
      </Router>
    );
  };
};

export default App;
