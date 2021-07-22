import { everyMethod } from './every-method';

describe('everyMethod', () => {
  it('returns a true value if all of the callback requirements return true or a truthy value', () => {

    const arr = [1, 2, 4, 6];
    const callback = (x) => x % 2;
    const actual = everyMethod(arr, callback);

    expect(actual).toBeTruthy();
  });
});
