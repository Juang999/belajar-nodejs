import {truthiness} from "../src/truthiness"

test("test truthiness from jest", () => {
    expect(truthiness("Bangkit Juang Raharjo")).toBeTruthy()
    expect(truthiness("Budiman Sudjatmiko")).toBeFalsy()
})

test("test null from jest", () => {
    expect(truthiness("Agus Mawang")).toBeNull()
    expect(truthiness("Zahra")).toBeUndefined()
    expect(truthiness("Bangkit Juang Raharjo")).toBeDefined()
})