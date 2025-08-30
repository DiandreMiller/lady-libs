import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

//pages
// @ts-ignore
import Home from './pages/Home';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home /> } path='/' />
      </Routes>
    </BrowserRouter>

  )
}

export default App
