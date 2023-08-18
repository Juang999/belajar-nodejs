export class MyException extends Error {
    
}

export const callMe = (name) => {
    console.log(name)
    if (name === "Juang") {
        throw new MyException("Hello world")
    } else {
        return "OKAY"
    }
}