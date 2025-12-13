import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import LadyLibsLogo from "../assets/LadyLibsImages/LadyLibsLogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/inventory" },
    { label: "About Me", to: "/aboutme" },
    { label: "Contact Me", to: "/contactme" },
  ];

  const mobileNavItems = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/inventory" },
    { label: "Bags", to: "/inventory/bags" },
    { label: "Pants", to: "/inventory/pants" },
    { label: "Jewerly", to: "/inventory/jewlery" },
    { label: "Lamps", to: "/inventory/lamps" },
    { label: "Scarves", to: "/inventory/scarves" },
    { label: "Skirts", to: "/inventory/skirts" },
    { label: "Sweaters", to: "/inventory/sweaters" },
    { label: "Hats", to: "/inventory/hats" }, 
    { label: "Tops", to: "/inventory/tops" }, 
    { label: "Vases", to: "/inventory/vases" }, 
    { label: "Mirrors", to: "/inventory/mirrors" }, 
    { label: "About Me", to: "/aboutme" },
    { label: "Contact Me", to: "/contactme" }, 
  ];


  const isActive = (to) => pathname === to;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-purple-900/30 border-b border-purple-700/40 shadow-lg shadow-purple-900/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/90 shadow-md shadow-purple-900/40 overflow-hidden">
            <img
              src={LadyLibsLogo}
              alt="Lady Libs"
              className="h-11 w-11 object-cover cursor:pointer"
            />
          </div>
          <h1 className="text-xl font-extrabold text-yellow-50 tracking-wide">
            Lady Libs
          </h1>
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden sm:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`transition hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] ${
                isActive(item.to)
                  ? "text-white"
                  : "text-yellow-100/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side: Cart + Mobile menu */}
        <div className="flex items-center gap-2">
          {/* Desktop Cart Button */}
          <button
            onClick={() => navigate("/cart")}
            className="
              hidden sm:flex
              relative items-center gap-2 rounded-full 
              bg-gradient-to-br from-yellow-100/80 to-orange-200/80
              px-4 py-2 shadow-md shadow-purple-900/40
              border border-yellow-300/40
              backdrop-blur-md
              hover:brightness-110 hover:-translate-y-[1px] 
              transition-all duration-200 cursor-pointer
            "
            aria-label="Open cart"
          >
            <ShoppingCart size={18} className="text-purple-900" />
            <span className="text-purple-900 font-semibold">
              Cart
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden rounded-md p-2 text-yellow-100 hover:bg-purple-800/40 transition"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              // X icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="sm:hidden border-t border-purple-700/40 bg-purple-950/95 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-2">
            {mobileNavItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`block rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive(item.to)
                    ? "bg-emerald-500 text-purple-950"
                    : "text-yellow-100/85 hover:bg-purple-800/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile "View Cart" Button inside menu */}
            <button
              onClick={() => {
                setOpen(false);
                navigate("/cart");
              }}
              className="
                mt-3 w-full rounded-full
                bg-gradient-to-r from-yellow-200 to-orange-300
                px-4 py-2.5 text-sm font-semibold text-purple-900
                shadow-md shadow-purple-900/60
                hover:brightness-110 active:scale-95
                transition
              "
            >
              View Cart
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;