// src/Pages/EmailSent.tsx
import { Link } from "react-router-dom";
import LadyLibsEmailSent from "../assets/LadyLibsImages/LadyLibsEmailSent3.png";

const EmailSent = () => (
  <>
    <meta name="robots" content="noindex,follow" />

    <main
      className="
        relative min-h-screen w-full overflow-hidden
        bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950
        text-yellow-50 flex items-center justify-center
      "
    >
      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      <section className="relative z-10 max-w-xl w-full text-center px-6">
        {/* Illustration */}
        <div className="mx-auto mb-8 flex justify-center">
          <div
            className="
              w-80 h-80 sm:w-72 sm:h-72
              rounded-3xl overflow-hidden
              border border-purple-500/50
              bg-purple-900/50
              shadow-[0_30px_90px_rgba(0,0,0,0.8)]
            "
          >
            <img
              src={LadyLibsEmailSent}
              alt="Lady Libs sending love"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* success circle */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-300/15 border border-emerald-300/60 shadow-lg shadow-purple-950/70">
          <svg
            viewBox="0 0 24 24"
            className="h-10 w-10 text-emerald-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        {/* heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Message sent 💌
        </h1>

        <p className="mt-4 text-sm sm:text-base text-yellow-100/85 leading-relaxed">
          Thank you for reaching out to Lady Libs. I&apos;ll review your message
          and get back to you within 24–48 hours.
        </p>

        {/* divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

        {/* buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/inventory"
            className="
              rounded-full border border-purple-500/70 bg-purple-900/60
              px-8 py-3 text-sm font-semibold text-yellow-50
              backdrop-blur-md
              transition-[color,border,box-shadow,transform,background] duration-300 ease-out
              hover:bg-purple-800/80 hover:border-emerald-300 hover:text-emerald-200
              hover:shadow-[0_0_24px_rgba(52,211,153,.45)]
              active:scale-95
            "
          >
            Browse the Collection
          </Link>

          <Link
            to="/contactme"
            className="
              rounded-full
              bg-gradient-to-r from-emerald-400 to-emerald-300
              px-8 py-3 text-sm font-semibold text-purple-950
              border border-emerald-200/70
              shadow-lg shadow-purple-950/60
              backdrop-blur-md
              transition duration-300
              hover:brightness-110 active:scale-95
            "
          >
            Send Another Message
          </Link>
        </div>
      </section>
    </main>
  </>
);

export default EmailSent;