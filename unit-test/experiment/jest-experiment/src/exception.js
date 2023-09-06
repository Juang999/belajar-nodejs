class MyErrorException extends Error {

}

export const mentionName = (name) => {
    if (name != 'Juang') {
        throw new MyErrorException("Upsss, terjadi error")
    } else {
        return "OK"
    }
}

export const sumAll = (numbers) => {
    let total = 0;
    
    for (const number of numbers) {
        total += number
    }

    return total
}