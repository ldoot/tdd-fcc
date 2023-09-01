const additionCalculator = require("./additionCalculator");

describe("additionCalculators test cases", () => {
  test("addition of 4 and 6 equals 10", () => {
    expect(additionCalculator(4, 6)).toBe(10);
  });

  test("addition of 10, 50, 150 and 200 equals 410", () => {
    expect(additionCalculator(10, 50, 150, 200)).toBe(410);
  });

  test("addition of 42 to equal 42", () => {
    expect(additionCalculator(42)).toBe(42);
  });

  test("addition of no parameter to equal 0", () => {
    expect(additionCalculator()).toBe(0);
  });
});
