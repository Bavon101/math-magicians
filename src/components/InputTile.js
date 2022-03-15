import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { input } = this.props;
    return (
      <button type="submit" className="input-tile" style={{ backgroundColor: input.color, gridColumn: input.grid }}>{input.key}</button>
    );
  }
}

InputTile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  input: PropTypes.object.isRequired,
};
