const Navbar = () => {
    return (
      <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-purple-900/30 border-b border-purple-700/40 shadow-lg shadow-purple-900/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
  
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/90 shadow-md shadow-purple-900/40">
              <span className="text-lg font-bold text-yellow-100">LL</span>
            </div>
            <h1 className="text-xl font-extrabold text-yellow-50 tracking-wide">
              Lady Libs
            </h1>
          </div>
  
          {/* Menu Links */}
          <div className="hidden gap-8 text-sm font-medium sm:flex">
            <a
              href="#"
              className="text-yellow-100/80 hover:text-white transition hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
            >
              Home
            </a>
            <a
              href="#"
              className="text-yellow-100/80 hover:text-white transition hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-yellow-100/80 hover:text-white transition hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
            >
              About Me
            </a>
          </div>
  
          {/* Login / Profile Button */}
          <button className="hidden sm:flex rounded-full bg-yellow-200 px-4 py-1.5 text-xs font-semibold text-purple-900 shadow-md shadow-purple-900/40 hover:bg-yellow-100 transition">
            Sign In
          </button>
  
          {/* Mobile Menu Icon */}
          <button className="sm:hidden rounded-md p-2 text-yellow-100 hover:bg-purple-800/40 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
  
        </div>
      </nav>
    );
  };
  
  export default Navbar;