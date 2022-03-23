import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import operate from './logic/operate';
import calculate from './logic/calculate';
import Calculator from './components/Calculator';
import InputTile from './components/InputTile';
import MathBox from './components/MathBox';
import Vr from './components/Vr';
import Header from './components/Header';
import CalculatorPage from './components/pages/CalculatorPage';
import HomePage from './components/pages/HomePage';
import QuotePage from './components/pages/QuotePage';

test('Test operate 1 - 1 = 0', () => {
  expect(operate(1, 1, '-')).toBe('0');
});

test('Test operate 1 + 1 = 2', () => {
  expect(operate(1, 1, '+')).toBe('2');
});

test('Test operate 1 ÷ 1 = 1', () => {
  expect(operate(1, 1, '÷')).toBe('1');
});

test('Test operate 1 x 1 = 1', () => {
  expect(operate(1, 1, 'x')).toBe('1');
});

test('Calculate 35 & 35 with key + equal 70', () => {
  let obj = {
    total: '35',
    next: null,
    operation: null,
  };
  obj = calculate(obj, '+');
  obj.next = '35';
  obj = calculate(obj, '+');
  expect(obj.total).toBe('70');
});

test('Calculate 35 & 35 with key - equal 0', () => {
  let obj = {
    total: '35',
    next: null,
    operation: null,
  };
  obj = calculate(obj, '-');
  obj.next = '35';
  obj = calculate(obj, '-');
  expect(obj.total).toBe('0');
});

test('Calculate 35 & 5 with key ÷ equal 7', () => {
  let obj = {
    total: '35',
    next: null,
    operation: null,
  };
  obj = calculate(obj, '÷');
  obj.next = '5';
  obj = calculate(obj, '÷');
  expect(obj.total).toBe('7');
});

test('Calculate 5 & 5 with key x equal 25', () => {
  let obj = {
    total: '5',
    next: null,
    operation: null,
  };
  obj = calculate(obj, 'x');
  obj.next = '5';
  obj = calculate(obj, 'x');
  expect(obj.total).toBe('25');
});

it('render Calculator', () => {
  const calc = renderer.create(<Calculator />).toJSON();
  expect(calc).toMatchSnapshot();
});

it('render Vr', () => {
  const calc = renderer.create(<Vr />).toJSON();
  expect(calc).toMatchInlineSnapshot(`
<div
  className="vr"
/>
`);
});

it('render Header', () => {
  const calc = renderer.create(<Header />).toJSON();
  expect(calc).toMatchInlineSnapshot(`
<div
  className="header"
>
  <h1>
     Math Magicians
  </h1>
  <div
    className="links"
  >
    <a
      href="./"
    >
      Home
    </a>
    <div
      className="vr"
    />
    <a
      href="./calculator"
    >
      Calculator
    </a>
    <div
      className="vr"
    />
    <a
      href="./quote"
    >
      Qoute
    </a>
  </div>
</div>
`);
});

it('render CalculatorPage', () => {
  const calc = renderer.create(<CalculatorPage />).toJSON();
  expect(calc).toMatchInlineSnapshot(`
<div>
  <div
    className="header"
  >
    <h1>
       Math Magicians
    </h1>
    <div
      className="links"
    >
      <a
        href="./"
      >
        Home
      </a>
      <div
        className="vr"
      />
      <a
        href="./calculator"
      >
        Calculator
      </a>
      <div
        className="vr"
      />
      <a
        href="./quote"
      >
        Qoute
      </a>
    </div>
  </div>
  <section
    className="calc-elements"
  >
    <h3>
      Let's do some math!
    </h3>
    <div
      className="cal-card"
    >
      <div
        className="math-box"
      >
        0
      </div>
      <div
        className="inputs-card"
      >
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": undefined,
              "color": null,
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          AC
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": undefined,
              "color": null,
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          +/-
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": undefined,
              "color": null,
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          %
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": "#3d5a80",
              "color": "white",
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          ÷
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": undefined,
              "color": null,
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          7
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": undefined,
              "color": null,
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          8
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": undefined,
              "color": null,
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          9
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": "#3d5a80",
              "color": "white",
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          x
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": undefined,
              "color": null,
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          4
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": undefined,
              "color": null,
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          5
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": undefined,
              "color": null,
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          6
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": "#3d5a80",
              "color": "white",
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          -
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": undefined,
              "color": null,
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          1
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": undefined,
              "color": null,
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          2
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": undefined,
              "color": null,
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          3
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": "#3d5a80",
              "color": "white",
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          +
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": undefined,
              "color": null,
              "gridColumn": "1/3",
            }
          }
          type="submit"
        >
          0
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": undefined,
              "color": null,
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          .
        </button>
        <button
          className="input-tile"
          onClick={[Function]}
          style={
            Object {
              "backgroundColor": "#3d5a80",
              "color": "white",
              "gridColumn": undefined,
            }
          }
          type="submit"
        >
          =
        </button>
      </div>
    </div>
  </section>
</div>
`);
});

it('render HomePage', () => {
  const calc = renderer.create(<HomePage />).toJSON();
  expect(calc).toMatchSnapshot();
});

it('render QuotePage', () => {
  const calc = renderer.create(<QuotePage />).toJSON();
  expect(calc).toMatchSnapshot(`
<div>
  <div
    className="header"
  >
    <h1>
       Math Magicians
    </h1>
    <div
      className="links"
    >
      <a
        href="./"
      >
        Home
      </a>
      <div
        className="vr"
      />
      <a
        href="./calculator"
      >
        Calculator
      </a>
      <div
        className="vr"
      />
      <a
        href="./quote"
      >
        Qoute
      </a>
    </div>
  </div>
  <article>
    Math is not about numbers, equations, computations, or alogorithms: It is about understanding. - William Paul Thurston
  </article>
</div>
`);
});

it('render Calculator inputTile', () => {
  const input = {
    key: '0',
    operan: false,
    value: 0,
    grid: '1/3',
  };
  const tile = renderer
    .create(<InputTile input={input} onClick={() => {}} />)
    .toJSON();
  expect(tile).toMatchInlineSnapshot(`
<button
  className="input-tile"
  onClick={[Function]}
  style={
    Object {
      "backgroundColor": undefined,
      "color": null,
      "gridColumn": "1/3",
    }
  }
  type="submit"
>
  0
</button>
`);
});

it('render Calculator Solution Box', () => {
  const solutionBox = renderer.create(<MathBox keyed="0" />).toJSON();
  expect(solutionBox).toMatchInlineSnapshot(`
<div
  className="math-box"
>
  0
</div>
`);
});

test('SolutionBox should have 10 ( 5 + 5 = 10)', () => {
  const { container } = render(<Calculator />);
  const number1 = screen.getByText('5');
  const number2 = screen.getByText('5');
  const operan = screen.getByText('+');
  const equal = screen.getByText('=');
  userEvent.click(number1);
  userEvent.click(operan);
  userEvent.click(number2);
  userEvent.click(equal);
  expect(container.getElementsByClassName('math-box')[0].textContent).toBe(
    '10',
  );
});
