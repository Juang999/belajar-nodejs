import {toBe, isEqual} from "../src/equal"

test('test toBe from jest', () => {
    let name = 'Bangkit Juang Raharjo'

    expect(toBe(name)).toBe(`Hello, my name is ${name}`)
})

test('test equal function from jest', () => {
    let result = {
        id: "BJR",
        name: "Bangkit Juang Raharjo"
    }

    expect(isEqual(result.name)).toEqual(result)
})