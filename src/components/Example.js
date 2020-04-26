import React from 'react';
import './Example.css';
import exampleImg from '../images/home_example.jpg';
import PuzzleImg from './PuzzleImg';

class Example extends React.Component {
  state = {
    answerDisplaying: false
  };

  toggleAnswer() {
    this.setState({answerDisplaying: !this.state.answerDisplaying});
    
    let answerButton = document.getElementById("answerButton");
    if (answerButton.innerHTML === "Show the answer") {
      answerButton.innerHTML = "Hide the answer";
    } else { 
      answerButton.innerHTML = "Show the answer"
    }
  };

  render() {
    const { answerDisplaying } = this.state;
    return (
      <div>
        <PuzzleImg
          id="exampleImg"
          src={exampleImg} 
          alt="A rectangle with the word THINK to the right of it.">
        </PuzzleImg>
        <button class="styledButton" id="answerButton" onClick={() => this.toggleAnswer()}>Show the answer</button>
        {
          answerDisplaying && 
          <h4 id="exampleAnswer">The answer is "Think outside the box", because we see the word "THINK" outside of the image of a box.</h4>
        }
      </div>
    )
  }
}

export default Example;