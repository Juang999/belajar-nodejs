import {asyncSayHello} from "../src/async"

test.concurrent("test concurrent 1", () => {
    expect(asyncSayHello("Bangkit Juang Raharjo")).resolves.toBe("hello Bangkit Juang Raharjo")
})

test.concurrent("test concurrent 2", () => {
    expect(asyncSayHello("Bangkit Juang Raharjo")).resolves.toBe("hello Bangkit Juang Raharjo")
})

test.concurrent("test concurrent 3", () => {
    expect(asyncSayHello("Bangkit Juang Raharjo")).resolves.toBe("hello Bangkit Juang Raharjo")
})