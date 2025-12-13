//Pages/WallArt.jsx

//Vintage WallArt
import BlackMusic from '../assets/VintageWallArt/BlackMusic.png';
import BlackWomanFlower from '../assets/VintageWallArt/BlackWomanFlower.png';
import BlackWomenReading from '../assets/VintageWallArt/BlackWomenReading.png';
import Cats from '../assets/VintageWallArt/Cats.png';
import LibbyFlowerGirl from '../assets/VintageWallArt/LibbyFlowerGirl.png';
import VintageBlackSwan from '../assets/VintageWallArt/VintageBlackSwan.png';


const vintageWallArt = [
    { id: 1, name: 'Black Music', price: '$66', tag: 'New', category: 'Wall Art', color: null, img: BlackMusic },
    { id: 2, name: 'Black Woman Flower', price: '$62', tag: 'Classic', category: 'Wall Art', color: null, img: BlackWomanFlower },
    { id: 3, name: 'Black Women Reading', price: '$61', tag: 'Limited', category: 'Wall Art', color: null, img: BlackWomenReading },
    { id: 4, name: 'Cats', price: '$68', tag: 'New Drop', category: 'Wall Art', color: null, img: Cats },
    { id: 5, name: 'Libby Flower Girl', price: '$62', tag: 'Just In', category: 'Wall Art', color: null, img: LibbyFlowerGirl },
    { id: 6, name: 'Vintage Black Swan', price: '$71', tag: 'Exclusive', category: 'Wall Art', color: null, img: VintageBlackSwan },
  ];


  const WallArt  = () => {
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
              Lady Libs Wall Art Collection
            </h2>
            <p className="mt-3 text-sm sm:text-base text-yellow-50/85 max-w-xl mx-auto">
              Explore curated Wall Art, beautiful, unique patterns, and timeless art.
            </p>
          </section>
  
          {/* Vintage Wall Art */}
          <section className="mt-14 rounded-3xl bg-purple-950/40 p-5 shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-semibold">Unique Wall Art</h3>
            <p className="mb-6 text-xs text-yellow-100/80">
              Elegant vintage designs.
            </p>
  
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {vintageWallArt.map((item) => (
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
                Load more Wall Art
              </button>
            </div>
          </section>
  
        </div>
      </div>
    );
  };
  
  export default WallArt;
  