import {sayHello, name} from "../src/string"

test('test say hello', () => {
    expect(sayHello("Juang")).toBe("Hello Juang")
})

test("experiment test name", () => {
    let fullName = "Bangkit Juang Raharjo"

    expect(name(fullName)).toBe(fullName)
    expect(name(fullName)).toEqual(fullName)
    expect(name(fullName)).toMatch(/Juang/)
})