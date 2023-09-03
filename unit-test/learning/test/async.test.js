import {asyncSayHello} from "../src/async"

test("test async", async () => {
    await expect(asyncSayHello("Bangkit Juang Raharjo")).resolves.toBe("hello Bangkit Juang Raharjo")
    await expect(asyncSayHello("Budiman Yusuf")).rejects.toBe("isn't your name!")
})