export const toBe = (name) => {
    return `Hello, my name is ${name}`
}

export const isEqual = (name) => {
    let array = name.split(" ")
    
    let contraction = []
    
    for (let index = 0; index < array.length; index++) {
        contraction.push(array[index][0])
    }

    return {
        id: contraction.join(''),
        name: name
    }
}