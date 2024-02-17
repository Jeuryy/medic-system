const express = require("express");
const router = express.Router();

router.get('/users', (req, res) => {
    const userData =
    { "users": [
        {
            "id": "1",
            "name": "Jeury",
            "lastname": "Pierre Dide",
            "address": "C/ Felix Abreu #17 Bienvenido Manoguayabo",
            "email": "elyruej.102004@gmail.com",
            "password": "password1",
            "phone": "8299851200",
            "gender": "Hombre",
            "documenttype": "cedula",
            "document" :"40233365150",
            "roll": 1,
            "username": "jeurydide"
        },
        {
            "id": "1",
            "name": "Jeury",
            "lastname": "Pierre Dide",
            "address": "C/ Felix Abreu #17 Bienvenido Manoguayabo",
            "email": "elyruej.102004@gmail.com",
            "password": "password1",
            "phone": "8299851200",
            "gender": "Hombre",
            "documenttype": "cedula",
            "document" :"40233365150",
            "roll": 1,
            "username": "jeurydide"
        },
        {
            "id": "1",
            "name": "Jeury",
            "lastname": "Pierre Dide",
            "address": "C/ Felix Abreu #17 Bienvenido Manoguayabo",
            "email": "elyruej.102004@gmail.com",
            "password": "password1",
            "phone": "8299851200",
            "gender": "Hombre",
            "documenttype": "cedula",
            "document" :"40233365150",
            "roll": 1,
            "username": "jeurydide"
        }
    ]}
    res.send(userData);
});

router.post('/users', (req, res) => {
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
            username
        } = req.body;

        console.log(id, name, lastname,
            address,
            email,
            password1,
            password2,
            phone,
            sex,
            documenttype,
            document, username);
        
        res.send({message: "User added, thank you"})
})

module.exports = router;