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
        dia,
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

        const citaData = {id, date, dia, service, doctor,
        name, lastname, gender, assurance,
        address, email, phone}

        const newCita = new schemas.Citas(citaData);
        const saveCita = await newCita.save();

        if (saveCita) {
            res.send({message: "Cita added, thank you"})
        }
        res.end();
})

//DOCTORES
router.get('/doctors', (req, res) => {
    schemas.Doctors.find()
    .then(doctors => res.json(doctors))
    .catch(err => console.log(err))
});

router.post('/doctors', async (req, res) => {
    const {
        id,
        name,
        lastname,
        service,
        schedule,
        phone,
        email,
        gender,
        description
        } = req.body;

        const doctorData = {id, name, lastname, service, schedule,
        gender, email, phone, description}

        const newDoctor = new schemas.Doctors(doctorData);
        const saveDoctor = await newDoctor.save();

        if (saveDoctor) {
            res.send({message: "Doctor added, thank you"})
        }
        res.end();
})

//SERVICIOS
router.get('/services', (req, res) => {
    schemas.Services.find()
    .then(services => res.json(services))
    .catch(err => console.log(err))
});

router.post('/services', async (req, res) => {
    const {
        id,
        service,
        description,
        doctors,
        schedules
        } = req.body;

        const serviceData = {id, service, schedules,
        doctors, description}

        const newService = new schemas.Services(serviceData);
        const saveService = await newService.save();

        if (saveService) {
            res.send({message: "Service added, thank you"})
        }
        res.end();
})

module.exports = router;