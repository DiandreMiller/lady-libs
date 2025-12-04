import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

//pages
import Home from './Pages/Home';
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";

//commons
import Navbar from "./Commons/Navbar";
import Footer from './Commons/Footer';




function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<LandingPage />} path='/' />
        <Route element={<About />} path='/aboutme' />
        <Route element={<Home /> } path='/inventory' />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
