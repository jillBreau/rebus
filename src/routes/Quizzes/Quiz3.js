import React from 'react';
import Questions from '../../components/Questions';
import './Quiz.css';


import q_1 from '../../images/q3_1.jpg';
import q_2 from '../../images/q3_2.jpg';
import q_3 from '../../images/q3_3.jpg';
import q_4 from '../../images/q3_4.jpg';
import q_5 from '../../images/q3_5.jpg';
import q_6 from '../../images/q3_6.jpg';
import q_7 from '../../images/q3_7.jpg';
import q_8 from '../../images/q3_8.jpg';
import q_9 from '../../images/q3_9.jpg';
import q_10 from '../../images/q3_10.jpg';

const questions = [
  {
    src: q_1,
    alt: 'The word "KNEE". Under that, the word "LIGHTS".',
    correct: 'Neon lights',
    possibilities: ['neonlights'],
    attempts: 0
  },
  {
    src: q_2,
    alt: '"B10" written in half blue font on the top, half black font on the bottom.',
    correct: 'Beaten black and blue',
    possibilities: ['beatenblackandblue'],
    attempts: 0
  },
  {
    src: q_3,
    alt: 'The word "TIME" written with very tall stretched out letters, beside the alphabet missing the letter "C".',
    correct: 'Long time no see',
    possibilities: ['longtimenosee'],
    attempts: 0
  },
  {
    src: q_4,
    alt: 'The letters "TEEF". Under that, the letters "TEEF".',
    correct: 'Two left feet',
    possibilities: ['twoleftfeet', '2leftfeet'],
    attempts: 0
  },
  {
    src: q_5,
    alt: 'The letters "NEAFRIENDED".',
    correct: 'A friend in need',
    possibilities: ['afriendinneed'],
    attempts: 0
  },
  {
    src: q_6,
    alt: 'The letter "O", a blank space, the letters "ER", a blank space, the letter "T", a blank space, the letter "O", and a blank space.',
    correct: 'Painless operation',
    possibilities: ['painlessoperation', 'painfreeoperation',
                    'apainlessoperation', 'apainfreeoperation'],
    attempts: 0
  },
  {
    src: q_7,
    alt: 'The word "DICE". Under that, the word "DICE".',
    correct: 'Paradise',
    possibilities: ['paradise', 'aparadise'],
    attempts: 0
  },
  {
    src: q_8,
    alt: 'The letters "T" "O" "L" "B" stacked from top to bottom, and a checkmark to the right of it.',
    correct: 'Bolt upright',
    possibilities: ['boltupright'],
    attempts: 0
  },
  {
    src: q_9,
    alt: 'The word "ISSUE" written ten times.',
    correct: 'Tennis shoes',
    possibilities: ['tennisshoes', 'tennisshoe'],
    attempts: 0
  },
  {
    src: q_10,
    alt: 'A big letter "C" with the letters "B" "L" "O" "U" "S" "E" spelled down the spine.',
    correct: 'See-through blouse',
    possibilities: ['seethroughblouse', 'aseethroughblouse'],
    attempts: 0
  }
]

class Quiz3 extends React.Component {
  
  render() {
    return (
      <div className="contentContainer">
        <div className="mainContent" id="questions">
          <Questions questions={questions} quizNumber={3} nextQuizNumber={null}></Questions>
        </div>
      </div>
    );
  };
};

export default Quiz3;