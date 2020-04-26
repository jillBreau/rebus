import React from 'react';
import './Quiz.css';
import PuzzleImg from '../../components/PuzzleImg';

import q_1 from '../../images/q1_1.jpg';
import q_2 from '../../images/q1_2.jpg';


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
]

class Quiz1 extends React.Component {
  state = {
    submitted: false,
    correct: false,
    nextClicked: false
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
    const theirAnswer = document.getElementById('answer').value;
    if (questions[0].possibilities.includes(this.simplifyString(theirAnswer))) {
      this.setState({correct: true});
    }
    this.setState({submitted: true});
  }

  comingSoon() {
    this.setState({nextClicked: true})
  }

  render() {
    const { submitted, correct } = this.state;
    return (
      <div className="contentContainer">
        <div className="mainContent" id="questions">
          <h1 id="questionNumber">Quiz 1 - Question 1</h1>
          <PuzzleImg id="questionImg" src={questions[0].src} alt={questions[0].alt}></PuzzleImg>
          {
            !submitted &&
            <div>
              <input type="text" id="answer" name="answer" placeholder="Your answer"></input>
              <button className="styledButton" onClick={() => this.checkAnswer()}>Submit</button>
            </div>
          }
          {
            (submitted && correct) &&
            <h4>Correct! The answer is {questions[0].correct}.</h4>
          }
          {
            (submitted && !correct) &&
            <h4>Incorrect! The answer is {questions[0].correct}.</h4>
          }
          {
            submitted && 
            <button className="styledButton" onClick={() => this.comingSoon()}>Next</button>
          }
          {
            this.state.nextClicked && 
            <h4>More questions coming soon!</h4>
          }
        </div>
      </div>
    );
  };
};

export default Quiz1;