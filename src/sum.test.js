import { sum } from './sum'

describe("sum", () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  });

  it('adds 2 + 3 to not equal 4', () => {
    expect(sum(2, 3)).not.toBe(4);
  });
})
