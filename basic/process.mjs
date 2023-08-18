import process from 'process'

process.addListener('exit', exitCode => {
    console.log(`exit code ${exitCode}`)
})

console.log(process.version)
console.table(process.env)