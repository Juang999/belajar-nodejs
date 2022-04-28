const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/tutorial', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', function() {
    console.log('connection error');
});

db.once('open', function() {
    console.log('connected!');
});

const kelasSchema = new Schema({
    judul: String,
    deskripsi: String,
    tglPosting: {
        type: Date,
        default: Date.now
    }
});

const Kelas = mongoose.model('kelas', kelasSchema);
// Kelas.insertMany([
//     { judul: 'judul a',deskripsi: 'ini desk judul a' },
//     { judul: 'judul b',deskripsi: 'ini desk judul b' }
// ], (err, data) => {
//     if(err) return handleError(err);
//     console.log(data);
//     console.log('data created!!');
// })

// Kelas.create({
//     judul: 'hari yang melelahkan',
//     deskripsi: 'ga ada desk, cuma hari condition
//     if (err) return handleError(err);
//     console.log(data);
//     console.log('data created');
// });

// const nodejs = new Kelas({
//     judul: 'nodejs',
//     deskripsi: 'javascript runtime',
// });

// nodejs.save((err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//     console.log('data created!');
// });

// Kelas.find({judul: 'judul a', deskripsi: 'ini desk judul a'}, (err, data) => {
//     if (err) return handleError(err);
//     console.log(data);
//     console.log('successfully get data!');
// });

// Kelas.findOne({judul: 'judul a', deskripsi: 'ini desk judul a'}, (err, data) => {
//     if (err) return handleError(err);
//     console.log(data),
//     console.log('successfully get data');
// });

// Kelas.deleteMany({judul: 'judul a', deskripsi: 'ini desk judul a'}, (err) => {
//     if (err) return handleError(err);
//     console.log('data deleted!');
// });

// await Kelas.findById('6267b0ac42046e9355690b5e').exec();

Kelas.findOneAndUpdate('6267b0ac42046e9355690b5e', {deskripsi: 'ini desk judul b'}, (err, data) => {
    if (err) return handleError(err);
    console.log(data);
    console.log('data updated!');
});

// Kelas.findOne('6267b0ac42046e9355690b5e', (err, data) => {
//     if (err) return handleError(err);
//     console.log(data);
// });

// console.log('hello world');