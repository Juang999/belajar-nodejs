const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());

const users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        console.log(salt);
        console.log(hashPassword);
        const user = {name: req.body.name, password: hashPassword};
        users.push(user);
        res.status(201).send();
    } catch (error) {
        res.status(500).json(error);
    }
});

app.listen(3001, () => {
    console.log('server running at (http://localhost:3001)');
});