const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('normal', () => {
        it('jump more than K-point, should return 73', () => {
            const actual = calculateDistancePoints(104.5, 'normal', 98);
            const expected = '73';
            assert.equal(actual, expected);
        });
        it('jump less than K-point, should return 24', () => {
            const actual = calculateDistancePoints(80, 'normal', 98);
            const expected = '24';
            assert.equal(actual, expected);
        });
        it('jump equal to K-point, should return 60', () => {
            const actual = calculateDistancePoints(98, 'normal', 98);
            const expected = '60';
            assert.equal(actual, expected);
        });        
    });

    describe('large', () => {
        it('jump more than K-point, should return 81.6', () => {
            const actual = calculateDistancePoints(132, 'large', 120);
            const expected = '81.6';
            assert.equal(actual, expected);
        });
        it('jump less than K-point, should return 43.8', () => {
            const actual = calculateDistancePoints(111, 'large', 120);
            const expected = '43.8';
            assert.equal(actual, expected);
        });
        it('jump equal to K-point, should return 60', () => {
            const actual = calculateDistancePoints(120, 'large', 120);
            const expected = '60';
            assert.equal(actual, expected);
        });
    });

    describe('flying', () => {
        it('jump more than K-point, should return 134.4', () => {
            const actual = calculateDistancePoints(212, 'flying', 200);
            const expected = '150';
            assert.equal(actual, expected);
        });
        it('jump less than K-point, should return 90', () => {
            const actual = calculateDistancePoints(175, 'flying', 200);
            const expected = '90';
            assert.equal(actual, expected);
        });
        it('jump equal to K-point, should return 120', () => {
            const actual = calculateDistancePoints(200, 'flying', 200);
            const expected = '120';
            assert.equal(actual, expected);
        });
    });
    describe('return null', () => {
        it('should return null', () => {
            const actual = calculateDistancePoints(212, 'test', 200);
            const expected = null;
            assert.equal(actual, expected);
        });        
    });        
});
