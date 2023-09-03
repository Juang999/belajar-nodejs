test("number unit test greater than", () => {
    expect(5).toBeGreaterThan(4)
    expect(5).toBeGreaterThanOrEqual(5)
})

test("number unit test less than", () => {
    expect(5).toBeLessThan(6)
    expect(5).toBeLessThanOrEqual(5)
})

test("number unit test equal", () => {
    let number = 5

    expect(number).toBe(5)
    expect(number).toEqual(5)
})