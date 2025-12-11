import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";

// pages
import Dresses from "./Pages/Dresses.jsx";
import Home from "./Pages/Home.jsx";
import Jackets from "./Pages/Jackets.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import About from "./Pages/About.jsx";
import FourOFour from './Pages/FourOFour.jsx';
import Cart from "./Pages/Cart.jsx";
import ContactMe from "./Pages/ContactMe.jsx";
import EmailSent from "./Pages/EmailSent.jsx";
import PrivacyPolicy from './Pages/Legal.jsx'
import Skirts from "./Pages/Skirts.jsx";
import TermsAndConditions from "./Pages/TermsAndConditions.jsx"; 


//TODO: Fix names around items

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
    redirectIf("inventory/dresses", "inventory/dresses") ||
    redirectIf("inventory/jackets", "inventory/jackets") ||
    redirectIf("inventory/skirts", "inventory/skirts") ||
    redirectIf("privacy", "privacy") ||
    redirectIf("terms", "terms") ||
    redirectIf("product", pathname) ||
    <FourOFour />
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <div className="pt-24 sm:pt-20">
          <Routes>
            {/* Landing pages WITHOUT default layout */}
            <Route element={<BareLayout />}>
              <Route element={<LandingPage />} path="/" />
            </Route>

            {/* Everything else WITH default layout */}
            <Route element={<DefaultLayout />}>
              <Route element={<About />} path="/aboutme" />
              <Route element={<Cart />} path='/cart' />
              <Route element={<ContactMe />} path='/contactme' />
              <Route element={<Home />} path="/inventory" />
              <Route element={<Dresses />} path='/inventory/dresses' />
              <Route element={<Jackets />} path='/inventory/jackets' />
              <Route element={<Skirts />} path='/inventory/skirts' />
              <Route element={<EmailSent />} path='/emailsent' />
              <Route element={<PrivacyPolicy />} path='/privacy' />
              <Route element={<TermsAndConditions />} path="/terms" />
              <Route element={<AliasRouter />} path="*" />
            </Route>
          </Routes>
        </div>
        {/* <Footer /> */}
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;