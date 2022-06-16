const express = require('express');
const app = express();

const posts = [
    {
        username: 'Juang',
        title: 'Post 1'
    },{
        username: 'Doni',
        title: 'Post 2'
    }
]

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/login', (req, res) => {
    // authenticate user
})

app.listen(3000, () => {
    console.log('server running at (http://localhost:3000)');
})