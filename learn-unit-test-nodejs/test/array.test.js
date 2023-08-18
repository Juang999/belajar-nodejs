test("array test", () => {
    const name = ["Bangkit", "Juang", "Raharjo"]
    expect(name).toEqual(["Bangkit", "Juang", "Raharjo"])
    expect(name).toContain("Juang")
})

test("object test", () => {
    const person = [
        {
            name: "Juang"
        },
        {
            name: "Mujahid"
        },
        {
            name: "Latami"
        }
    ]

    expect(person).toContainEqual({name: "Juang"})
})