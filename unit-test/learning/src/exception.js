class MyException extends Error {

}

export const callMe = (name) => {
    if (name === "Juang") {
        throw new MyException("Ups, my exception happens")
    } else {
        return "OK"
    }
}

export const summary = (firstValue, secondValue) => {
    let total = firstValue + secondValue
    
    if (total != 10) {
        throw new MyException("Ups, terjadi error")
    } else {
        return "OK"
    }
}