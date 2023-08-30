import {mentionName} from "../src/exception"

test("my experiment exception", () => {
    expect(() => mentionName("Budi")).toThrow()
})