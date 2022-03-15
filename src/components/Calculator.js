import React, { Component } from 'react';
import InputTile from './InputTile';
import MathBox from './MathBox';

export default class Calculator extends Component {
  inputKeys = [
    {
      key: 'AC',
      operan: true,
    },
    {
      key: '+/-',
      operan: true,
    },
    {
      key: '%',
      operan: true,
    },
    {
      key: '÷',
      operan: true,
      value: '/',
      color: 'orange',
    },
    {
      key: '7',
      operan: false,
      value: 7,
    },
    {
      key: '8',
      operan: false,
      value: 8,
    },
    {
      key: '9',
      operan: false,
      value: 9,
    },
    {
      key: 'x',
      operan: true,
      value: '*',
      color: 'orange',
    },
    {
      key: '4',
      operan: false,
      value: 4,
    },
    {
      key: '5',
      operan: false,
      value: 5,
    },
    {
      key: '6',
      operan: false,
      value: 6,
    },
    {
      key: '-',
      operan: true,
      value: '-',
      color: 'orange',
    },
    {
      key: '1',
      operan: false,
      value: 1,
    },
    {
      key: '2',
      operan: false,
      value: 2,
    },
    {
      key: '3',
      operan: false,
      value: 3,
    },
    {
      key: '+',
      operan: true,
      value: '+',
      color: 'orange',
    },
    {
      key: '0',
      operan: false,
      value: 0,
      grid: '1/3',
    },
    {
      key: '.',
      operan: false,
      value: '.',
    },
    {
      key: '=',
      operan: true,
      value: '=',
      color: 'orange',
    },
  ];

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cal-card">
        <MathBox />
        <div className="inputs-card">
          {this.inputKeys.map((k) => (<InputTile key={k.key} input={k} />))}
        </div>
      </div>
    );
  }
}
