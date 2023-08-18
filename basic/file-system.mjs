import fs from "fs"

const writer = fs.createWriteStream("error.log")

writer.write("Hello")
writer.write("Bangkit")
writer.write("Juang")
writer.write("Raharjo")

writer.end()