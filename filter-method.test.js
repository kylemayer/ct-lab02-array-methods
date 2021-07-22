import { filterMethod } from './filter-method';

describe('filterMethod', () => {
  it ('returns a new array of filtered items', () => {
    const numberArr = [1, 2, 3, 4, 5, 6, 7, 8];

    const isEvenNumber = (number) => {
      if(number % 2 === 0) return true;
      else return false;
    };
    expect(filterMethod(numberArr, isEvenNumber)).toEqual([2, 4, 6, 8]);
  });
});
