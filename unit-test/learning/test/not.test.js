test("test not matcher", () => {
    let name = "Juang"

    expect(name).not.toEqual("Budi")
})

test("test not matcher number", () => {
    let total = 2 + 2

    expect(total).not.toBe(5)
})