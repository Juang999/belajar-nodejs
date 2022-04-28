const express = require('express');
const userRouter = require('./router/users'); //digunakan untuk memanggil router yang berada di folder/file lain
const mongoose = require('mongoose');
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// untuk membuat middleware
let myLogger = (req, res, next) => {
    req.time = new Date();
    next();
}
app.use(myLogger);

// digunakan untuk koneksi ke database menggunakan mongoose
mongoose.connect('mongodb://localhost/trying1', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', () => console.log('connection error!'));
db.once('open', () => console.log('database connected'));

app.set('view engine', 'ejs'); //digunakan untuk memanggil template engine pada expressjs 

app.use('/asset', express.static('public')); //digunakan untuk me-load file yang berada di folder public

app.get('/', function(req, res) {
    const kelas = {
        id: 1,
        nama: 'javascript',
        date: req.time.toString(),
    };
    // console.log('hello world');
    res.render('pages/index', {kelas: kelas});
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.use(userRouter); //implementasi dari pemanggilan router yang berada di folder lain

app.listen(3000, function(){
    console.log('server is running...');
});
