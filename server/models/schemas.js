const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {type: String},
    name: {type: String},
    lastname: {type: String},
    email: {type: String},
    password: {type: String},
    address: {type: String},
    phone: {type: String},
    gender: {type: String},
    documenttype: {type: String},
    document: {type: String},
    username: {type: String},
    roll: {type: String},
    entryData: {type: Date, default:Date.now}
});

const citaSchema = new Schema ({
    id: {type: String},
    date: {type: String},
    dia: {type: String},
    service: {type: String},
    doctor: {type: String},
    name: {type: String},
    lastname: {type: String},
    sex: {type: String},
    assurance: {type: String},
    address: {type: String},
    email: {type: String},
    phone: {type: String},
    documenttype: {type: String},
    document: {type: String},
    createdTime: {type: Date, default: Date.now}
});

const doctorSchema = new Schema ({
    id: {type: String},
    name: {type: String},
    lastname: {type: String},
    service: {type: String},
    schedule: {type: String},
    phone: {type: String},
    email: {type: String},
    gender: {type: String},
    description: {type: String},
    createdTime: {type: Date, default: Date.now}
});
const serviceSchema = new Schema ({
    id: {type: String},
    service: {type: String},
    description: {type: String},
    doctors: {type: String},
    schedules: {type: String},
    createdTime: {type: Date, default: Date.now}
});
const diagnosticSchema = new Schema ({
    id: {type: String},
    citaId: {type: String},
    doctor: {type: String},
    service: {type: String},
    resume: {type: String},
    medicine: {type: String},
    date: {type: String},
    createdTime: {type: Date, default: Date.now}
});
const Users = mongoose.model('Users', userSchema, 'users');
const Citas = mongoose.model('Citas', citaSchema, "citas");
const Doctors = mongoose.model('Doctors', doctorSchema, "doctors");
const Services = mongoose.model('Services', serviceSchema, 'services');
const Diagnostics = mongoose.model('Diagnostics', diagnosticSchema, 'diagnostics');
const mySchemas = {'Users':Users, 
                    'Citas':Citas, 
                    'Doctors':Doctors, 
                    'Services':Services, 
                    'Diagnostics':Diagnostics}

module.exports = mySchemas;