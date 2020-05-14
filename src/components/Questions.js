import React from 'react';
import {
  NavLink
} from "react-router-dom";
import PuzzleImg from './PuzzleImg';

class Questions extends React.Component {
  state = {
    submitted: false,
    correct: false,
    giveUp: false,
    q: 0,
    quizComplete: false,
    questions: this.props.questions,
    quizScore: 0,
    questionAttempts: 0,
    questionScore: 0
  };

  simplifyString(theirAnswer) {
    let simpleAnswer = theirAnswer.toLowerCase()
    simpleAnswer = simpleAnswer.replace(/ /g, '');
    simpleAnswer = simpleAnswer.replace(/-/g, '');
    simpleAnswer = simpleAnswer.replace(/\./g, '');
    simpleAnswer = simpleAnswer.replace(/!/g, '');
    simpleAnswer = simpleAnswer.replace(/'/g, '');
    simpleAnswer = simpleAnswer.replace(/"/g, '');
    simpleAnswer = simpleAnswer.replace(/,/g, '');

    return simpleAnswer;
  };

  checkAnswer() {
    const { q, questions, questionAttempts } = this.state;
    const theirAnswer = document.getElementById('answer').value;
    
    const attemptsUpdated = questionAttempts + 1;
    this.setState({submitted: true, questionAttempts: attemptsUpdated});

    if (questions[q].possibilities.includes(this.simplifyString(theirAnswer))) {
      this.setState({correct: true});
      this.questionPoints(attemptsUpdated);
    }
  }

  questionPoints(questionAttempts) {
    const {quizScore} = this.state;
    let points = 0;
    if (questionAttempts === 1) {
      points = 1;
    } else if (questionAttempts === 2) {
      points = 0.5;
    }
    this.setState({quizScore: quizScore + points, questionScore: points});
  }

  nextQuestion() {
    const { q, questions } = this.state;
    if (q < (questions.length - 1)) {
      this.setState({
        submitted: false,
        correct: false,
        giveUp: false,
        q: q + 1,
        questionAttempts: 0,
        questionPoints: 0
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
    const { submitted, correct, giveUp, q, quizComplete, questions, quizScore, questionAttempts, questionScore } = this.state;
    const questionNumber = q + 1;
    const { quizNumber, nextQuizNumber } = this.props;
    const nextQuizPath = `/quiz${nextQuizNumber}`;
    return (
      <div>
      {
        (!quizComplete) &&
        <div>
          <h1 id="questionNumber">Quiz {quizNumber}<br/>Question {questionNumber}</h1>
          <PuzzleImg id="questionImg" src={questions[q].src} alt={questions[q].alt}></PuzzleImg>
        </div>
      }
      {
        (!submitted && !giveUp && !quizComplete) &&
        <div className="parallelInput">
          <input type="text" id="answer" name="answer" placeholder="Your answer"></input>
          <button className="styledButton" onClick={() => this.checkAnswer()}>Submit</button>
        </div>
      }
      {
        (submitted && correct && !giveUp && !quizComplete) &&
        <div className="parallel">
          <h4>Correct! The answer is "{questions[q].correct}".<br/>
          {questionScore}/1 points for Question {questionNumber}.</h4>
          <button className="styledButton" id="correctNext" onClick={() => this.nextQuestion()}>Next</button>
        </div>
      }
      {
        (submitted && !correct && !giveUp && !quizComplete) &&
        <div className="parallel">
          <h4>Incorrect...<br/>that was your<wbr/> {this.ordinalSuffix(questionAttempts)} attempt.</h4>
          <button className="styledButton" id="tryAgainButton" onClick={() => this.tryAgain()}>Try again</button>
          <button className="styledButton" onClick={() => this.showAnswer()}>Show answer</button>
        </div>
      }
      {
        (submitted && giveUp && !quizComplete) &&
        <div className="parallel">
          <h4>The answer is "{questions[q].correct}".<br/>
          0/1 points for Question {questionNumber}.</h4>
          <button className="styledButton" id="giveUpNext" onClick={() => this.nextQuestion()}>Next</button>
        </div>
      }
      {
        (quizComplete) &&
        <div>
          <h4>Congratulations! You have completed Quiz {quizNumber}.<br/>
          Your score is {quizScore}/10 points.</h4>
          {
            (nextQuizNumber) &&
            <div>
              <button className="styledButton" id="retryQuiz" onClick={() => window.location.reload()}>Retry Quiz {quizNumber}</button>
              <NavLink activeClassName="activeLink" exact to={nextQuizPath}>
                <button className="styledButton" id="tryQuiz">Try Quiz {nextQuizNumber}</button>
              </NavLink>
            </div>
          }
          {
            (!nextQuizNumber) &&
            <div>
              <h4>This is the last quiz. Thank you for playing Rebus Puzzles!</h4>
              <button className="styledButton" id="retryQuiz" onClick={() => window.location.reload()}>Retry Quiz {quizNumber}</button>
            </div>
          }
        </div>
      }
      </div>
    )
  }
};

export default Questions;