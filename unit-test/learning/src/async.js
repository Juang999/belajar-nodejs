export const asyncSayHello = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name == "Bangkit Juang Raharjo") {
                resolve(`hello ${name}`)
            } else {
                reject("isn't your name!")
            }
        }, 1000)
    })
}