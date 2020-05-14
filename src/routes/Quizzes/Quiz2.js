import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import Quiz3 from './Quiz3';
import Questions from '../../components/Questions';
import './Quiz.css';


import q_1 from '../../images/q2_1.jpg';
import q_2 from '../../images/q2_2.jpg';
import q_3 from '../../images/q2_3.jpg';
import q_4 from '../../images/q2_4.jpg';
import q_5 from '../../images/q2_5.jpg';
import q_6 from '../../images/q2_6.jpg';
import q_7 from '../../images/q2_7.jpg';
import q_8 from '../../images/q2_8.jpg';
import q_9 from '../../images/q2_9.jpg';
import q_10 from '../../images/q2_10.jpg';

const questions = [
  {
    src: q_1,
    alt: 'The word "NOON". After it, a space. After the space, the word "GOOD".',
    correct: 'Good afternoon',
    possibilities: ['goodafternoon']
  },
  {
    src: q_2,
    alt: 'The word "CHAIR" located at the top of the image.',
    correct: 'High chair',
    possibilities: ['highchair']
  },
  {
    src: q_3,
    alt: 'The letters "O" "U" "T" each written upside down.',
    correct: 'Flipped out',
    possibilities: ['flippedout', 'flipout']
  },
  {
    src: q_4,
    alt: 'The number zero. Under it, a line. Under the line, "M. Sc.". Under that, "Ph. D.". Under that, "B. Ed.".',
    correct: 'Three degrees below zero',
    possibilities: ['threedegreesbelowzero', '3degreesbelowzero',
                    'threedegreesbelow0', '3degreesbelow0',
                    'threebelowzero', '3belowzero',
                    'threebelow0', '3below0',
                    'threedegreesbelowzerodegrees', '3degreesbelowzerodegrees',
                    'threedegreesbelow0degrees', '3degreesbelow0degrees',
                    'threebelowzerodegrees', '3belowzerodegrees',
                    'threebelow0degrees', '3below0degrees']
  },
  {
    src: q_5,
    alt: 'The word "CYCLE". Under it, the word "CYCLE". Under it, the word "CYCLE".',
    correct: 'Tricycle',
    possibilities: ['tricycle', 'atricycle']
  },
  {
    src: q_6,
    alt: 'The word "YOU" horizontally. Beside it, the word "JUST" vertically. Beside that, the word "ME" horizontally.',
    correct: 'Just between you and me',
    possibilities: ['justbetweenyouandme', 'justbetweenyou&me', 'justbetweenyou+me']
  },
  {
    src: q_7,
    alt: 'The letters "LEV". After that, lower and to the right, the letters "EL".',
    correct: 'Split level',
    possibilities: ['splitlevel', 'asplitlevel']
  },
  {
    src: q_8,
    alt: 'The letters "E" "C" "N" "A" "L" "G".',
    correct: 'Backward glance',
    possibilities: ['backwardglance', 'backwardsglance',
                    'abackwardglance', 'abackwardsglance',
                    'glancebackward', 'glancebackwards']
  },
  {
    src: q_9,
    alt: 'The fraction "1/4" repeated four times right next to each other.',
    correct: 'Close quarters',
    possibilities: ['closequarters']
  },
  {
    src: q_10,
    alt: 'The letters "DAYSALLWORK".',
    correct: "All in a day's work",
    possibilities: ["allinadayswork",]
  }
]

class Quiz2 extends React.Component {
  
  render() {
    return (
      <div className="contentContainer">
        <div className="mainContent" id="questions">
          <Questions questions={questions} quizNumber={2} nextQuizNumber={3}></Questions>


          <Switch>
            <Route path="/quiz3" component={Quiz3} />
          </Switch>
        </div>
      </div>
    );
  };
};

export default Quiz2;