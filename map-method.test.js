import { mapMethod } from './map-method';


describe('mapMethod', () => {
  it('returns a new array lower case tree names', () => {

    const treeArr = ['SPRUCE', 'PINE', 'CEDAR', 'CYPRESS', 'MAHOGANY'];

    const arrLowerCase = (str) => {
      return str.toLowerCase();
    };

    const expected = ['spruce', 'pine', 'cedar', 'cypress', 'mahogany'];

    const actual = mapMethod(treeArr, arrLowerCase);


    expect(actual).toEqual(expected);
  });
});
