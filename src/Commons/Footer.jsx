import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { InstagramLogo, DeviceMobile, FacebookLogo, TiktokLogo } from "phosphor-react";
import LadyLibsLogo from '../assets/LadyLibsLogo.png';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // const navigate = useNavigate();

   // Show scroll-to-top button after scrolling down
   useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

    const socials = [
      { label: "Instagram", short: <InstagramLogo size={22} /> },
      { label: "TikTok", short: <TiktokLogo size={22} /> },
      { label: "Facebook", short: <FacebookLogo size={22} /> },
    ];
  
    return (
      <>
        <footer
          className="
            relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen
            bg-gradient-to-b from-purple-950/90 via-purple-900/90 to-purple-950/95
            text-yellow-50 border-t border-purple-800/60 backdrop-blur-xl
          "
        >
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-3">
              {/* BRAND */}
              <div className="space-y-3 md:col-span-1 text-center md:text-left">
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/90 shadow-md shadow-purple-900/60">
                    <span className="text-lg font-bold text-yellow-100"><img src={LadyLibsLogo} alt="Lady Libs Logo" /></span>
                  </div>
                  <span className="text-xl font-extrabold tracking-wide">
                    Lady Libs
                  </span>
                </div>
    
                <p className="mx-auto max-w-sm text-sm text-yellow-100/80 md:mx-0">
                  Curated vintage pieces with warmth, history, and a sprinkle of
                  magic. Every item has a story — Lady Libs helps it find a new home.
                </p>
              </div>
    
              {/* NEWSLETTER + SOCIALS */}
              <div className="space-y-4 md:col-span-2">
                <div className="text-center md:text-right">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-200/80">
                    Join the Lady Libs list
                  </h3>
                  <p className="mt-1 text-xs text-yellow-100/80">
                    Be the first to know when new vintage drops go live.
                  </p>
                </div>
    
                {/* FORM */}
                <form className="mt-2 flex justify-center md:justify-end">
                  <div className="flex w-full max-w-sm overflow-hidden rounded-full border border-purple-700/80 bg-purple-950/70">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full bg-transparent px-3 py-2 text-xs text-yellow-50 placeholder:text-yellow-200/50 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="whitespace-nowrap bg-emerald-500 px-4 text-xs font-semibold text-red-200 hover:bg-emerald-400 transition"
                    >
                      Join
                    </button>
                  </div>
                </form>
    
                {/* Animated Social Icons */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-1 md:justify-end">
                  {socials.map((s) => (
                    <button
                      key={s.label}
                      aria-label={s.label}
                      className="
                        group
                        flex h-8 w-8 items-center justify-center
                        rounded-full 
                        bg-purple-800/80 
                        text-[11px] font-semibold text-yellow-100
                        shadow-md shadow-purple-900/60
                        transition
                        hover:bg-orange-400 hover:text-red-200
                        hover:-translate-y-1 hover:rotate-3 hover:scale-105
                      "
                    >
                      <span className="transition group-hover:scale-110 group-hover:-rotate-6">
                        {s.short}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
    
            {/* Bottom strip */}
            <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-purple-800/60 pt-4 text-[11px] text-yellow-100/70 sm:flex-row">
              <p>© {new Date().getFullYear()} Lady Libs. All rights reserved.</p>
    
              <div className="flex gap-4">

                <Link className="hover:text-white transition" to='/privacy'>
                  Privacy Policy
                </Link>

                <Link className="hover:text-white transition" to='/terms'>
                  Terms
                </Link>

              </div>
            </div>
          </div>
        </footer>
        {/* Back to Top Button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full
              bg-[#1B2A49] text-[#F8E9D2] hover:bg-[#E37B2C] hover:text-white
              p-3 shadow-lg transition-all duration-300 active:scale-95
            "
          >
            <ArrowUp size={20} />
          </button>
        )}
      </>
    );
  };
  
  export default Footer;