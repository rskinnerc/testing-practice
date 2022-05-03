const Calculator = require('../calculator')

let calculator = new Calculator();

describe('The calculator class', () => {
  it('receives at least two numbers', () => {
    expect(() => calculator.add(3)).toThrow();
  })

  it('adds two numbers', () => {
    expect(calculator.add(3, 2)).toBe(5);
  })

  it('adds three numbers', () => {
    expect(calculator.add(3, 2, 7)).toBe(12);
  })

  it('receives at least two numbers', () => {
    expect(() => calculator.multiply(3)).toThrow();
  })

  it('multiplies two numbers', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
  })

  it('multiplies three numbers', () => {
    expect(calculator.multiply(3, 2, 7)).toBe(42);
  })

  it('multiplies three numbers, including a zero returning 0', () => {
    expect(calculator.multiply(3, 2, 0)).toBe(0);
  })

  test('the subtract method to receive exactly two numbers', () => {
    expect(() => calculator.subtract(3)).toThrow();
    expect(() => calculator.subtract(3, 5, 3)).toThrow();
    expect(() => calculator.subtract(3, 5)).not.toThrow();
  })

  it('calculates 3 - 1 and returns 2', () => {
    expect(calculator.subtract(3, 1)).toBe(2);
  })

  it('calculates 10 - 5 to be 5', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
  })

  test('the divide method to receive exactly two numbers', () => {
    expect(() => calculator.divide(3)).toThrow();
    expect(() => calculator.divide(3, 5, 3)).toThrow();
    expect(() => calculator.divide(3, 5)).not.toThrow();
  })

  it('calculates 3 / 1 and returns 3', () => {
    expect(calculator.divide(3, 1)).toBe(3);
  })

  it('calculates 10 / 5 to be 2', () => {
    expect(calculator.divide(10, 5)).toBe(2);
  })
});