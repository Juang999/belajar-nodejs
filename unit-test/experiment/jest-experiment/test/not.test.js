test("test for not function", () => {
    let total = 5 + 5

    let name = "Bangkit Juang Raharjo"

    let object = {
        id: "BJR",
        name: "Bangkit Juang Raharjo"
    }

    // expect(total).not.toBe(11)
    // expect(total).not.toEqual(15)

    expect(name).not.toMatch(/Budi/)
    expect(object).not.toEqual({name: "Budiawan Saputra"})
})