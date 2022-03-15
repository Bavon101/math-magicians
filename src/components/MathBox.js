import React, { Component } from 'react';

export default class MathBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <input id="math-box" type="number" placeholder="0" defaultValue={0} />
    );
  }
}
