const express = require("express");
const router = express.Router();
const schemas = require('../models/schemas')


//USUARIOS
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

//CITAS
router.get('/citas', (req, res) => {
    schemas.Citas.find()
    .then(citas => res.json(citas))
    .catch(err => console.log(err))
});

router.post('/citas', async (req, res) => {
    const {
        id,
        date,
        service,
        doctor,
        name,
        lastname,
        gender,
        assurance,
        address,
        email,
        phone
        } = req.body;

        const citaData = {id, date, service, doctor,
        name, lastname, gender, assurance,
        address, email, phone}

        const newCita = new schemas.Citas(citaData);
        const saveCita = await newCita.save();

        if (saveCita) {
            res.send({message: "Cita added, thank you"})
        }
        res.end();
})

module.exports = router;