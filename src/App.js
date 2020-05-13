import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import {
  Switch,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Home from './routes/Home/Home';
import Quiz1 from './routes/Quizzes/Quiz1';
import Quiz2 from './routes/Quizzes/Quiz2';
import Quiz3 from './routes/Quizzes/Quiz3';
import './App.css';

class App extends React.Component {
  state = {
    instructionsOpen: false
  };

  toggleInstructions = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({instructionsOpen: open});
  };

  instructionsContent = (
    <div id="instructionsContent">
      <div
        id="instructionsTitle"
        role="presentation"
        onClick={this.toggleInstructions(false)}
        onKeyDown={this.toggleInstructions(false)}
      >
        <h3>Instructions and Scoring</h3>
        
      </div>
      <div 
        id="instructionsList"
        role="presentation"
        onClick={this.toggleInstructions(false)}
        onKeyDown={this.toggleInstructions(false)}
      >
        <p>Each Quiz has ten questions.</p>
        <p>You get one point per question for answering it on the first try, or half a point per question for answering it on the second try.</p>
        <p>You can try each question an unlimited amount of times, for fun, before clicking "Show answer".</p>
      </div>
    </div>
  );

  render() {
    const { instructionsOpen } = this.state;
    return (
      <HashRouter>
        <div >
          <div id="header">
              <div id="banner">
                  <img id="logo" src={logo} alt="'Rebus Puzzles' logo"/>
                  <h3 id="tryYourHand">Try your hand at some rebus puzzles.</h3>
              </div>
              <div id="navBar">
                  <div id="navBarContent">
                      <div className="navBarButtons">
                        <nav>
                          <NavLink activeClassName="activeLink" exact to="/">
                            <button className="navBarButton" id="homeButton"><FontAwesomeIcon icon={faHome} /></button>
                          </NavLink>
                          <NavLink activeClassName="activeLink" exact to="/quiz1">
                            <button className="navBarButton" id="quiz1Button">Quiz 1</button>
                          </NavLink>
                          <NavLink activeClassName="activeLink" exact to="/quiz2">
                            <button className="navBarButton" id="quiz2Button">Quiz 2</button>
                          </NavLink>
                          <NavLink activeClassName="activeLink" exact to="/quiz3">
                            <button className="navBarButton" id="quiz3Button">Quiz 3</button>
                          </NavLink>
                        </nav>
                      </div>
                      <div className="navBarButtons">
                        <React.Fragment key="right">
                          <button className="navBarButton" id="instructionsButton" onClick={this.toggleInstructions(!instructionsOpen)}>Instructions</button>
                          <Drawer id="instructions" anchor="right" open={instructionsOpen} onClose={this.toggleInstructions(false)}>
                            {this.instructionsContent}
                          </Drawer>
                        </React.Fragment>
                      </div>
                  </div>
              </div>
          </div>

          <Switch>
            <Route path="/quiz1" component={Quiz1} />
            <Route path="/quiz2" component={Quiz2} />
            <Route path="/quiz3" component={Quiz3} />
            <Route path="/" component={Home} />
          </Switch>
        </div>

        <div id="footer"></div>
      </HashRouter>
    );
  };
};

export default App;
