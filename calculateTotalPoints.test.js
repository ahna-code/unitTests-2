const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
  describe('normal', () => {
    it('should return 131.8', () => {
      const actual = calculateTotalPoints(111.0, 'normal', 98, [19.0, 19.5, 19.0, 19.0, 19.0], 3.2, -14.4);
      
      const expected = '131.8';
      
      assert.equal(actual, expected);
    })

    it('should return 117.2', () => {
      const actual = calculateTotalPoints(109.0, 'normal', 98, [17.0, 16.5, 18.5, 17.5, 18.5], 0, -17.8);
      
      const expected = '117.2';
			
      assert.equal(actual, expected);
    })
		
    it('should return 98.8', () => {
      const actual = calculateTotalPoints(93.0, 'normal', 98, [17.0, 16.5, 17.0, 17.0, 17.0], 6.4, -8.6);

      const expected = '98.8';
	
      assert.equal(actual, expected);
    })
  })

  describe('large', () => {
    it('should return 137.3', () => {
      const actual = calculateTotalPoints(134, 'large', 120, [19.0, 20.0, 19.5, 19.0, 18.5], 0, -5.4);

      const expected = '137.3';
			
      assert.equal(actual, expected);
    })

    it('should return 117.5', () => {
      const actual = calculateTotalPoints(123.5, 'large', 120, [18.0, 17.5, 18.0, 18.0, 18.0], 0, -2.8);
			
      const expected = '117.5';

      assert.equal(actual, expected);
    })
		
    it('should return 92.5', () => {
      const actual = calculateTotalPoints(114.5, 'large', 120, [16.5, 16.0, 16.5, 16.5, 16.5], 0, -7.1);

      const expected = '92.5';

      assert.equal(actual, expected);
    })
  })
	
  describe('flying', () => {
    it('should return 208.3', () => {
      const actual = calculateTotalPoints(227.5, 'flying', 200, [18.0, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);
		
      const expected = '208.3';

      assert.equal(actual, expected);
    })
		
    it('should return 184.0', () => {
      const actual = calculateTotalPoints(212.0, 'flying', 200, [18.0, 18.0, 18.0, 17.5, 17.5], -3.9, 0);

      const expected = '184.0';

      assert.equal(actual, expected);
    })

    it('should return 125.7', () => {
      const actual = calculateTotalPoints(170.0, 'flying', 200, [16.0, 15.0, 15.0, 16.0, 15.0], -4.3, 0);

      const expected = '125.7';

      assert.equal(actual, expected);
    })
  })

  describe('distancePoints is null', () => {
    it('expected null', () => {
      const actual = calculateTotalPoints(227, 'test', 200, [18.0, 18.5, 17.5, 18.5, 18.5], -8.4, 0);

      const expected = null;

      assert.equal(actual, expected);
    });
  }); 
})
