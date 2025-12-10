//Pages/Skirts

//short skirts
import ShortAfricanBlueGreenSkirt from '../assets/VintageShortSkirts/ShortAfricanBlueGreenSkirt.png';
import ShortAfricanFittedSkirt from '../assets/VintageShortSkirts/ShortAfricanFittedSkirt.png';
import ShortAfricanGreenBlueCirclesSkirt from '../assets/VintageShortSkirts/ShortAfricanGreenBlueCirclesSkirt.png';
import ShortAfricanOrangeRedGreenSkirt from '../assets/VintageShortSkirts/ShortAfricanOrangeRegGreenSkirt.png';
import ShortAfricanOrangeSkirt from '../assets/VintageShortSkirts/ShortAfricanOrangeSkirt.png';
import ShortAfricanPinkOrangeGreenSkirt from '../assets/VintageShortSkirts/ShortAfricanPinkOrangeGreenSkirt.png';
import ShortBlackSkirt from '../assets/VintageShortSkirts/ShortBlackSkirt.png';
import ShortBlueJeansSkirt from '../assets/VintageShortSkirts/ShortBlueJeansSkirt.png';
import ShortBrownSkirt from '../assets/VintageShortSkirts/ShortBrownSkirt.png';
import ShortPlaidYellowSkirt from '../assets/VintageShortSkirts/ShortPlaidYellowSkirt.png';
import ShortRedSkirt from '../assets/VintageShortSkirts/ShortRedSkirt.png';
import ShortWhiteSkirt from '../assets/VintageShortSkirts/ShortWhiteSkirt.png';

//long skirts
import AfricanBlueTreeDress from '../assets/VintageLongSkirt/AfricanBlueTreeDress.png';
import AfricanDressYellowGreenBlue from '../assets/VintageLongSkirt/AfricanDressYellowGreenBlue.png';
import AfricanFlowerFlowySkirt from '../assets/VintageLongSkirt/AfricanFlowerFlowySkirt.png';
import AfricanSkirtRedAndBlue from '../assets/VintageLongSkirt/AfricanSkirtRedAndBlue.png';
import AfricanSkirtRedAndYellow from '../assets/VintageLongSkirt/AfricanSkirtRedAndYellow.png';
import AfricanSkirtYellowBluePurple from '../assets/VintageLongSkirt/AfricanSkirtYellowBluePurple.png';
import PinkPokadotSkirt from '../assets/VintageLongSkirt/PinkPokadotSkirt.png';
import RosesSkirt from '../assets/VintageLongSkirt/RosesSkirt.png';
import StripeSkirt from '../assets/VintageLongSkirt/StripeSkirt.png';
import SunflowerSkirt from '../assets/VintageLongSkirt/SunflowerSkirt.png';
import WhitePokadotSkirt from '../assets/VintageLongSkirt/WhitePokadotSkirt.png';
import YellowSkirt from '../assets/VintageLongSkirt/YellowSkirt.png';


/* --- Inventory Data --- */
const shortSkirts = [
    { id: 1, name: 'Blue/Green African Print Skirt', price: '$45', tag: 'New', category: 'African Short | Blue/Green', color: 'Blue/Green', img: ShortAfricanBlueGreenSkirt },
    { id: 2, name: 'Fitted African Skirt', price: '$40', tag: 'Classic', category: 'African Short | Multi', color: 'Multi', img: ShortAfricanFittedSkirt },
    { id: 3, name: 'Green/Blue Circle Skirt', price: '$42', tag: 'Limited', category: 'African Short | Green/Blue', color: 'Green/Blue', img: ShortAfricanGreenBlueCirclesSkirt },
    { id: 4, name: 'Orange/Red/Green African Skirt', price: '$46', tag: 'New Drop', category: 'African Short | Orange/Red/Green', color: 'Orange/Red/Green', img: ShortAfricanOrangeRedGreenSkirt },
    { id: 5, name: 'Orange African Skirt', price: '$38', tag: 'Just In', category: 'African Short | Orange', color: 'Orange', img: ShortAfricanOrangeSkirt },
    { id: 6, name: 'Pink/Orange/Green African Skirt', price: '$44', tag: 'Bright', category: 'African Short | Pink/Orange/Green', color: 'Pink/Orange/Green', img: ShortAfricanPinkOrangeGreenSkirt },
    { id: 7, name: 'Black Classic Skirt', price: '$32', tag: 'Classic', category: 'Short | Black', color: 'Black', img: ShortBlackSkirt },
    { id: 8, name: 'Blue Jeans Skirt', price: '$35', tag: 'Denim', category: 'Short | Denim', color: 'Denim Blue', img: ShortBlueJeansSkirt },
    { id: 9, name: 'Brown Short Skirt', price: '$34', tag: 'Neutral', category: 'Short | Brown', color: 'Brown', img: ShortBrownSkirt },
    { id: 10, name: 'Plaid Yellow Skirt', price: '$30', tag: 'Plaid', category: 'Short | Yellow Plaid', color: 'Yellow', img: ShortPlaidYellowSkirt },
    { id: 11, name: 'Red Short Skirt', price: '$33', tag: 'Bold', category: 'Short | Red', color: 'Red', img: ShortRedSkirt },
    { id: 12, name: 'White Short Skirt', price: '$28', tag: 'Classic', category: 'Short | White', color: 'White', img: ShortWhiteSkirt },
  ];
  
  const longSkirts = [
    { id: 1, name: 'Blue African Tree Print Skirt', price: '$55', tag: 'New', category: 'African Long | Blue', color: 'Blue', img: AfricanBlueTreeDress },
    { id: 2, name: 'Yellow/Green/Blue African Dress Skirt', price: '$58', tag: 'Vibrant', category: 'African Long | Yellow/Green/Blue', color: 'Multi', img: AfricanDressYellowGreenBlue },
    { id: 3, name: 'Floral African Flowy Skirt', price: '$60', tag: 'Flowy', category: 'African Long | Floral', color: 'Multi', img: AfricanFlowerFlowySkirt },
    { id: 4, name: 'Red/Blue African Skirt', price: '$52', tag: 'Limited', category: 'African Long | Red/Blue', color: 'Red/Blue', img: AfricanSkirtRedAndBlue },
    { id: 5, name: 'Red/Yellow African Skirt', price: '$50', tag: 'Bright', category: 'African Long | Red/Yellow', color: 'Red/Yellow', img: AfricanSkirtRedAndYellow },
    { id: 6, name: 'Yellow/Blue/Purple African Skirt', price: '$56', tag: 'Vibrant', category: 'African Long | Yellow/Blue/Purple', color: 'Multi', img: AfricanSkirtYellowBluePurple },
    { id: 7, name: 'Pink Polkadot Skirt', price: '$42', tag: 'Soft', category: 'Long | Pink', color: 'Pink', img: PinkPokadotSkirt },
    { id: 8, name: 'Roses Print Skirt', price: '$48', tag: 'Floral', category: 'Long | Floral', color: 'Red/Pink', img: RosesSkirt },
    { id: 9, name: 'Stripe Pattern Skirt', price: '$40', tag: 'Striped', category: 'Long | Stripe', color: 'Multi', img: StripeSkirt },
    { id: 10, name: 'Sunflower Skirt', price: '$45', tag: 'Bright', category: 'Long | Yellow', color: 'Yellow', img: SunflowerSkirt },
    { id: 11, name: 'White Polkadot Skirt', price: '$38', tag: 'Classic', category: 'Long | White', color: 'White', img: WhitePokadotSkirt },
    { id: 12, name: 'Yellow Long Skirt', price: '$37', tag: 'Soft', category: 'Long | Yellow', color: 'Yellow', img: YellowSkirt },
  ];
  
  /* --- Component --- */
  const Skirts = () => {
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
              Lady Libs Skirt Collection
            </h2>
            <p className="mt-3 text-sm sm:text-base text-yellow-50/85 max-w-xl mx-auto">
              Explore curated short and long skirts, featuring bold African prints, soft vintage patterns, and timeless silhouettes.
            </p>
          </section>
  
          {/* Short Skirts */}
          <section className="mt-14 rounded-3xl bg-purple-950/40 p-5 shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-semibold">Short Skirts</h3>
            <p className="mb-6 text-xs text-yellow-100/80">
              A blend of bold prints, essentials, and one-of-a-kind minis.
            </p>
  
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {shortSkirts.map((item) => (
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
  
          {/* Long Skirts */}
          <section className="mt-14 rounded-3xl bg-purple-950/40 p-5 shadow-xl backdrop-blur-md">
            <h3 className="text-lg font-semibold">Long Skirts</h3>
            <p className="mb-6 text-xs text-yellow-100/80">
              Flowing silhouettes, African prints, and elegant vintage designs.
            </p>
  
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {longSkirts.map((item) => (
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
                Load more long skirts
              </button>
            </div>
          </section>
  
        </div>
      </div>
    );
  };
  
  export default Skirts;
  