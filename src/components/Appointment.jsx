import './Appointment.css'
import { MdAccountCircle } from "react-icons/md";
import cmdm from '../assets/img/cmdm.png'
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function Appointment(){
    const currencies = [
            {
                value: 'General',
                label: 'General'
            },
            {
            value: 'USD',
            label: '$',
            },
            {
            value: 'EUR',
            label: '€',
            },
            {
            value: 'BTC',
            label: '฿',
            },
            {
            value: 'JPY',
            label: '¥',
            },
        ];
    const doctores = [
            {
                value: 'Dr Jhon Doe',
                label: 'Dr Jhon Doe'
            },
            {
            value: 'USD',
            label: '$',
            },
            {
            value: 'EUR',
            label: '€',
            },
            {
            value: 'BTC',
            label: '฿',
            },
            {
            value: 'JPY',
            label: '¥',
            },
    ];
    return(
        <div className='appointment-container'>
            <div className='appointment-header'>
                <Link to="/" className='goback'><IoMdArrowBack/></Link>
                <div className='img-container'>
                    <a href='#'><img src={cmdm}/></a>
                </div>
            </div>
            <img className="cmdm-logo" src={cmdm} alt='Logo de Centro Medico Divina Misericordia'/>
            <div className='form-container'>
                <form>
                    <TextField id="standard-basic" label="Nombre" variant="standard"/>
                    <TextField id="standard-basic" label="Apellido" variant="standard" />
                    <TextField id="standard-basic" label="Direccción" variant="standard" />
                    <TextField id="standard-basic" label="Correo electrónico" variant="standard" />
                    <TextField id="standard-basic" label="Número de telefono" variant="standard"/>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Sexo"
                        defaultValue="General"
                    >
                        {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Tipo de consulta"
                        defaultValue="General"
                    >
                        {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-dr"
                        select
                        label="Doctor"
                        defaultValue="Dr Jhon Doe"
                    >
                        {doctores.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                    <TextField id="standard-basic" label="" variant="standard" type='date'/>
                    <TextField
                        id="outlined-select-dr"
                        select
                        label="Fecha para la cita"
                        defaultValue="Dr Jhon Doe"
                        helperText="Seleccione una fecha para su cita"
                    >
                        {doctores.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                </form>
            </div>
        </div>
    )

}