const buffer = Buffer.from("Bangkit Juang Raharjo", "utf8")

console.log(buffer.toString("base64"))

const convertToString = Buffer.from("QmFuZ2tpdCBKdWFuZyBSYWhhcmpv", "base64")

console.log(convertToString.toString("utf8"))