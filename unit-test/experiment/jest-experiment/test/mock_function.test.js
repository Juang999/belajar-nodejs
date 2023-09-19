import {calculate, calculateAll} from '../src/sum'

test('test mock function', () => {
	let callback = jest.fn()

	calculate([10, 10, 10], callback)
	calculate([10, 10, 10, 10, 10], callback)

	expect(callback.mock.calls.length).toBe(2)
	expect(callback.mock.calls[0][0]).toBe(30)
	expect(callback.mock.calls[1][0]).toBe(50)
})

test('test return value mock', () => {
	let callback = jest.fn()

	callback.mockReturnValueOnce(40)
	callback.mockReturnValueOnce(80)

	expect(calculateAll([10, 10, 10, 10], callback)).toBe(40)
	expect(calculateAll([10, 10, 10, 10, 10, 10, 10, 10], callback)).toBe(80)

	expect(callback.mock.results[0].value).toBe(40)
	expect(callback.mock.results[1].value).toBe(80)
})