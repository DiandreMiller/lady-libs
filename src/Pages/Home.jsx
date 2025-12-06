import EmeraldGreenChair from '../assets/EmeraldGreenChair.png';
import ForestGreenWrapDress from '../assets/ForestGreenWrapDress.png';
import GoldenHoopEarrings from '../assets/GoldenHoopEarrings.png';
import SunsetSilkScarf from '../assets/SunsetSilkScarf.png';
import VintageCamera from '../assets/VintageCamera.png';
import VintageVinylRecord from '../assets/VintageVynlRecord.png';

const inventory = [
  { id: 1, name: "Emerald Velvet Armchair", price: "$180", tag: "New Arrival", category: "Furniture", img: EmeraldGreenChair },
  { id: 2, name: "Sunset Silk Scarf", price: "$42", tag: "Best Seller", category: "Accessories", img: ForestGreenWrapDress },
  { id: 3, name: "Golden Hoop Earrings", price: "$30", tag: "Limited", category: "Jewelry", img: GoldenHoopEarrings },
  { id: 4, name: "Vintage Vinyl Record", price: "$25", tag: "Classic", category: "Music", img: SunsetSilkScarf },
  { id: 5, name: "Retro Camera", price: "$95", tag: "One of One", category: "Decor", img: VintageCamera },
  { id: 6, name: "Forest Green Wrap Dress", price: "$65", tag: "Just In", category: "Clothing", img: VintageVinylRecord },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-orange-600 to-yellow-300 text-slate-50">
      {/* Soft glow overlays */}
      <div className="pointer-events-none fixed inset-0 opacity-40 mix-blend-screen">
        <div className="absolute -top-32 -left-16 h-80 w-80 rounded-full bg-orange-400 blur-3xl" />
        <div className="absolute -bottom-40 -right-16 h-96 w-96 rounded-full bg-purple-700 blur-3xl" />
      </div>
  
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="flex flex-col gap-10 lg:flex-row lg:items-center">
          {/* Left Text */}
          <div className="max-w-xl space-y-6">
            <p className="inline-flex rounded-full bg-purple-800/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-100 shadow-sm mt-10">
              New drops weekly
            </p>
  
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-yellow-50">
              Timeless pieces,
              <span className="block text-orange-100">
                curated by Lady Libs.
              </span>
            </h2>
  
            <p className="text-sm sm:text-base text-yellow-50/85">
              Discover hand-selected vintage items inspired by warm sunsets,
              rich greens, and golden accents.
            </p>
  
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold shadow-lg hover:bg-emerald-400 transition">
                Shop Collection
              </button>
              <button className="rounded-full border border-yellow-100/70 bg-purple-900/40 px-4 py-2 text-sm font-semibold hover:bg-purple-900/70 transition">
                Join the Vintage List
              </button>
            </div>
          </div>
  
          {/* Featured */}
          <aside className="w-full max-w-md rounded-3xl bg-purple-900/60 p-5 shadow-2xl backdrop-blur-md">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600 via-purple-800 to-orange-500 p-4">
              <div className="flex justify-between text-xs mb-3">
                <span className="rounded-full bg-purple-900/50 px-3 py-1">
                  Featured Find
                </span>
                <span className="rounded-full bg-yellow-200 px-3 py-1 font-semibold text-purple-900">
                  1/1 Piece
                </span>
              </div>
  
              <h3 className="text-lg font-semibold text-yellow-50">
                Emerald Evening Lamp
              </h3>
              <p className="text-xs text-orange-100 mt-1">
                Deep green base & warm golden glow.
              </p>
  
              <div className="mt-4 flex justify-between">
                <span className="font-bold">$120</span>
                <button className="rounded-full bg-yellow-200 px-4 py-1 text-xs font-semibold text-purple-900 hover:bg-yellow-100 transition">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </aside>
        </section>
  
        {/* Inventory Grid */}
        <section className="mt-14 rounded-3xl bg-purple-950/40 p-5 shadow-xl backdrop-blur-md">
          <h3 className="text-lg font-semibold">Available Inventory</h3>
          <p className="mb-6 text-xs text-yellow-100/80">
            Explore current pieces in the Lady Libs collection.
          </p>
  
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {inventory.map((item) => (
              <div
                key={item.id}
                className="
                  group rounded-2xl bg-purple-900/70 p-4
                  shadow-lg ring-1 ring-purple-800/70
                  transition hover:-translate-y-1 hover:ring-yellow-200/80
                "
              >
                {/* Image Layer */}
                <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-emerald-700 via-purple-800 to-orange-500 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-auto object-contain drop-shadow-xl transition-transform group-hover:scale-105"
                  />
                </div>
  
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-yellow-50">
                      {item.name}
                    </h4>
                    <p className="text-[11px] uppercase text-yellow-100/70">
                      {item.category}
                    </p>
                  </div>
  
                  <span className="rounded-full bg-orange-400 px-2 py-0.5 text-[10px] font-semibold text-purple-900">
                    {item.tag}
                  </span>
                </div>
  
                <div className="mt-3 flex justify-between text-sm">
                  <span className="font-bold text-yellow-50">
                    {item.price}
                  </span>
                  <button className="rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold hover:bg-emerald-400 transition">
                    View Item
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-6 flex justify-center">
            <button className="rounded-full border border-yellow-100/70 px-5 py-2 text-xs font-semibold hover:bg-purple-900/70 transition">
              Load more vintage pieces
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;