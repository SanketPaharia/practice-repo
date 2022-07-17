import calculation from "./tax_calculator"


test ('tax_calculation test', () => {
  expect(calculation (200000)).toBe(0);
});

test ('tax_calculation test', () => {
  expect(calculation (1100000)).toBe(315000);
});