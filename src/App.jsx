import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

//pages
import Home from './Pages/Home';
import Navbar from "./Commons/Navbar";
import Footer from './Commons/Footer'




function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home /> } path='/' />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
