test('test toBe', () => {
    let name = "Juang"
    let sayHello = `Hello ${name}`

    expect(sayHello).toBe('Hello Juang')
})

test('test toEqual', () => {
    let person = {id: 1}
    Object.assign(person, {name: "Bangkit Juang Raharjo"})

    expect(person).toEqual({id: 1, name: "Bangkit Juang Raharjo"})
})