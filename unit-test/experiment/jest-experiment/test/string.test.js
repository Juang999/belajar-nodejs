import {sayHello} from "../src/string"

test('test say hello', () => {
    expect(sayHello("Juang")).toBe("Hello Juang")
})