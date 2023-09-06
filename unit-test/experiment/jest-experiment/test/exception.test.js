import {mentionName, sumAll} from "../src/exception"

test("my experiment exception", () => {
    expect(() => mentionName("Budi")).toThrow()
})

test("receive OK return", () => {
    expect(mentionName("Juang")).toBe("OK")
})

test("sumAll function must be 50", () => {
    expect(sumAll([10, 10, 10, 10, 10])).toBe(50)
})