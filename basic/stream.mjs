import fs, { write } from "fs"

const writer = fs.createWriteStream('target.log')

writer.write("Bangkit\n")
writer.write("Juang\n")
writer.write("Raharjo\n")
writer.end()

const reader = fs.createReadStream('target.log')
reader.addListener("data", (data) => {
    console.log(data.toString())
})