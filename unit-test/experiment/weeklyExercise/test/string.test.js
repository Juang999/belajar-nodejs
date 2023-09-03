test("string unit test", () => {
    let name = 'Bangkit Juang Raharjo'

    expect(name).toBe("Bangkit Juang Raharjo")
    expect(name).toEqual("Bangkit Juang Raharjo")
    expect(name).toMatch(/Juang/)
})