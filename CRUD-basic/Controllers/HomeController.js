const models = require('../models/index');

module.exports = {
    index: (req, res) => {
        models.User.findAll()
            .then(users => {
                res.json(users);
            })
            .catch(err => {
                console.log(err);
            });
    },
    create: (req, res) => {
        models.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        })
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.json(err);
        });
    },
    update: (req, res) => {
        models.User.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }, {where: {'id': req.params.id}})
        .then(users => {
            res.json({
                msg: 'User updated successfully'
            });
        }).catch(err => {
            res.json(err);
        });
    },
    destroy: (req, res) => {
        models.User.destroy({
            where: {
                'id': req.params.id
            }
        }).then(users => {
            res.json({
                msg: 'User deleted successfully'
            });
        }).catch(err => {
            res.json(err);
        });
    },
    show: (req, res) => {
        models.User.findOne({
            where: {
                'id': req.params.id
            }
        }).then(users => {
            res.json(users);
        }).catch(err => {
            res.json(err);
        });
    }
}