import {sumAll} from "../src/it"

it("should be 50", () => {
    expect(sumAll([10, 10, 10, 10, 10])).toBe(50)
})