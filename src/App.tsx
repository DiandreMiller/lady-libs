//App.tsx
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";

// Pages
import Dresses from "./Pages/Dresses.jsx";
import Home from "./Pages/Home.jsx";
import Bags from "./Pages/Bags.jsx";
import Jackets from "./Pages/Jackets.jsx";
import Jewlery from "./Pages/Jewlery.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import About from "./Pages/About.jsx";
import FourOFour from './Pages/FourOFour.jsx';
import Cart from "./Pages/Cart.jsx";
import ContactMe from "./Pages/ContactMe.jsx";
import EmailSent from "./Pages/EmailSent.jsx";
import Pants from './Pages/Pants.jsx'
import Hats from "./Pages/Hats.jsx";
import Lamps from "./Pages/Lamp.jsx";
import Mirrors from "./Pages/Mirrors.jsx";
import PrivacyPolicy from './Pages/Legal.jsx'
import Scarves from "./Pages/Scarves.jsx";
import Skirts from "./Pages/Skirts.jsx";
import Sweaters from "./Pages/Sweaters.jsx";
import TermsAndConditions from "./Pages/TermsAndConditions.jsx"; 
import Vases from "./Pages/Vases.jsx";
import WallArt from "./Pages/WallArt.jsx";


//TODO:

// Add one day christmas message to the site. Figure out what you want the message to be. Mybe it can be something with Clark.

// commons
import Navbar from "./Commons/Navbar";
// import Footer from "./Commons/Footer"; 

import { CartProvider } from "./context/CartContext";

// Layout
import { DefaultLayout, BareLayout } from "./Components/Layout";
import Tops from "./Pages/Tops.jsx";


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
    redirectIf("inventory/bags", "inventory/bags") ||
    redirectIf("inventory/dresses", "inventory/dresses") ||
    redirectIf("inventory/hats", "inventory/hats") ||
    redirectIf("inventory/jackets", "inventory/jackets") ||
    redirectIf("inventory/jewlery", "inventory/jewlery") ||
    redirectIf("inventory/lamps", "inventory/lamps") ||
    redirectIf("inventory/mirrors", "inventory/mirrors") ||
    redirectIf("inventory/pants", "inventory/pants") ||
    redirectIf("inventory/scarfs", "inventory/scarfs") ||
    redirectIf("inventory/skirts", "inventory/skirts") ||
    redirectIf("inventory/sweaters", "inventory/sweaters") ||
    redirectIf("inventory/tops", "inventory/tops") ||
    redirectIf("inventory/vases", "inventory/vases") ||
    redirectIf("inventory/wallart", "inventory/wallart") ||
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
              <Route element={<Bags />} path='/inventory/bags' />
              <Route element={<Dresses />} path='/inventory/dresses' />
              <Route element={<Hats />} path='/inventory/hats' />
              <Route element={<Jackets />} path='/inventory/jackets' />
              <Route element={<Jewlery />} path='/inventory/jewlery' />
              <Route element={<Lamps />} path='/inventory/lamps' />
              <Route element={<Mirrors />} path='/inventory/mirrors' />
              <Route element={<Pants />} path='/inventory/pants' />
              <Route element={<Scarves />} path='/inventory/scarves' />
              <Route element={<Skirts />} path='/inventory/skirts' />
              <Route element={<Sweaters />} path='/inventory/sweaters' />
              <Route element={<Tops />} path='/inventory/tops' />
              <Route element={<Vases />} path='/inventory/vases' />
              <Route element={<WallArt />} path='/inventory/wallArt' />
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