const express = require('express')
const app = express()

const db = require("./models")

const { User } = require("./models")

app.get('/select', (req, res) => {
    User.findAll({where: {firstName: "Juang" }})
        .then(users => {
            res.send(users)
        })
        .catch( err => {
            if (err) {
                console.log(err)
            }
        })
});

app.get('/insert', (req, res) => {
    User.create({
        firstName: "Uus",
        age: 25,
    }).catch( err => {
        if (err) {
            console.log(err)
        }
    })
    
    res.send('insert');
});

app.get('/delete', (req, res) => {
    User.destroy({where: {id: 5 }})
    
    res.send('delete');
});

db.sequelize.sync().then((req) => {
    app.listen(3000, () => {
        console.log('server is running...')
    })
})