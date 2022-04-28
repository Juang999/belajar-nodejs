const { v4: uuidv4 } = require('uuid');

let users = [
    { id: 1, name: 'Bangkit Juang Raharjo', email: 'juangraharjo03@gmail.com' },
    { id: 2, name: 'Muhammad Mujahid Muslim', email: 'mujahid666@gmail.com' }
];

module.exports = {
    index: (req, res) => {
        // if (users.length > 0) {
        //     res.json({
        //         status: true,
        //         data: users,
        //         method: req.method,
        //         url: req.url
        //     });
        // } else {
        //     res.json({
        //         status: false,
        //         message: "data not found!",
        //     });
        // }

        try {
            res.render('pages/users/index', {users});
        } catch (error) {
            res.redirect('/');
        }
    },
    create: (req, res) => {
        res.render('pages/users/create');
    },
    store: (req, res) => {
        // users.push(req.body);
        // res.json({
        //     status: true,
        //     data: req.body,
        //     message: 'successfully added data',
        //     method: req.method,
        //     url: req.url
        // });
        try {
            users.push({
                id: uuidv4(),
                name: req.body.name,
                email: req.body.email
            });
            res.redirect('/users');
        } catch (error) {
            console.log('error!');
        }
    },
    update: (req, res) => {
        const id = req.params.id;

        users.filter(user => {
            if (user.id == id) {
                user.id = id;
                user.name = req.body.name;
                user.email = req.body.email;
            }
        });

        let pengguna = users.filter(user => user.id == id);

        res.json({
            status: true,
            data: pengguna,
            message: 'successfully updated data',
            method: req.method,
            url: req.url
        });
    },
    show: (req, res) => {
        let id = req.params.id;
    
        let pengguna = users.filter(user => user.id == id);
    
        // res.json(pengguna);
        // console.log(pengguna);
        res.render('pages/users/detail', {pengguna});
    },
    destroy: (req, res) => {
        const id = req.params.id;
    
        users = users.filter(user => user.id != id);
    
        res.json(users);
    }
}