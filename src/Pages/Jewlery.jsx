//Pages/Jewlery.jsx

//Vintage Earrings
import GoldenHoopEarrings from '../assets/VintageJewlery/GoldenHoopEarrings.png';
import RoundEarringsWoodenLeatherEarrings from '../assets/VintageJewlery/RoundEarringsWoodenLeatherEarrings.png';
import BronzeOpalEarrings from '../assets/VintageJewlery/OpalEarrings.png';

//Vintage Necklaces
import GoldCloverNecklace from '../assets/VintageJewlery/GoldCloverNecklace.png';
import TurquoiseRhinestoneHandmadeWovenRopeNecklace from '../assets/VintageJewlery/TurquoiseRhinestoneHandmadeWovenRopeNecklace.png';
import SunMoonNecklace from '../assets/VintageJewlery/SunMoonNecklace.png';

//Vintage Rings
import BrownLeafRing from '../assets/VintageJewlery/BrownLeafRing.png';
import ButteryflyRing from '../assets/VintageJewlery/ButteryflyRing.png';
import GoldenPromiseRing from '../assets/VintageJewlery/GoldenPromiseRing.png';

//Bracelets
import GoldenFashion14KBracelet from '../assets/VintageJewlery/GoldenFashion14KBracelet.png';
import GoldenGemstoneBraclet from '../assets/VintageJewlery/GoldenGemstoneBraclet.png';
import WhiteBluePearlBracelet from '../assets/VintageJewlery/WhiteBluePearlBracelet.png';


const vintageEarring = [
    { id: 1, name: 'Golden Hoop Earrings', price: '$250', tag: 'New', category: 'Jewelery/Earrings', color: 'Gold', img: GoldenHoopEarrings },
    { id: 2, name: 'Round Earrings Wooden Leather Earrings', price: '$110', tag: 'Classic', category: 'Jewlery/Wooden', color: 'Brown', img: RoundEarringsWoodenLeatherEarrings },
    { id: 3, name: 'Bronze Opal Earrings', price: '$123', tag: 'Limited', category: 'Jewlery/Bronze', color: 'Bronze', img: BronzeOpalEarrings },
  ];

const vintageNeckless = [
    { id: 1, name: 'Gold Clover Necklace', price: '$25', tag: 'New', category: 'Jewelery/Neckless', color: 'Gold, Green, Red, Yellow', img: GoldCloverNecklace },
    { id: 2, name: 'Turquoise Rhinestone Handmade Woven Rope Necklace', price: '$40', tag: 'Classic', category: 'Jewlery/Neckless', color: 'Turquoise', img: TurquoiseRhinestoneHandmadeWovenRopeNecklace },
    { id: 3, name: 'Sun Moon Necklace', price: '$25', tag: 'Limited', category: 'Jewlery/Neckless', color: 'Silver', img: SunMoonNecklace },
  ];

const vintageRings = [
    { id: 1, name: 'Brown Leaf Ring', price: '$27', tag: 'New', category: 'Jewelery/Ring', color: 'Brown', img: BrownLeafRing },
    { id: 2, name: 'Butteryfly Ring', price: '$38', tag: 'Classic', category: 'Jewlery/Ring', color: 'Silver', img: ButteryflyRing },
    { id: 3, name: 'Golden Promise Ring', price: '$29', tag: 'Limited', category: 'Jewlery/Ring', color: 'Gold', img: GoldenPromiseRing },
];

const vintageBracelets = [
    { id: 1, name: 'Golden Fashion 14K Gold Bracelet', price: '$201', tag: 'New', category: 'Jewlery/Bracelet', color: 'Gold', img: GoldenFashion14KBracelet },
    { id: 2, name: 'Golden Gemstone Braclet', price: '$34', tag: 'Classic', category: 'Jewlery/Bracelet', color: 'Gold', img: GoldenGemstoneBraclet },
    { id: 3, name: 'White Blue Pearl Bracelet', price: '$27', tag: 'Limited', category: 'Jewlery/Bracelet', color: 'White/ Blue', img: WhiteBluePearlBracelet },
];



  const Jewlery = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-orange-600 to-yellow-300 text-slate-50 pb-20">
        {/* Glow Effects */}
        <div className="pointer-events-none fixed inset-0 opacity-40 mix-blend-screen">
          <div className="absolute -top-32 -left-16 h-80 w-80 rounded-full bg-orange-400 blur-3xl" />
          <div className="absolute -bottom-40 -right-16 h-96 w-96 rounded-full bg-purple-700 blur-3xl" />
        </div>
  
        <div className="relative mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
          {/* Header */}
          <section className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-yellow-50">
              Lady Libs Jewlery Collection
            </h2>
            <p className="mt-3 text-sm sm:text-base text-yellow-50/85 max-w-xl mx-auto">
              Explore curated jewlery, and vintage patterns.
            </p>
          </section>
  
          {/* Vintage Earrings */}
          <section className="mt-14 rounded-3xl bg-purple-950/40 p-5 shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-semibold">Earrings</h3>
            <p className="mb-6 text-xs text-yellow-100/80">
              Elegant and vintage earrings.
            </p>
  
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {vintageEarring.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-2xl bg-purple-900/70 p-4 shadow-lg ring-1 ring-purple-800/70 transition hover:-translate-y-1 hover:ring-yellow-200/80"
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
                      <h4 className="text-sm font-semibold text-yellow-50">{item.name}</h4>
                      <p className="text-[11px] uppercase text-yellow-100/70">{item.category}</p>
                      <p className="text-[11px] text-yellow-100/60">Color: {item.color}</p>
                    </div>
  
                    <span className="rounded-full bg-orange-400 px-2 py-0.5 text-[10px] font-semibold text-purple-900">{item.tag}</span>
                  </div>
  
                  <div className="mt-3 flex justify-between text-sm">
                    <span className="font-bold text-yellow-50">{item.price}</span>
                    <button className="rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold hover:bg-emerald-400 transition">
                      View Item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Vintage Neckless */}
          <section className="mt-14 rounded-3xl bg-purple-950/40 p-5 shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-semibold">Necklesses</h3>
            <p className="mb-6 text-xs text-yellow-100/80">
              Beautiful necklesses, and elegant vintage designs.
            </p>
  
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {vintageNeckless.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-2xl bg-purple-900/70 p-4 shadow-lg ring-1 ring-purple-800/70 transition hover:-translate-y-1 hover:ring-yellow-200/80"
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
                      <h4 className="text-sm font-semibold text-yellow-50">{item.name}</h4>
                      <p className="text-[11px] uppercase text-yellow-100/70">{item.category}</p>
                      <p className="text-[11px] text-yellow-100/60">Color: {item.color}</p>
                    </div>
  
                    <span className="rounded-full bg-orange-400 px-2 py-0.5 text-[10px] font-semibold text-purple-900">{item.tag}</span>
                  </div>
  
                  <div className="mt-3 flex justify-between text-sm">
                    <span className="font-bold text-yellow-50">{item.price}</span>
                    <button className="rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold hover:bg-emerald-400 transition">
                      View Item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

            {/* Vintage Rings */}
            <section className="mt-14 rounded-3xl bg-purple-950/40 p-5 shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-semibold">Rings</h3>
            <p className="mb-6 text-xs text-yellow-100/80">
              Lovely elegant rings with vintage designs.
            </p>
  
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {vintageRings.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-2xl bg-purple-900/70 p-4 shadow-lg ring-1 ring-purple-800/70 transition hover:-translate-y-1 hover:ring-yellow-200/80"
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
                      <h4 className="text-sm font-semibold text-yellow-50">{item.name}</h4>
                      <p className="text-[11px] uppercase text-yellow-100/70">{item.category}</p>
                      <p className="text-[11px] text-yellow-100/60">Color: {item.color}</p>
                    </div>
  
                    <span className="rounded-full bg-orange-400 px-2 py-0.5 text-[10px] font-semibold text-purple-900">{item.tag}</span>
                  </div>
  
                  <div className="mt-3 flex justify-between text-sm">
                    <span className="font-bold text-yellow-50">{item.price}</span>
                    <button className="rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold hover:bg-emerald-400 transition">
                      View Item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

            {/* Vintage Bracelets */}
            <section className="mt-14 rounded-3xl bg-purple-950/40 p-5 shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-semibold">Bracelets</h3>
            <p className="mb-6 text-xs text-yellow-100/80">
              Stunning bracelets, and elegant vintage designs.
            </p>
  
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {vintageBracelets.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-2xl bg-purple-900/70 p-4 shadow-lg ring-1 ring-purple-800/70 transition hover:-translate-y-1 hover:ring-yellow-200/80"
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
                      <h4 className="text-sm font-semibold text-yellow-50">{item.name}</h4>
                      <p className="text-[11px] uppercase text-yellow-100/70">{item.category}</p>
                      <p className="text-[11px] text-yellow-100/60">Color: {item.color}</p>
                    </div>
  
                    <span className="rounded-full bg-orange-400 px-2 py-0.5 text-[10px] font-semibold text-purple-900">{item.tag}</span>
                  </div>
  
                  <div className="mt-3 flex justify-between text-sm">
                    <span className="font-bold text-yellow-50">{item.price}</span>
                    <button className="rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold hover:bg-emerald-400 transition">
                      View Item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Load More */}
          <div className="mt-6 flex justify-center">
              <button className="rounded-full border border-yellow-100/70 px-5 py-2 text-xs font-semibold hover:bg-purple-900/70 transition">
                Load more Jewlery
              </button>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Jewlery;
  