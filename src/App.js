import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import Appointment from './Pages/Appointment';
import MainPage from './components/MainPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NotFound from './components/NotFound';
import Dashboard from './Views/Dashboard';
import Citas from './Views/Citas';
import Doctors from './Views/Doctors';
import Users from './Views/Users';
import UserServices from './Views/UserServices';
import AddDoctor from './Views/AddDoctor';
import AddServices from './Views/AddServices';
import Diagnostics from './Views/Diagnostics';
import Profile from './Views/Profile';
import EditUser from './EditViews/EditUser';
import EditDoctor from './EditViews/EditDoctor';
import { IdleTimerProvider as IdleTimer} from 'react-idle-timer';
import useNavigatorOnline from "use-navigator-online";
import { Alert } from '@mui/material';
import Buscar from './Pages/Buscar';
import EditAppointment from './EditViews/EditAppointment';
import History from './Pages/History';
import AddDiagnostic from './Views/AddDiagnostic';


function App() {
  const[isLogged, setIsLogged] = useState(localStorage.getItem("isLogged") || false);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || "");
  const { isOnline, isOffline, backOnline, backOffline } = useNavigatorOnline();
  const [connection, setConnection]= useState('')

  const handleIdle = () => {
    setIsLogged(false)
    localStorage.removeItem("isLogged")
    localStorage.removeItem("currentUser")
  }


  useEffect(() => {
    if (backOnline) {
      setConnection(<Alert variant="filled" severity="success">
      Conexión reestablecida!
      </Alert>)
    }
    else if (isOffline || backOffline) {
        setConnection(
          <Alert variant="filled" severity="error">
          Se ha perdido la conexión!
        </Alert>)
    }
    setTimeout(() => {
      setConnection('');
    }, 5000)

  }, [backOnline]);


  return (
    <BrowserRouter>
      <div className="App">
        {connection}
        <Routes>
          <Route index element={<MainPage isLogged={isLogged} setIsLogged={setIsLogged}/>}
            path="/"/>
          <Route element={<Appointment isLogged={isLogged} setIsLogged={setIsLogged}/>}
            path="agendar"/>
          <Route element={<Login isLogged={isLogged} setIsLogged={setIsLogged} currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
              path="Login"/>
              <Route element={<Profile isLogged={isLogged} setIsLogged={setIsLogged} currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
              path="Profile"/>
          <Route element={<Register isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path="registrar"/>
              <Route element={<Dashboard isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path='dashboard'/>
              <Route element={<Citas isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path='citas'/>
              <Route element={<Doctors isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path='doctors'/>
              <Route element={<Users isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path='users'/>
              <Route element={<UserServices isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path='services'/>
              <Route element={<AddDoctor isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path="addDoctor"/>
              <Route element={<AddServices isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path="addServices"/>
              <Route element={<Diagnostics isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path="diagnostics"/>
              <Route element={<EditUser isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path='edit-user'/>
              <Route element={<EditDoctor isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path='edit-doctor'/>
              <Route element={<EditAppointment isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path='edit-appointment'/>
              <Route element={<Buscar isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path='buscar'/>
              <Route element={<History isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path='mi-informacion'/>
              <Route element={<AddDiagnostic isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path='add-diagnostic'/>
              <Route element={<NotFound isLogged={isLogged} setIsLogged={setIsLogged}/>}
              path='*'/>
        </Routes>
        <IdleTimer 
          timeout={3600000}
          onIdle={handleIdle}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
