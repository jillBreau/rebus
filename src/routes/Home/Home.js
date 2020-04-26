import React from 'react';
import './Home.css';
import Example from '../../components/Example';

class Home extends React.Component {
  state = {
    exampleDisplaying: false
  };

  toggleExample() {
    this.setState({exampleDisplaying: !this.state.exampleDisplaying});

    var exampleButton = document.getElementById("exampleButton");
    if (exampleButton.innerHTML === "Show an example") {
      exampleButton.innerHTML = "Hide the example";
    } else { 
      exampleButton.innerHTML = "Show an example"
    }
  };
  
  render() {
    const { exampleDisplaying } = this.state;
    return (
      <div className="contentContainer">
        <div className="mainContent" id="intro">
          <h1 id="question">
            What <i>is</i> a rebus?
          </h1>
          <h3 id="definition">
            A rebus is a puzzle device which combines the use of illustrated pictures with individual letters to depict words and/or phrases.<br/> Read more <a href="https://en.wikipedia.org/wiki/Rebus" title="Rebus - Wikipedia">here</a>.
          </h3>
          <button className="styledButton" id="exampleButton" onClick={() => this.toggleExample()}>Show an example</button>
          {exampleDisplaying && <Example />}
        </div>
      </div>
    );
  };
};

export default Home;