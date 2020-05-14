import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import Quiz2 from './Quiz2';
import Questions from '../../components/Questions';
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
    possibilities: ['sandbox', 'asandbox']
  },
  {
    src: q_2,
    alt: 'The word "MAN". Under it, a line. Under the line, the word "BOARD".',
    correct: 'Man overboard',
    possibilities: ['manoverboard']
  },
  {
    src: q_3,
    alt: 'The letters "T" "O" "W" "N" stacked from top to bottom.',
    correct: 'Downtown',
    possibilities: ['downtown']
  },
  {
    src: q_4,
    alt: 'The word "MIND". Under it, a line. Under the line, the word "MATTER".',
    correct: 'Mind over matter',
    possibilities: ['mindovermatter']
  },
  {
    src: q_5,
    alt: 'The letters "R" "E" "A" "D" all separated by vertical lines.',
    correct: 'Read between the lines',
    possibilities: ['readbetweenthelines']
  },
  {
    src: q_6,
    alt: 'The word "STAND". Under it, a line. Under the line, the letter "I".',
    correct: 'I understand',
    possibilities: ['iunderstand']
  },
  {
    src: q_7,
    alt: 'The word "ROAD" written once vertically and once horizontally, intersecting.',
    correct: 'Crossroads',
    possibilities: ['crossroad', 'acrossroad', 'crossroads', 'acrossroads']
  },
  {
    src: q_8,
    alt: 'The word "WEAR". Under it, a line. Under the line, the letter "LONG".',
    correct: 'Long underwear',
    possibilities: ['longunderwear']
  },
  {
    src: q_9,
    alt: 'The letters "T" "O" "U" "C" "H" stacked from top to bottom.',
    correct: 'Touchdown',
    possibilities: ['touchdown', 'atouchdown']
  },
  {
    src: q_10,
    alt: 'The word "GROUND". Under it, the word "FEET" written six times.',
    correct: 'Six feet underground',
    possibilities: ["sixfeetunderground", "6feetunderground",
                    "sixftunderground", "6ftunderground"]
  }
]

class Quiz1 extends React.Component {
  
  render() {
    return (
      <div className="contentContainer">
        <div className="mainContent" id="questions">
          <Questions questions={questions} quizNumber={1} nextQuizNumber={2}></Questions>

          <Switch>
            <Route path="/quiz2" component={Quiz2} />
          </Switch>
        </div>
      </div>
    );
  };
};

export default Quiz1;