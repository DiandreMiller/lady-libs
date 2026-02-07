import LadyLibsLogo from '../assets/LadyLibsImages/LadyLibsLogo.png';
import AllVintageItems from '../assets/LandingPageVintageItems/AllVintageItems.png';
import Notification from "../Components/Notification";
import NotificationNumberTwo from '../Components/NotificationNumberTwo';

const LandingPage = () => {
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-pink-600 via-orange-400 to-yellow-200 text-yellow-50 mt-12">
        {/* Background glow layers */}
        <div className="pointer-events-none fixed inset-0 opacity-40 mix-blend-screen">
          <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-orange-400 blur-3xl" />
          <div className="absolute -bottom-40 -right-10 h-96 w-96 rounded-full bg-purple-800 blur-3xl" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/40 blur-3xl" />
        </div>
  
        {/* Main content */}
        <div className="relative flex min-h-screen flex-col">
          <header className="flex items-center justify-between px-6 py-5 sm:px-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full ">
                <span>
                  <img src={LadyLibsLogo} alt="Lady Libs Logo" />
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] uppercase text-yellow-100/80">
                  Lady Libs
                </p>
                <p className="text-xs text-yellow-100/70">
                  Vintage • Curated • One of One
                </p>
              </div>
            </div>
  
            <a
              href="/inventory"
              className="hidden rounded-full border border-yellow-100/80 bg-purple-950/40 px-4 py-1.5 text-xs font-semibold text-yellow-50 shadow-md shadow-purple-950/40 hover:bg-purple-950/70 sm:inline-flex transition"
            >
              Enter Shop
            </a>
          </header>
  
          {/* Hero section */}
          <main className="flex flex-1 items-center px-6 pb-12 pt-4 sm:px-10 lg:px-16">
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
              {/* LEFT: Text content */}
              <section className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-purple-900/60 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-yellow-100/90 shadow-md shadow-purple-950/40">
                  New drops weekly • Limited pieces
                </div>
  
                <div className="space-y-3">
                  <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                    Vintage pieces
                    <span className="block text-orange-100">
                      that feel like they were made for you.
                    </span>
                  </h1>
  
                  <p className="max-w-xl text-sm text-yellow-50/90 sm:text-base">
                    Lady Libs curates hand-picked vintage — rich velvets, bold
                    golds, emerald greens. Every piece is one-of-a-kind and chosen
                    to make your space and style feel intentional, warm, and a little
                    bit magical.
                  </p>
                </div>
  
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/inventory"
                    className="rounded-full bg-emerald-500 px-7 py-2.5 text-sm font-semibold text-purple-950 shadow-lg shadow-purple-950/60 hover:bg-emerald-400 transition"
                  >
                    Shop the Collection
                  </a>
  
                  <a
                    href="/aboutme"
                    className="rounded-full border border-yellow-100/75 bg-purple-950/30 px-6 py-2.5 text-sm font-semibold text-yellow-50 hover:bg-purple-950/70 transition"
                  >
                    Meet Lady Libs
                  </a>
                </div>
  
                {/* little trust / vibe row */}
                <div className="flex flex-wrap gap-5 pt-2 text-xs text-yellow-50/85">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    <span>One-of-one &amp; small-batch pieces</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-300" />
                    <span>Carefully cleaned &amp; styled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-yellow-200" />
                    <span>Ships anywhere in the U.S.</span>
                  </div>
                </div>
  
                {/* Stats */}
                <div className="mt-4 grid max-w-md grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div>
                    <p className="text-2xl font-extrabold text-yellow-50">
                      150+
                    </p>
                    <p className="text-yellow-100/80">Vintage pieces curated</p>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-yellow-50">
                      100%
                    </p>
                    <p className="text-yellow-100/80">Hand-picked by Lady Libs</p>
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-yellow-50">
                      5★
                    </p>
                    <p className="text-yellow-100/80">Happy customers &amp; reviews</p>
                  </div>
                </div>
              </section>
  
              {/* RIGHT: Visual showroom card */}
              <aside className="relative">
                <div className="relative overflow-hidden rounded-3xl bg-purple-950/70 p-5 shadow-2xl shadow-purple-950/70 backdrop-blur-md">
                  {/* top label + chip */}
                  <div className="mb-4 flex items-center justify-between text-[11px] text-yellow-100/80">
                    <span className="rounded-full bg-purple-900/80 px-3 py-1">
                      Tonight&apos;s Curated Edit
                    </span>
                    <span className="rounded-full bg-yellow-200/95 px-3 py-1 font-semibold text-purple-950">
                      3 items left
                    </span>
                  </div>
  
                  {/* big “photo” block */}
                  <div
                    className="
                      mb-4 h-48 rounded-2xl
                      bg-gradient-to-br from-emerald-600 via-purple-800 to-orange-500
                      shadow-lg shadow-purple-950/70
                      flex items-center justify-center
                      overflow-hidden
                    "
                  >
                    <img
                      src={AllVintageItems}
                      alt="Tonight's curated vintage selection"
                      className="
                        h-full w-full object-contain
                        drop-shadow-xl
                        transition-transform duration-300
                        hover:scale-105
                      "
                    />
                  </div>
                  {/* featured items list */}
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between gap-3 rounded-2xl bg-purple-900/80 px-3 py-3">
                      <div>
                        <p className="text-sm font-semibold text-yellow-50">
                          Emerald Velvet Armchair
                        </p>
                        <p className="text-[11px] text-yellow-100/75">
                          Deep green, gold trim, perfect for reading corners.
                        </p>
                      </div>
                      <p className="text-sm font-bold text-yellow-50">$180</p>
                    </div>
  
                    <div className="flex items-center justify-between gap-3 rounded-2xl bg-purple-900/70 px-3 py-3">
                      <div>
                        <p className="text-sm font-semibold text-yellow-50">
                          Golden Hoop Set
                        </p>
                        <p className="text-[11px] text-yellow-100/75">
                          Three sizes, warm gold tone, everyday glam.
                        </p>
                      </div>
                      <p className="text-sm font-bold text-yellow-50">$30</p>
                    </div>
  
                    <div className="flex items-center justify-between gap-3 rounded-2xl bg-purple-900/70 px-3 py-3">
                      <div>
                        <p className="text-sm font-semibold text-yellow-50">
                          Sunset Silk Scarf
                        </p>
                        <p className="text-[11px] text-yellow-100/75">
                          Burnt orange, soft lilac &amp; deep plum tones.
                        </p>
                      </div>
                      <p className="text-sm font-bold text-yellow-50">$42</p>
                    </div>
                  </div>
  
                  <a
                    href="/inventory"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-purple-950 shadow-md shadow-purple-950/60 hover:bg-emerald-400 transition"
                  >
                    View tonight&apos;s full edit
                  </a>
                </div>
  
                {/* floating badge */}
                <div className="absolute -right-3 -top-5 hidden rounded-2xl bg-purple-950/90 px-4 py-2 text-xs font-semibold text-yellow-50 shadow-xl shadow-purple-950/80 sm:block">
                  New pieces added every Sunday
                </div>
              </aside>
            </div>
          </main>
        </div>
        <Notification />
        <NotificationNumberTwo />
      </div>
    );
  };
  
  export default LandingPage;