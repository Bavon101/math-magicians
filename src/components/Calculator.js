import React, { Component } from 'react';
import InputTile from './InputTile';
import MathBox from './MathBox';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  inputKeys = [
    {
      key: 'AC',
      operan: true,
      dummy: true,
    },
    {
      key: '+/-',
      operan: false,
    },
    {
      key: '%',
      operan: true,
    },
    {
      key: '÷',
      operan: true,
      value: '/',
      color: '#3d5a80',
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
      color: '#3d5a80',
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
      color: '#3d5a80',
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
      color: '#3d5a80',
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
      operan: false,
      value: '=',
      color: '#3d5a80',
      solution: true,
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      keyed: '0',
      solution: {
        total: '0',
        next: null,
        operation: null,
      },
    };
  }

  onTileClick = (input) => {
    // check if the input is a dummy one
    if (input.dummy) {
      return;
    }
    const { solution } = this.state;
    // check if the user wants to solve none existing solution
    if (input.solution && solution.operation === null) {
      if (solution.total) {
        this.setState({ keyed: solution.total });
      }
      return;
    }
    const solved = calculate(solution, input.key);
    // check if solution object is empty and return
    if (Object.keys(solved).length === 0) {
      return;
    }
    const { next } = solved;
    const hasNext = next !== null && next !== undefined;
    this.setState({
      solution: solved,
      keyed: !hasNext ? solved.total : next,
    });
  };

  render() {
    const { keyed } = this.state;
    return (
      <div className="cal-card">
        <MathBox keyed={keyed} />
        <div className="inputs-card">
          {this.inputKeys.map((k) => (
            <InputTile
              key={k.key}
              input={k}
              onClick={() => this.onTileClick(k)}
            />
          ))}
        </div>
      </div>
    );
  }
}
