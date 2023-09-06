import {callMe, summary} from "../src/exception"

test("exception", () => {
    expect(() => callMe("Juang")).toThrow()
})

test("receive OK return", () => {
    expect(callMe("Budi")).toBe("OK")
    expect(summary(5, 5)).toBe('OK')
})

test("summary test", () => {
    expect(() => summary(10, 5)).toThrow()
})