import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  const[isLogged, setIsLogged] = useState(localStorage.getItem("isLogged") || false);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || "");
  

  return (
    <BrowserRouter>

      <div className="App">
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
              path="Diagnostics"/>
              <Route element={<NotFound/>}
              path='*'/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
