export const createArray = (name) => {
    return name.split(" ")
}

export const createArrayObject = (name) => {
    let splittedName = name.split(" ")
    let array = []

    for (let i = 0; i < splittedName.length; i++) {
        array.push({name: splittedName[i]})
    }

    return array
}