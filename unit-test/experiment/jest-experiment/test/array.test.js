test("experiment test array", () => {
    let array = ["Bangkit", "Juang", "Raharjo"]

    expect(array).toContain("Juang")

    let person = [
        {
            name: "Juang"
        }, {
            name: "Budi"
        }, {
            name: "Ilahaka"
        }
    ]

    expect(person).toContainEqual({name: "Budi"})
})