import UserHeader from '../components/UserHeader';
import UserMenu from '../Pages/UserMenu';
import NotFound from '../components/NotFound';
import MyCard from '../components/MyCard';
import { Chart } from "react-google-charts";
import './Dashboard.css'
import { useState, useEffect } from 'react';

export default function Dashboard(props) {
    const {isLogged, setIsLogged} = props;
    const [users, setUsers] = useState([]);
    const [citas, setCitas] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
        .catch(err => console.log(err))
    }, []);
    useEffect(()=> {
        fetch("http://localhost:5000/citas")
        .then(res => res.json())
        .then(data => {
            setCitas(data)
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <div className='dashboard-container'>
        {isLogged ? (
            <div className='profile-container'>
                <div className='dashboard'>
                    <UserMenu/>
                </div>
                <div className='profile-content'>
                    <UserHeader/>
                    <div></div>
                    <p className='welcome'>Vista general</p>
                    <div className='cards'>
                        <MyCard title="Mi perfil" text="Ir a configuracion del perfil" link="/Profile"/>
                        <MyCard title="Usuarios" text="Administrar usuarios" link="/Users"/>
                        <MyCard title="Citas" text="Administrar citas" link="/Citas"/>
                        <MyCard title="Doctores" text="Administrar doctores" link="/Doctors"/>
                        <MyCard title="Services" text="Especialidades y servicios" link="/Services"/>
                        <MyCard title="Diagnosticos" text="Ver diagnosticos" link="/Diagnostics"/>
                    </div>
                    <Chart
                        chartType="ScatterChart"
                        data={[["Citas", "Usuarios"], [citas.length, users.length]]}
                        width="100%"
                        height="400px"
                        legendToggle
                        />
                </div>
            </div>)
        : (
            <NotFound/>
            )}
        </div>
        
    );
}
