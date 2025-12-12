//Pages/Pants.jsx

// Vintage Business Pants
import BlackBusinessPants from '../assets/VintageBusinessPants/BlackBusinessPants.png';
import BlueBusinessPants from '../assets/VintageBusinessPants/BlueBusinessPants.png';
import GreenBusinessPants from '../assets/VintageBusinessPants/GreenBusinessPants.png';
import OrangeBusinessPants from '../assets/VintageBusinessPants/OrangeBusinessPants.png';
import PinkBusinessPants from '../assets/VintageBusinessPants/PinkBusinessPants.png';
import YellowWomenPants from '../assets/VintageBusinessPants/YellowWomenPants.png';


// Vintage Jeans
import BlackRippedJeans from '../assets/VintageJeans/BlackRippedJeans.png';
import HighWaistBlueJeans from '../assets/VintageJeans/HighWaistBlueJeans.png';
import OrangeJeans from '../assets/VintageJeans/OrangeJeans.png';
import PinkStretchyJeans from '../assets/VintageJeans/PinkStretchyJeans.png';
import PurpleJeans from '../assets/VintageJeans/PurpleJeans.png';
import YellowJeans from '../assets/VintageJeans/YellowJeans.png';

//Leggings
import BlackLeggings from '../assets/VintageLeggings/BlackLeggings.png';
import DarkGreyLeggings from '../assets/VintageLeggings/DarkGreyLeggings.png';
import LightBlueLeggings from '../assets/VintageLeggings/LightBlueLeggings.png';
import LightGreyLeggings from '../assets/VintageLeggings/LightGreyLeggings.png';
import PinkLeggings from '../assets/VintageLeggings/PinkLeggings.png';
import RedLeggings from '../assets/VintageLeggings/RedLeggings.png';

//Sweatpants
import GreenSweatpants from '../assets/VintageSweatpants/GreenSweatpants.png';
import OrangeSweatpants from '../assets/VintageSweatpants/OrangeSweatpants.png';
import PinkSweatPants from '../assets/VintageSweatpants/PinkSweatPants.png';
import PurpleSweatpants from '../assets/VintageSweatpants/PurpleSweatpants.png';
import SoftYellowSweatpants from '../assets/VintageSweatpants/SoftYellowSweatpants.png';
import TurquoiseSweatpants from '../assets/VintageSweatpants/TurquoiseSweatpants.png';


const businessPants = [
    { id: 1, name: 'Black Business Pants', price: '$67', tag: 'New', category: 'Business Pants', color: 'Black', img: BlackBusinessPants },
    { id: 2, name: 'Blue Business Pants', price: '$65', tag: 'Classic', category: 'Business Pants', color: 'Blue', img: BlueBusinessPants },
    { id: 3, name: 'Green Business Pants', price: '$72', tag: 'Limited', category: 'Business Pants', color: 'Green', img: GreenBusinessPants },
    { id: 4, name: 'Orange Business Pants', price: '$69', tag: 'New Drop', category: 'Business Pants', color: 'Orange', img: OrangeBusinessPants },
    { id: 5, name: 'Pink Business Pants', price: '$58', tag: 'Just In', category: 'Business Pants', color: 'Pink', img: PinkBusinessPants },
    { id: 6, name: 'Yellow Women Pants', price: '$68', tag: 'Festive', category: 'Business Pants', color: 'Yellow', img: YellowWomenPants },
  ];

const jeans = [
    { id: 1, name: 'Black Ripped Jeans', price: '$24', tag: 'New', category: 'Casaul', color: 'Black', img: BlackRippedJeans },
    { id: 2, name: 'High Waist Blue Jeans', price: '$27', tag: 'Classic', category: 'Casaul', color: 'Blue', img: HighWaistBlueJeans },
    { id: 3, name: 'Orange Jeans', price: '$22', tag: 'Limited', category: 'Casaul', color: 'Orange', img: OrangeJeans },
    { id: 4, name: 'Pink Stretchy Jeans', price: '$31', tag: 'New Drop', category: 'Casaul', color: 'Pink', img: PinkStretchyJeans },
    { id: 5, name: 'Purple Jeans', price: '$28', tag: 'Just In', category: 'Casaul', color: 'Purple', img: PurpleJeans },
    { id: 6, name: 'Yellow Jeans', price: '$34', tag: 'Casual', category: 'Casaul', color: 'Yellow', img: YellowJeans },
]

const leggings = [
    { id: 1, name: 'Black Leggings', price: '$65', tag: 'New', category: 'Workout/Casual', color: 'Black', img: BlackLeggings },
    { id: 2, name: 'Dark Grey Leggings', price: '$60', tag: 'Classic', category: 'Workout/Casual', color: 'Dark Grey', img: DarkGreyLeggings },
    { id: 3, name: 'Light Blue Leggings', price: '$72', tag: 'Limited', category: 'Workout/Casual', color: 'Light Blue', img: LightBlueLeggings },
    { id: 4, name: 'Light Grey Leggings', price: '$66', tag: 'New Drop', category: 'Workout/Casual', color: 'Light Grey', img: LightGreyLeggings },
    { id: 5, name: 'Pink Leggings', price: '$48', tag: 'Just In', category: 'Workout/Casual', color: 'Pink', img: PinkLeggings },
    { id: 6, name: 'Red Leggings', price: '$64', tag: 'Festive', category: 'Workout/Casual', color: 'Red', img: RedLeggings },
  ];

  const sweatpants = [
    { id: 1, name: 'Green Sweatpants', price: '$45', tag: 'New', category: 'Sweatpants', color: 'Green', img: GreenSweatpants },
    { id: 2, name: 'Orange Sweatpants', price: '$40', tag: 'Classic', category: 'Sweatpants', color: 'Orange', img: OrangeSweatpants },
    { id: 3, name: 'Pink Sweatpants', price: '$52', tag: 'Limited', category: 'Sweatpants', color: 'Pink', img: PinkSweatPants },
    { id: 4, name: 'Purple Sweatpants', price: '$46', tag: 'New Drop', category: 'Sweatpants', color: 'Purple', img: PurpleSweatpants },
    { id: 5, name: 'Soft Yellow Sweatpants', price: '$38', tag: 'Just In', category: 'Sweatpants', color: 'Yellow', img: SoftYellowSweatpants },
    { id: 6, name: 'Turquoise Sweatpants', price: '$44', tag: 'Festive', category: 'Sweatpants', color: 'Turquoise', img: TurquoiseSweatpants },
  ];

  import { useState } from 'react';

  const Pants = () => {

    const [openLoadMore, setOpenLoadMore] = useState(false);

    const openLoadMoreItems = () => {

    }

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
              Explore curated Pants, soft vintage patterns, and timeless silhouettes.
            </p>
          </section>
  
          {/* Business Pants */}
          <section className="mt-14 rounded-3xl bg-purple-950/40 p-5 shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-semibold">Business Pants</h3>
            <p className="mb-6 text-xs text-yellow-100/80">
              A blend of bold prints, essentials, and one-of-a-kind business pants.
            </p>
  
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {businessPants.map((item) => (
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
  
          {/* Jeans */}
          <section className="mt-14 rounded-3xl bg-purple-950/40 p-5 shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-semibold">Jeans</h3>
            <p className="mb-6 text-xs text-yellow-100/80">
              Flowing silhouettes, and elegant vintage designs.
            </p>
  
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {jeans.map((item) => (
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

            {/* Sweatpants  */}
          <section className="mt-14 rounded-3xl bg-purple-950/40 p-5 shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-semibold">Sweatpants</h3>
            <p className="mb-6 text-xs text-yellow-100/80">
              A blend of bold prints, essentials, and one-of-a-kind sweatpants.
            </p>
  
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sweatpants.map((item) => (
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
  
        </div>
        <div className="mt-6 flex justify-center">
              <button className="rounded-full border border-yellow-100/70 px-5 py-2 text-xs font-semibold hover:bg-purple-900/70 transition">
                Load more pants
              </button>
            </div>
      </div>
    );
  };
  
  export default Pants;
  