import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/inventory" },
    { label: "About Me", to: "/aboutus" },
  ];

  const isActive = (to) => pathname === to;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-purple-900/30 border-b border-purple-700/40 shadow-lg shadow-purple-900/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/90 shadow-md shadow-purple-900/40">
            <span className="text-lg font-bold text-yellow-100">LL</span>
          </div>
          <h1 className="text-xl font-extrabold text-yellow-50 tracking-wide">
            Lady Libs
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden gap-8 text-sm font-medium sm:flex">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="sm:hidden border-t border-purple-700/40 bg-purple-950/95 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-2">
            {navItems.map((item) => (
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;