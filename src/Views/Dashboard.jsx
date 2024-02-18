import UserHeader from '../components/UserHeader';
import UserMenu from '../Pages/UserMenu';
import NotFound from '../components/NotFound';
import MyCard from '../components/MyCard';
import { Chart } from "react-google-charts";
import './Dashboard.css'

export default function Dashboard(props) {
    const {isLogged, setIsLogged} = props;
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
                    <p className='welcome'>Overview</p>
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
                        data={[["Usuarios", "Citas"], [15, 5]]}
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
