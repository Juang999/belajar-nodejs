test("string", () => {
    const name = "Bangkit Juang Raharjo"

    expect(name).toBe("Bangkit Juang Raharjo")
    expect(name).toMatch(/Juang/)
})