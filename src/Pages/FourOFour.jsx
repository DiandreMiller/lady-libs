import { Link } from "react-router-dom";
import KissingFace from "../assets/LadyLibsImages/KissingFace.png";

const FourOFour = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden bg-purple-950 text-yellow-50">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-orange-600/40 to-yellow-300/30"></div>

      {/* Soft Glow Orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-10 h-96 w-96 rounded-full bg-orange-400/30 blur-[110px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 h-[550px] w-[550px] rounded-full bg-purple-700/40 blur-[130px] animate-slow-pulse"></div>
      </div>

      {/* Floating Decorative Circle */}
      <div className="absolute -top-16 right-24 h-40 w-40 rounded-full bg-emerald-500/20 blur-xl animate-float" />

      {/* Content Card – now full width */}
      <div className="relative z-10 w-full max-w-5xl bg-purple-950/70 backdrop-blur-2xl rounded-3xl p-10 md:p-16 border border-purple-600/40 shadow-[0_35px_120px_rgba(0,0,0,0.7)] animate-fadeIn mx-4">
        
        {/* Kissing Face Illustration */}
        <div className="mx-auto mb-8 flex items-center justify-center">
          <div className="h-48 w-48 md:h-56 md:w-56 rounded-full overflow-hidden shadow-xl shadow-purple-900/60 border border-yellow-200/40 bg-purple-900/40">
            <img
              src={KissingFace}
              alt="Lady Libs blowing a kiss"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-7xl sm:text-8xl font-extrabold text-center tracking-tight drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-300">
          404
        </h1>

        <p className="mt-4 text-xl font-semibold text-center text-yellow-100/95 tracking-wide">
          This page took a wrong turn.
        </p>

        <p className="mt-4 text-sm md:text-base text-center text-yellow-200/80 leading-relaxed max-w-3xl mx-auto">
          Looks like the piece you’re searching for isn’t here.
          But the Lady Libs collection is full of one-of-a-kind treasures waiting for their next home.
        </p>

        {/* Divider */}
        <div className="mt-10 mb-8 h-px w-full bg-gradient-to-r from-transparent via-yellow-200/40 to-transparent"></div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 px-7 py-3 text-sm font-semibold text-purple-900 shadow-lg shadow-purple-950/60 hover:brightness-110 transition-transform hover:-translate-y-[2px]"
          >
            Go Home
          </Link>

          <Link
            to="/inventory"
            className="rounded-full bg-purple-900/50 border border-yellow-100/50 px-7 py-3 text-sm font-semibold text-yellow-50 hover:bg-purple-900/70 hover:border-yellow-50 transition-transform hover:-translate-y-[2px]"
          >
            Browse Shop
          </Link>
        </div>

        <p className="mt-8 text-xs text-center text-yellow-200/70 italic">
          Maybe the item you're looking for was truly one-of-one… and already found a new home. ✨
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
          @keyframes slow-pulse {
            0%, 100% { opacity: 0.45; }
            50% { opacity: 0.6; }
          }
          .animate-slow-pulse {
            animation: slow-pulse 6s ease-in-out infinite;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.9s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default FourOFour;