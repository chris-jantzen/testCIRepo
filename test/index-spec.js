const assert = require('assert');
const calculator = require('../index');
describe('calculator', () => {
    describe('add function', () => {
        it('adds numbers', () => {
            let result = calculator.add(1, 1);
            assert.equal(result, 2);
        });
    });
    describe('subtract function', () => {
        it('subtracts numbers', () => {
            let result = calculator.sub(2, 1);
            assert.equal(result, 1);
        });
    });
    describe('multiply function', () => {
        it('multiplies numbers', () => {
            let result = calculator.mult(1, 1);
            assert.equal(result, 1);
        });
    });
});