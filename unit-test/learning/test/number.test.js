test("unit test for number", () => {
    let total = 2 + 2

    expect(total).toBeGreaterThan(3)
    expect(total).toBeGreaterThanOrEqual(4)

    expect(total).toBeLessThan(5)
    expect(total).toBeLessThanOrEqual(4)

})