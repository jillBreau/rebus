import React from 'react';
import './Home.css';


class Home extends React.Component {
    render() {
      return (
        <div className="contentContainer">
          <div id="intro">
            <h1 id="question">
              What <i>is</i> a rebus?
            </h1>
            <h4 id="definition">
              A rebus is a puzzle device which combines the use of illustrated pictures with individual letters to depict words and/or phrases. Read more <a href="https://en.wikipedia.org/wiki/Rebus" title="Rebus - Wikipedia">here</a>.
            </h4><br/> 
                      
          </div>
        </div>
      );
    };
  };

export default Home;