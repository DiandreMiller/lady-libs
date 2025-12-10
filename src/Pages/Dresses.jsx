//Pages/Dresses.jsx

//Vintage Decade Dresses
import KhakisMermaidBusinessDress1930s from '../assets/VintageDresses/1930KhakisMermaidBusinessDress.png';
import HalterTopPinkPokadotDress1940s from '../assets/VintageDresses/1940sHalterTopPinkPokadotDress.png';
import ChristmasVelvetDress1950s from '../assets/VintageDresses/1950sChristmasVelvitDress.png';
import RedVelvetDress1960s from '../assets/VintageDresses/1960RedVelvitDress.png';
import GoldMetalicDress1970s from '../assets/VintageDresses/1970GoldMetalicDress.png';
import RedPearlDress1980s from '../assets/VintageDresses/1980sRedPearlDress.png';

// Vintage Dresses
import BlackAndRedFittedDress from '../assets/VintageDresses/BlackAndRedFittedDress.png';
import LongBlueDress from '../assets/VintageDresses/LongBlueDress.png';
import HalterYellowDress from '../assets/VintageDresses/HalterYellowDress.png';
import PinkPokadotDress from '../assets/VintageDresses/PinkPokadotDress.png';
import PinkSatinDress from '../assets/VintageDresses/PinkSatinDress.png';
import TumericGingerManDress from '../assets/VintageDresses/TumericGingerManDress.png';


const vintageDresses = [
    { id: 1, name: 'Black And Red Fitted Dress', price: '$65', tag: 'New', category: 'Fitted Dress', color: 'Black/Red', img: BlackAndRedFittedDress },
    { id: 2, name: 'Long Blue Dress', price: '$60', tag: 'Classic', category: 'Long Blue Dress', color: 'Blue', img: LongBlueDress },
    { id: 3, name: 'Halter Yellow Dress', price: '$72', tag: 'Limited', category: 'Halter Yellow Dress', color: 'Yellow', img: HalterYellowDress },
    { id: 4, name: 'Pink Pokadot Dress', price: '$66', tag: 'New Drop', category: 'Pink Flowy Dress', color: 'Pink', img: PinkPokadotDress },
    { id: 5, name: 'Pink Satin Dress', price: '$48', tag: 'Just In', category: 'Satin', color: 'Pink', img: PinkSatinDress },
    { id: 6, name: 'Tumeric Ginger Man Dress', price: '$64', tag: 'Festive', category: 'Festive', color: 'Brown', img: TumericGingerManDress },
  ];

const decadeVintageDress = [
    { id: 1, name: 'Khakis Mermaid Business Dress 1930s', price: '$85', tag: 'New', category: '1930s Business Casual', color: 'White/ Light Brown', img: KhakisMermaidBusinessDress1930s },
    { id: 2, name: 'Halter Top Pink Pokadot Dress 1940s', price: '$80', tag: 'Classic', category: '1940s Halter Top', color: 'Pink', img: HalterTopPinkPokadotDress1940s },
    { id: 3, name: 'Christmas Velvet Dress 1950s', price: '$92', tag: 'Limited', category: '1950s Christmas', color: 'Velvet', img: ChristmasVelvetDress1950s },
    { id: 4, name: 'Red Velvet Dress 1960s', price: '$86', tag: 'New Drop', category: 'Velvet 1960', color: 'Red', img: RedVelvetDress1960s },
    { id: 5, name: 'Gold Metalic Dress 1970s', price: '$68', tag: 'Just In', category: 'Fitted', color: 'Gold', img: GoldMetalicDress1970s },
    { id: 6, name: 'Red Pearl Dress 1980s', price: '$84', tag: 'Date Night', category: 'Fitted', color: 'Red', img: RedPearlDress1980s },
]

  const Dresses = () => {
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
              Lady Libs Dress Collection
            </h2>
            <p className="mt-3 text-sm sm:text-base text-yellow-50/85 max-w-xl mx-auto">
              Explore curated Dresses, soft vintage patterns, and timeless silhouettes.
            </p>
          </section>
  
          {/* Decade Vintage Dresses */}
          <section className="mt-14 rounded-3xl bg-purple-950/40 p-5 shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-semibold">Vintage Dresses</h3>
            <p className="mb-6 text-xs text-yellow-100/80">
              A blend of bold prints, essentials, and one-of-a-kind vintage dresses.
            </p>
  
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {decadeVintageDress.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-2xl bg-purple-900/70 p-4 shadow-lg ring-1 ring-purple-800/70 transition hover:-translate-y-1 hover:ring-yellow-200/80"
                >
                  {/* Image */}
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
                    <span className="font-bold text-yellow-50">{item.price}</span>
                    <button className="rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold hover:bg-emerald-400 transition">
                      View Item
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
  
          {/* Vintage Dresses */}
          <section className="mt-14 rounded-3xl bg-purple-950/40 p-5 shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-semibold">Long Skirts</h3>
            <p className="mb-6 text-xs text-yellow-100/80">
              Flowing silhouettes, and elegant vintage designs.
            </p>
  
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {vintageDresses.map((item) => (
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
  
            <div className="mt-6 flex justify-center">
              <button className="rounded-full border border-yellow-100/70 px-5 py-2 text-xs font-semibold hover:bg-purple-900/70 transition">
                Load more dresses
              </button>
            </div>
          </section>
  
        </div>
      </div>
    );
  };
  
  export default Dresses;
  