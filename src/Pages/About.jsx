import LadyLibs from '../assets/LadyLibsImages/LadyLibs.png';

const About = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-purple-900 via-orange-600 to-yellow-300 text-slate-100">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-40 mix-blend-screen">
        <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-orange-400 blur-3xl" />
        <div className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-purple-800 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        {/* Header on dark card */}
        <header className="mb-8 rounded-3xl bg-purple-950/80 p-6 shadow-xl shadow-purple-950/70 backdrop-blur-md space-y-3">
          <p className="inline-flex items-center rounded-full bg-purple-900/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-yellow-100/90 shadow-md shadow-purple-950/60">
            About Lady Libs
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-yellow-50">
            Curated vintage
            <span className="block text-orange-100">
              with a little bit of Libya in every piece.
            </span>
          </h1>
        </header>

        {/* Main section in a dark card */}
        <main className="rounded-3xl bg-purple-950/80 p-6 shadow-2xl shadow-purple-950/80 backdrop-blur-md">
          <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:items-center">
            {/* Photo / visual */}
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-3xl bg-purple-950/80 p-3 shadow-xl shadow-purple-950/80 max-w-sm w-full">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={LadyLibs}
                    alt="Lady Libs"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-3 text-xs text-center text-yellow-100/85">
                  Libya, the face and heart behind Lady Libs ✨
                </p>
              </div>
            </div>

            {/* Text */}
            <section className="space-y-5">
              <p className="text-sm leading-relaxed sm:text-base text-slate-100">
                Hey, I&apos;m <span className="font-semibold">Libya</span>, but
                here you can call me <span className="font-semibold">Lady Libs</span>.
                I&apos;ve always loved pieces that feel like they already have a
                story—bold colors, rich textures, and little details that make you
                wonder where they&apos;ve been and who loved them before.
              </p>

              <p className="text-sm leading-relaxed sm:text-base text-slate-100">
                This shop is my way of sharing that love. I hand-pick every single
                item myself: no random bulk orders, no copy-and-paste racks. If
                it&apos;s on the site, it&apos;s something I would wear, style in my
                home, or gift to someone I care about.
              </p>

              <p className="text-sm leading-relaxed sm:text-base text-slate-100">
                The vibe? Deep greens, gold accents, sunset tones, soft textures.
                Pieces that make you feel a little softer and a little louder at the
                same time. I want you to grab something from Lady Libs and think,
                &quot;Yeah, this feels like me.&quot;
              </p>

              <div className="mt-2 space-y-2 text-xs sm:text-sm text-yellow-100/90">
                <p className="font-semibold">What you can expect from Lady Libs:</p>
                <ul className="space-y-1">
                  <li>• Hand-picked vintage and one-of-a-kind finds</li>
                  <li>• Pieces that are cleaned, cared for, and ready to love</li>
                  <li>• Drops that feel personal, not mass-produced</li>
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="/inventory"
                  className="rounded-full bg-emerald-500 px-7 py-2.5 text-sm font-semibold text-purple-950 shadow-lg shadow-purple-950/60 hover:bg-emerald-400 transition"
                >
                  Shop Lady Libs
                </a>
                <a
                  href="/contactme"
                  className="rounded-full border border-yellow-100/75 bg-transparent px-6 py-2.5 text-sm font-semibold text-yellow-50 hover:bg-purple-900/70 transition"
                >
                  Ask me about a piece
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;