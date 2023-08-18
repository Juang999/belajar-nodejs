test('test number', () => {
    let total = 2 + 2
    expect(total).toBeGreaterThan(3)
    expect(total).toBeGreaterThanOrEqual(3.5)
    expect(total).toBeLessThan(5)
    expect(total).toBeLessThanOrEqual(4.5)

    expect(total).toBe(4)
    expect(total).toEqual(4)
})