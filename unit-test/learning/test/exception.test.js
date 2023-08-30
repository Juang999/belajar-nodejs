import {callMe, summary} from "../src/exception"

test("exception", () => {
    expect(() => summary(10, 5)).toThrow()
})