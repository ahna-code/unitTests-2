const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  describe('different notes', () => {
    it('contains numbers without a comma separator', () => {
      const actual = calculateStylePoints([18, 18, 19, 15, 16]);
    
      const expected = 52
    
      assert.equal(actual, expected);
    });
		
    it('contains numbers with a comma separator', () => {
      const actual = calculateStylePoints([17, 20, 19.5, 15.5, 18.5]);

      const expected = 55;

      assert.equal(actual, expected);
    });
  });

    describe('the same notes', () => {
      it('contains numbers without a comma separator', () => {
        const actual = calculateStylePoints([19, 19, 19, 19, 19]);

        const expected = 57;

        assert.equal(actual, expected);
    });

      it('contains numbers with a comma separator', () => {
        const actual = calculateStylePoints([19.5, 19.5, 19.5, 19.5, 19.5]);

        const expected = 58.5;

        assert.equal(actual, expected);
      });
   });    
});
