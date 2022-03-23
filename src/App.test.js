import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import operate from './logic/operate';
import calculate from './logic/calculate';
import Calculator from './components/Calculator';
import InputTile from './components/InputTile';
import MathBox from './components/MathBox';

test('Test operate 1 - 1 = 0', () => {
  expect(operate(1, 1, '-')).toBe('0');
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

it('render Calculator', () => {
  const calc = renderer.create(<Calculator />).toJSON();
  expect(calc).toMatchSnapshot();
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
