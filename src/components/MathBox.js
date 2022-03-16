import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MathBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { keyed } = this.props;
    return (
      <div className="math-box">{keyed}</div>
    );
  }
}

MathBox.propTypes = {
  keyed: PropTypes.string.isRequired,
};
