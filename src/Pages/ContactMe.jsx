import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import LadyLibsContactMe from "../assets/LadyLibsContactMe.png";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setCanSubmit(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // placeholder – wire to backend or email service later
    // alert("Message sent! 💜 I’ll be in touch soon.");
    // setName("");
    // setEmail("");
    // setMessage("");
    navigate('/emailsent');
  };

  return (
    <main className="w-full text-yellow-50">
      <div
        className="
          w-full rounded-3xl bg-purple-950/70 backdrop-blur-xl
          border border-purple-700/40 shadow-xl shadow-purple-950/70
          px-6 sm:px-10 py-10
          flex flex-col md:flex-row md:items-start gap-10
        "
      >
        {/* LEFT: copy + form */}
        <div className="flex-1 max-w-3xl">
          {/* Header */}
          <header className="mb-8 max-w-2xl">
            <p className="text-xs tracking-[0.35em] uppercase text-yellow-200/70">
              Reach Out
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Contact Me
            </h1>
            <p className="mt-4 text-sm sm:text-base text-yellow-100/85 leading-relaxed">
              Have a question about a piece, sizing, availability, or custom
              requests? Drop me a note — I’d love to hear from you.
            </p>
          </header>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-4 grid gap-5 sm:grid-cols-2"
          >
            {/* Name */}
            <label className="block">
              <span className="mb-2 block text-sm text-yellow-100/85">
                Your Name
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(DOMPurify.sanitize(e.target.value))}
                placeholder="Jane Doe"
                className="
                  w-full rounded-xl
                  border border-purple-700/70
                  bg-purple-900/70
                  px-4 py-2
                  text-yellow-50
                  placeholder:text-purple-300/60
                  focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/30
                  outline-none
                "
              />
            </label>

            {/* Email */}
            <label className="block">
              <span className="mb-2 block text-sm text-yellow-100/85">
                Email
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(DOMPurify.sanitize(e.target.value))}
                placeholder="you@example.com"
                className="
                  w-full rounded-xl
                  border border-purple-700/70
                  bg-purple-900/70
                  px-4 py-2
                  text-yellow-50
                  placeholder:text-purple-300/60
                  focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/30
                  outline-none
                "
              />
            </label>

            {/* Message */}
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm text-yellow-100/85">
                Your Message
              </span>
              <textarea
                value={message}
                onChange={(e) =>
                  setMessage(DOMPurify.sanitize(e.target.value))
                }
                rows={5}
                placeholder="Tell me what’s on your mind…"
                className="
                  w-full rounded-xl
                  border border-purple-700/70
                  bg-purple-900/70
                  px-4 py-3
                  text-yellow-50
                  placeholder:text-purple-300/60
                  focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/30
                  outline-none
                  resize-none
                "
              />
            </label>

            {/* Submit */}
            <div className="sm:col-span-2 flex items-center justify-between gap-4 mt-2">
              <p className="text-xs text-yellow-200/70">
                I usually respond within 24–48 hours.
              </p>

              <button
                type="submit"
                disabled={!canSubmit}
                aria-disabled={!canSubmit}
                className="
                  rounded-full
                  bg-gradient-to-r from-emerald-400 to-emerald-300
                  px-8 py-3
                  text-sm font-semibold
                  text-purple-950
                  border border-emerald-200/70
                  shadow-lg shadow-purple-950/60
                  hover:brightness-110 active:scale-95
                  transition
                "
              >
                {canSubmit ? "Send Message" : "Please Wait"}
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT: illustration (desktop only) */}
        <div className="hidden md:flex flex-1 justify-end">
          <div className="relative w-72 max-w-sm">
            {/* Glow behind illustration */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl bg-emerald-400/25 blur-3xl"
              aria-hidden="true"
            />
            <img
              src={LadyLibsContactMe}
              alt="Lady Libs vintage illustration on the phone"
              className="
                relative w-full rounded-3xl
                border border-purple-700/70
                bg-purple-900/60
                shadow-[0_25px_90px_rgba(0,0,0,0.75)]
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactMe;