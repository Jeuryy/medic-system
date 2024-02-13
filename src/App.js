import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appointment from './components/Appointment';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import { nanoid } from 'nanoid';

function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <Routes>
          <Route index element={<MainPage/>}
            path="/"/>
          <Route element={<Appointment/>}
            path="agendar"/>
          <Route element={<Login/>}
              path="login"/>
          <Route element={<Register/>}
              path="registrarme"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
