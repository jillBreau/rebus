import React from 'react';
import './PuzzleImg.css';

class PuzzleImg extends React.Component {

  render() {
    const { src, alt, id } = this.props;
    return (
      <img class="puzzleImg" id={id} src={src} alt={alt}></img>
    )
  }
}

export default PuzzleImg;