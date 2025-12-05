import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css'

//pages
import Home from './Pages/Home';
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import FourOFour from './Pages/FourOFour'

//commons
import Navbar from "./Commons/Navbar";
import Footer from './Commons/Footer';

//Layout
import { DefaultLayout, BareLayout } from './Components/Layout';


function AliasRouter() {
  const { pathname } = useLocation();
  const redirectIf = (base, to) => {
    const re = new RegExp(`^/${base}[a-z0-9-]*$`, "i");
    return re.test(pathname) ? <Navigate to={`/${to}`} replace /> : null;
  };
  return (
    redirectIf("aboutme", "aboutme") ||
    redirectIf("cart", "cart") ||
    redirectIf("contactme", "contactme") ||
    redirectIf("emailsent", "emailsent") ||
    redirectIf("inventory", "inventory") ||
    redirectIf("product", pathname) ||
     <FourOFour />
  );
}




function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<BareLayout />}>
          <Route element={<LandingPage />} path='/' />
        </Route>
        <Route element={<DefaultLayout />}>
          <Route element={<About />} path='/aboutme' />
          <Route element={<Home /> } path='/inventory' />
          <Route element={<AliasRouter />} path="*" />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>

  )
}

export default App
