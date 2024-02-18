const express = require("express");
const router = express.Router();
const schemas = require('../models/schemas')

router.get('/users', (req, res) => {
    schemas.Users.find()
    .then(users => res.json(users))
    .catch(err => console.log(err))
});

router.post('/users', async (req, res) => {
    const {
            id,
            name,
            lastname,
            address,
            email,
            password1,
            password2,
            phone,
            sex,
            documenttype,
            document,
            username,
            roll
        } = req.body;

        const userData = {id, name, lastname, email,
        password: password1, address, phone, gender:sex,
        documenttype, document, username, roll}

        const newUser = new schemas.Users(userData);
        const saveUser = await newUser.save();

        if (saveUser) {
            res.send({message: "User added, thank you"})
        }
        res.end();
})

module.exports = router;