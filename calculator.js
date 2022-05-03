class Calculator {
  add(...numbers) {

    if (numbers.length < 2) {
      throw new Error();
    }

    return numbers.reduce((a, b) => a + b, 0);
  }

  multiply(...numbers) {
    if (numbers.length < 2) {
      throw new Error();
    }

    return numbers.reduce((a, b) => a * b, 1);
  }

  subtract(...numbers) {
    if (numbers.length != 2) {
      throw new Error();
    }

    return numbers[0] - numbers[1];
  }

  divide(...numbers) {
    if (numbers.length != 2) {
      throw new Error();
    }

    return numbers[0] / numbers[1];
  }
}

module.exports = Calculator;