import { reduceMethod } from './reduce-method';


const numArr = [1, 2, 3, 4, 5];
const addNumbers = (a, b) => a + b;

describe('reduceMethod', () => {
  it ('returns the sum of all the numbers in the array as the accumulator value', () => {

    const expected = 15;
    const actual = reduceMethod(numArr, addNumbers);

    expect(actual).toEqual(expected);
  });
});
