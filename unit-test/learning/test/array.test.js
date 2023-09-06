test("array test for unit test", () => {
    let array = [
        "Bangkit",
        "Juang",
        "Raharjo"
    ]

    expect(array).toContain("Juang")

    let object = [
        {firstName: "Bangkit"},
        {middleName: "Juang"},
        {lastName: "Raharjo"}
    ]

    expect(object).toContainEqual({middleName: "Juang"})
})