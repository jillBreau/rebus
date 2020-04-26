import React from 'react';
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Quiz2 from './Quiz2';
import PuzzleImg from '../../components/PuzzleImg';
import './Quiz.css';


import q_1 from '../../images/q1_1.jpg';
import q_2 from '../../images/q1_2.jpg';
import q_3 from '../../images/q1_3.jpg';
import q_4 from '../../images/q1_4.jpg';
import q_5 from '../../images/q1_5.jpg';
import q_6 from '../../images/q1_6.jpg';
import q_7 from '../../images/q1_7.jpg';
import q_8 from '../../images/q1_8.jpg';
import q_9 from '../../images/q1_9.jpg';
import q_10 from '../../images/q1_10.jpg';

const questions = [
  {
    src: q_1,
    alt: 'A rectangle with the word "SAND" inside of it.',
    correct: 'Sandbox',
    possibilities: ['sandbox', 'asandbox'],
    attempts: 0
  },
  {
    src: q_2,
    alt: 'The word "MAN". Under it, a line. Under the line, the word "BOARD".',
    correct: 'Man overboard',
    possibilities: ['manoverboard'],
    attempts: 0
  },
  {
    src: q_3,
    alt: 'The letters "T" "O" "W" "N" stacked from top to bottom.',
    correct: 'Downtown',
    possibilities: ['downtown'],
    attempts: 0
  },
  {
    src: q_4,
    alt: 'The word "MIND". Under it, a line. Under the line, the word "MATTER".',
    correct: 'Mind over matter',
    possibilities: ['mindovermatter'],
    attempts: 0
  },
  {
    src: q_5,
    alt: 'The letters "R" "E" "A" "D" all separated by vertical lines.',
    correct: 'Read between the lines',
    possibilities: ['readbetweenthelines'],
    attempts: 0
  },
  {
    src: q_6,
    alt: 'The word "STAND". Under it, a line. Under the line, the letter "I".',
    correct: 'I understand',
    possibilities: ['iunderstand'],
    attempts: 0
  },
  {
    src: q_7,
    alt: 'The word "ROAD" written once vertically and once horizontally, intersecting.',
    correct: 'Crossroads',
    possibilities: ['crossroad', 'acrossroad', 'crossroads', 'acrossroads'],
    attempts: 0
  },
  {
    src: q_8,
    alt: 'The word "WEAR". Under it, a line. Under the line, the letter "LONG".',
    correct: 'Long underwear',
    possibilities: ['longunderwear'],
    attempts: 0
  },
  {
    src: q_9,
    alt: 'The letters "T" "O" "U" "C" "H" stacked from top to bottom.',
    correct: 'Touchdown',
    possibilities: ['touchdown', 'atouchdown'],
    attempts: 0
  },
  {
    src: q_10,
    alt: 'The word "GROUND". Under it, the word "FEET" written six times.',
    correct: 'Six feet underground',
    possibilities: ["sixfeetunderground", "6feetunderground",
                    "sixftunderground", "6ftunderground",
                    "six'underground", "6'underground",],
    attempts: 0
  }
]

class Quiz1 extends React.Component {
  state = {
    submitted: false,
    correct: false,
    giveUp: false,
    q: 0,
    quizComplete: false
  };

  simplifyString(theirAnswer) {
    let simpleAnswer = theirAnswer.toLowerCase()
    simpleAnswer = simpleAnswer.replace(/ /g, '');
    simpleAnswer = simpleAnswer.replace(/-/g, '');
    simpleAnswer = simpleAnswer.replace(/\./g, '');
    simpleAnswer = simpleAnswer.replace(/!/g, '');

    return simpleAnswer;
  };

  checkAnswer() {
    const { q } = this.state;
    const theirAnswer = document.getElementById('answer').value;
    if (questions[q].possibilities.includes(this.simplifyString(theirAnswer))) {
      this.setState({correct: true});
    }
    this.setState({submitted: true});
    questions[q].attempts = questions[q].attempts + 1;
  }

  nextQuestion() {
    const { q } = this.state;
    if (q < 9) {
      this.setState({
        submitted: false,
        correct: false,
        giveUp: false,
        q: q + 1
      });
    } else {
      this.setState({
        quizComplete: true
      })
    }
  }

  tryAgain() {
    this.setState({submitted: false})
  }

  showAnswer() {
    this.setState({giveUp: true})
  }

  ordinalSuffix(i) {
    var j = i % 10;
    var k = i % 100;
    if (i === 0) {
        return "";
    }
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
};

  render() {
    const { submitted, correct, giveUp, q, quizComplete } = this.state;
    return (
      <div className="contentContainer">
        <div className="mainContent" id="questions">
          {
            (!quizComplete) &&
            <div>
              <h1 id="questionNumber">Quiz 1 - Question {q + 1}</h1>
              <PuzzleImg id="questionImg" src={questions[q].src} alt={questions[q].alt}></PuzzleImg>
            </div>
          }
          {
            (!submitted && !giveUp && !quizComplete) &&
            <div class="parallel">
              <input type="text" id="answer" name="answer" placeholder="Your answer"></input>
              <button className="styledButton" onClick={() => this.checkAnswer()}>Submit</button>
            </div>
          }
          {
            (submitted && correct && !giveUp && !quizComplete) &&
            <div class="parallel">
              <h4>Correct! The answer is "{questions[q].correct}".</h4>
              <button className="styledButton" onClick={() => this.nextQuestion()}>Next</button>
            </div>
          }
          {
            (submitted && !correct && !giveUp && !quizComplete) &&
            <div class="parallel">
              <h4>Incorrect... that was your {this.ordinalSuffix(questions[q].attempts)} attempt.</h4>
              <button className="styledButton" onClick={() => this.tryAgain()}>Try again</button>
              <button className="styledButton" onClick={() => this.showAnswer()}>Show answer</button>
            </div>
          }
          {
            (submitted && giveUp && !quizComplete) &&
            <div class="parallel">
              <h4>The answer is "{questions[q].correct}".</h4>
              <button className="styledButton" onClick={() => this.nextQuestion()}>Next</button>
            </div>
          }
          {
            (quizComplete) &&
            <div>
              <h4>Congratulations! You have completed Quiz 1.</h4>
              <NavLink activeClassName="activeLink" exact to="/quiz2">
                <button className="styledButton" id="tryQuiz">Try Quiz 2</button>
              </NavLink>
            </div>
          }


          <Switch>
            <Route path="/quiz2" component={Quiz2} />
          </Switch>
        </div>
      </div>
    );
  };
};

export default Quiz1;