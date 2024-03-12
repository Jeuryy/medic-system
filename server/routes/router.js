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
            gender,
            documenttype,
            document,
            username,
            roll
        } = req.body;

        const userData = {id, name, lastname, email,
        password: password1, address, phone, gender,
        documenttype, document, username, roll}

        const newUser = new schemas.Users(userData);
        const saveUser = await newUser.save();

        if (saveUser) {
            res.send({message: "User added, thank you"})
        }
        res.end();
})

router.put('/users', async (req, res) => {
    const {id, name, lastname, address, 
        email, password, phone, 
        gender, documenttype, document, roll, username
    } = req.body;

    try {
        await schemas.Users.updateOne({id}, {
            $set: {
                name, 
                lastname, 
                address, 
                email, 
                password, 
                phone, 
                gender, 
                documenttype, 
                document, 
                roll, 
                username
            }
        })
        return res.json({status: "ok", data: "updated"})

    } catch (err) {
        return res.json({status: "error", data: err})
    }
})

router.delete('/users', async (req, res) => {
    const {id} = req.body;
    try {
        await schemas.Users.deleteOne({id});
        res.send({status: "Ok", data: "Deleted"});
    } catch (error) {
        console.log(error)
    }
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
        sex,
        assurance,
        address,
        email,
        phone,
        documenttype,
        document
        } = req.body;

        const citaData = {id, date, dia, service, doctor,
        name, lastname, sex, assurance,
        address, email, phone, documenttype, document}

        const newCita = new schemas.Citas(citaData);
        const saveCita = await newCita.save();

        if (saveCita) {
            res.send({message: "Cita added, thank you"})
        }
        res.end();
})
router.put('/citas', async (req, res) => {
    const {id, name, lastname, address, 
        email, phone, sex, 
        service, documenttype, document, doctor, 
        assurance, date, dia
    } = req.body;

    try {
        await schemas.Citas.updateOne({id}, {
            $set: {
                name, 
                lastname, 
                service, 
                address, 
                phone, 
                email, 
                sex, 
                documenttype,
                document, 
                doctor, assurance,
                date, 
                dia
            }
        })
        return res.json({status: "ok", data: "updated"})

    } catch (err) {
        return res.json({status: "error", data: err})
    }
})
router.delete('/citas', async (req, res) => {
    const {id} = req.body;
    try {
        await schemas.Citas.deleteOne({id});
        res.send({status: "Ok", data: "Deleted"});
    } catch (error) {
        console.log(error)
    }
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

router.put('/doctors', async (req, res) => {
    const {id, name, lastname, service, 
        schedule, phone, email, 
        gender, description
    } = req.body;

    try {
        await schemas.Doctors.updateOne({id}, {
            $set: {
                name, 
                lastname, 
                service, 
                schedule, 
                phone, 
                email, 
                gender, 
                description
            }
        })
        return res.json({status: "ok", data: "updated"})

    } catch (err) {
        return res.json({status: "error", data: err})
    }
})

router.delete('/doctors', async (req, res) => {
    const {id} = req.body;
    try {
        await schemas.Doctors.deleteOne({id});
        res.send({status: "Ok", data: "Deleted"});
    } catch (error) {
        console.log(error)
    }
})

//DIAGNOSTICOS
router.get('/diagnostics', (req, res) => {
    schemas.Diagnostics.find()
    .then(citas => res.json(citas))
    .catch(err => console.log(err))
});

router.post('/diagnostics', async (req, res) => {
    const {
        id,
        citaId,
        patient,
        doctor,
        service,
        resume,
        medicine,
        createdTime
        } = req.body;

        const diagnosticData = {id, patient, citaId, doctor,
            service, resume, medicine,
            createdTime
        }

        const newDiagnostic = new schemas.Diagnostics(diagnosticData);
        const saveDiagnostic = await newDiagnostic.save();

        if (saveDiagnostic) {
            res.send({message: "Diagnostic added, thank you"})
        }
        res.end();
})
router.put('/diagnostics', async (req, res) => {
    const {id, patient, citaId, doctor, service,
        resume, medicine, date, createdTime
    } = req.body;

    try {
        await schemas.Diagnostics.updateOne({id}, {
            $set: {
                citaId,
                patient,
                doctor,
                service,
                resume,
                medicine,
                createdTime
            }
        })
        return res.json({status: "ok", data: "updated"})

    } catch (err) {
        return res.json({status: "error", data: err})
    }
})
router.delete('/diagnostics', async (req, res) => {
    const {id} = req.body;
    try {
        await schemas.Diagnostics.deleteOne({id});
        res.send({status: "Ok", data: "Deleted"});
    } catch (error) {
        console.log(error)
    }
})



//SERVICIOS
/*router.get('/services', (req, res) => {
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
})*/

module.exports = router;