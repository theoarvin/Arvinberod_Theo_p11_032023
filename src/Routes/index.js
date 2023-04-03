import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import Lodging from '../pages/Lodging';
import logement from '../logement.json';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';

const Index = () => {
    return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home value={logement}/>} />
          <Route path='/a-propos' element={<About />}  />
          <Route path='/logement/:id' element={<Lodging value={logement}/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
    </BrowserRouter>
    );
};

export default Index;