const express = require('express'); //digunakan untuk memanggil library expressjs
const userRouter = require('./router/users'); //digunakan untuk memanggil router yang berada di folder/file lain
const mongoose = require('mongoose'); //digunakan untuk memanggil library mongoose
const app = express(); //satu langkah sebelum implementasi dari expressjs

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let myLogger = (req, res, next) => {
    req.time = new Date();
    next();
} //digunakan untuk middleware

app.use(myLogger); //digunakan untuk menggunakan middleware

// digunakan untuk koneksi ke database menggunakan mongoose
mongoose.connect('mongodb://localhost/trying1', {useNewUrlParser: true, useUnifiedTopology: true}); //digunakan untuk menyambungkan antara sistem ke database

const db = mongoose.connection;

db.on('error', () => console.log('connection error!')); //digunakan untuk mengembalikan pesan gagal jika koneksi ke mongodb tidak bisa
db.once('open', () => console.log('database connected')); //digunakan untuk mengembalikan pesan berhasil jika koneksi ke mongodb bisa

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
}); //route ini digunakan untuk memberikan data ke file blade template

app.get('/about', (req, res) => {
    res.render('pages/about');
}); //penggunaan dasar route yang tidak memiliki req

app.use(userRouter); //implementasi dari pemanggilan router yang berada di folder lain

app.listen(3000, function(){
    console.log('server is running...');
}); //digunakan untuk menjalankan server expressjs, parameter pertama digunakan untuk menyimpan port
