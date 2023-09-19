import {sumAll} from "../src/sum"

test("test calculate", () => {
	const callback = jest.fn()

	sumAll([10, 10, 10], callback)
	sumAll([10, 10, 10, 10, 10], callback)

	expect(callback.mock.calls.length).toBe(2)
	expect(callback.mock.calls[0][0]).toBe(30)
	expect(callback.mock.calls[1][0]).toBe(50)
})