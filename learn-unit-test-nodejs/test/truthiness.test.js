test("truthiness", () => {
    let value = null
    expect(value).toBeNull();
    expect(value).toBeDefined();
    expect(value).toBeFalsy();

    value = undefined
    expect(value).toBeUndefined();
    expect(value).toBeFalsy();

    value = 'Juang'
    expect(value).toBeTruthy();
    expect(value).toBe("Juang");
})