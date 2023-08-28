import {addition} from "../src/number"

test("experiment test greater than", () => {
    expect(addition(1, 3)).toBeGreaterThan(3)
    expect(addition(1, 3)).toBeGreaterThanOrEqual(4)
})

test("experiment test less than", () => {
    expect(addition(2, 3)).toBeLessThan(6)
    expect(addition(2, 3)).toBeLessThanOrEqual(5)
})