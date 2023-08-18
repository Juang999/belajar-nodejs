import {callMe} from "../src/exception"

test("exception" , () => {
    expect(() => callMe("Bangkit")).toThrow()
})