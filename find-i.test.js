import { findI } from './find-i';

describe('findI', () => {
  const items = ['wolf', 'computer', 'socks', 'leaf', 'umbrella'];

  it('takes in an array and callback and returns the index of the first item with a callback value of truthy', () => {
    const callback = (item) => {
      if(item){
        return item;
      }
    };
    const expected = 3;
    const actual = findI(items, callback('leaf'));

    expect(actual).toEqual(expected);
  });
});
