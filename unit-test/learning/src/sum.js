export const sum = (first, second) => {
    return first + second
}

export const sumAll = (numbers, callback) => {
    let total = 0
    for (let number of numbers) {
        total += number
    }

    callback(total, 'Juang')
}

export const calculateAndReturn = (numbers, callback) => {
    let total = 0
    for (let number of numbers) {
        total += number
    }

    return callback(total)
}