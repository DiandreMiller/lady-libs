import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";

// pages
import Home from "./Pages/Home.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import About from "./Pages/About.jsx";
import FourOFour from './Pages/FourOFour.jsx';
import Cart from "./Pages/Cart.jsx";

// commons
import Navbar from "./Commons/Navbar";
// import Footer from "./Commons/Footer"; 

import { CartProvider } from "./context/CartContext";

// Layout
import { DefaultLayout, BareLayout } from "./Components/Layout";

function AliasRouter() {
  const { pathname } = useLocation();

  const redirectIf = (base: string, to: string) => {
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
      <CartProvider>
        <Navbar />
        <Routes>
          {/* Landing pages WITHOUT default layout */}
          <Route element={<BareLayout />}>
            <Route element={<LandingPage />} path="/" />
          </Route>

          {/* Everything else WITH default layout */}
          <Route element={<DefaultLayout />}>
            <Route element={<About />} path="/aboutme" />
            <Route element={<Cart />} path='/cart' />
            <Route element={<Home />} path="/inventory" />
            <Route element={<AliasRouter />} path="*" />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;