import {checkName, MyException} from "../src/exception"

test("expection unit test", () => {
    expect(() => checkName("Bangkit Juang Raharjo")).toThrow()
    expect(() => checkName("Bangkit Juang Raharjo")).toThrow(MyException)
    expect(() => checkName("Bangkit Juang Raharjo")).toThrow("upssss, nama ini telah ter banned!")
})