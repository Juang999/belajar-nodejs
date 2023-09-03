import {createArray, createArrayObject} from "../src/array"

test("array unit test", () => {
    let array = createArray("Bangkit Juang Raharjo")

    expect(array).toContain("Juang")
})

test("array object unit test", () => {
    let array = createArrayObject("Budiman Sudjatmiko")

    expect(array).toContainEqual({name: "Sudjatmiko"})
})