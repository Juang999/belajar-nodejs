class MyErrorException extends Error {

}

export const mentionName = (name) => {
    if (name != 'Juang') {
        throw new MyErrorException("Upsss, terjadi error")
    } else {
        return "OK"
    }
}