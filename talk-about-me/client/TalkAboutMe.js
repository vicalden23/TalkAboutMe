import React, { Component } from 'react';

class TalkAboutMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: 'It Works!'
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      {this.props.words}
    );
  };
};

export default TalkAboutMe;
