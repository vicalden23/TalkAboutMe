import React, { Component } from 'react';

class TalkAboutMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: 'It Works!'
    };
  }


  render() {
    return (
      <div>
        {this.state.words}
      </div>
    );
  };
};

export default TalkAboutMe;
