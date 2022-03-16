import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { input } = this.props;
    const { onClick } = this.props;
    const textColor = input.color !== undefined ? 'white' : null;
    return (
      <button type="submit" onClick={onClick} className="input-tile" style={{ backgroundColor: input.color, gridColumn: input.grid, color: textColor }}>{input.key}</button>
    );
  }
}

InputTile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  input: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
