export class MyException extends Error {

}

export const checkName = (name) => {
    if (name == "Bangkit Juang Raharjo") {
        throw new MyException("upssss, nama ini telah ter banned!")
    } else {
        return "OK"
    }
}