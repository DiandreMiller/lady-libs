import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const [openSections, setOpenSections] = useState({
    shop: true,
    categories: true,
    collections: false,
    colors: false,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className="
        hidden md:flex
        h-[calc(100vh-4rem)]  /* adjust if your navbar height changes */
        w-64
        flex-col
        bg-purple-950/80
        border-r border-purple-700/50
        text-yellow-50
        backdrop-blur-xl
        sticky top-16
        shadow-xl shadow-purple-950/60
      "
    >
      {/* Brand header */}
      <div className="px-5 pt-5 pb-4 border-b border-purple-700/50">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/90 shadow-md shadow-purple-900/60">
            <span className="text-sm font-bold text-purple-950">LL</span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide">Lady Libs</p>
            <p className="text-[11px] text-yellow-200/70">
              Curated vintage &amp; home
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">

        {/* Main navigation */}
        <nav className="space-y-1 text-sm">
          <SidebarLink to="/" label="Home" active={isActive("/")} />
          <SidebarLink
            to="/inventory"
            label="Shop All"
            active={isActive("/inventory")}
          />
          <SidebarLink
            to="/aboutme"
            label="About Lady Libs"
            active={isActive("/aboutme")}
          />
          {/* Add more pages as you build them */}
        </nav>

        {/* SHOP SECTION (collapsible) */}
        <SidebarSection
          title="Shop"
          isOpen={openSections.shop}
          onToggle={() => toggleSection("shop")}
        >
          <div className="space-y-1 text-sm">
            <SidebarLink to="/inventory?sort=new" label="New Arrivals" />
            <SidebarLink to="/inventory?sort=popular" label="Best Sellers" />
            <SidebarLink to="/inventory?filter=one-of-one" label="One-of-One Finds" />
          </div>
        </SidebarSection>

        {/* CATEGORIES SECTION */}
        <SidebarSection
          title="Categories"
          isOpen={openSections.categories}
          onToggle={() => toggleSection("categories")}
        >
          <div className="space-y-1 text-sm pl-1">
            <SectionLabel>Clothing</SectionLabel>
            <SidebarMiniLink label="Dresses" />
            <SidebarMiniLink label="Tops" />
            <SidebarMiniLink label="Skirts" />
            <SidebarMiniLink label="Jackets" />
            <SidebarMiniLink label="Pants" />
            <SidebarMiniLink label="Sweaters" />

            <SectionLabel className="mt-3">Accessories</SectionLabel>
            <SidebarMiniLink label="Jewelry" />
            <SidebarMiniLink label="Bags" />
            <SidebarMiniLink label="Scarves" />
            <SidebarMiniLink label="Hats" />

            <SectionLabel className="mt-3">Home Decor</SectionLabel>
            <SidebarMiniLink label="Lamps" />
            <SidebarMiniLink label="Vases" />
            <SidebarMiniLink label="Mirrors" />
            <SidebarMiniLink label="Wall Art" />
          </div>
        </SidebarSection>

        {/* COLLECTIONS SECTION */}
        <SidebarSection
          title="Curated Collections"
          isOpen={openSections.collections}
          onToggle={() => toggleSection("collections")}
        >
          <div className="space-y-1 text-sm">
            <SidebarMiniLink label="Golden Hour Picks" />
            <SidebarMiniLink label="Cozy Home Vibes" />
            <SidebarMiniLink label="Bold &amp; Beautiful" />
            <SidebarMiniLink label="Soft Neutrals" />
          </div>
        </SidebarSection>

        {/* COLOR PALETTE SECTION */}
        <SidebarSection
          title="Shop by Color"
          isOpen={openSections.colors}
          onToggle={() => toggleSection("colors")}
        >
          <div className="space-y-1 text-sm">
            <SidebarColorPill label="Emerald Green" className="bg-emerald-500/70 text-yellow-50" />
            <SidebarColorPill label="Sunset Orange" className="bg-orange-400/80 text-yellow-50" />
            <SidebarColorPill label="Deep Purple" className="bg-purple-800/80 text-yellow-50" />
            <SidebarColorPill label="Warm Gold" className="bg-yellow-400/80 text-yellow-50" />
          </div>
        </SidebarSection>
      </div>

      {/* Small footer inside sidebar */}
      <div className="px-4 pb-4 pt-3 border-t border-purple-700/50 text-[11px] text-yellow-200/75">
        <p>© {new Date().getFullYear()} Lady Libs.</p>
        <p className="text-yellow-200/60">Curated with love, one piece at a time.</p>
      </div>
    </aside>
  );
};

/* ---------- Reusable Subcomponents ---------- */

const SidebarLink = ({ to, label, active }) => {
  const baseClasses =
    "block rounded-full px-3 py-2 transition text-left";
  const inactiveClasses =
    "text-yellow-100/80 hover:bg-purple-900/70 hover:text-white";
  const activeClasses =
    "bg-emerald-500 text-purple-950 font-semibold shadow-md shadow-purple-900/60";

  return (
    <Link
      to={to}
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
    >
      {label}
    </Link>
  );
};

const SidebarSection = ({ title, isOpen, onToggle, children }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="
          flex w-full items-center justify-between
          text-xs font-semibold uppercase tracking-[0.18em]
          text-yellow-200/80
        "
      >
        <span>{title}</span>
        <span className="text-[10px]">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && <div className="mt-2 space-y-1">{children}</div>}
    </div>
  );
};

const SectionLabel = ({ children, className = "" }) => (
  <p className={`text-[11px] font-semibold text-yellow-200/80 ${className}`}>
    {children}
  </p>
);

const SidebarMiniLink = ({ label }) => (
  <button
    type="button"
    className="
      block w-full text-left text-[13px]
      text-yellow-100/80 hover:text-white
      hover:bg-purple-900/60 rounded-full px-3 py-1 transition
    "
  >
    {label}
  </button>
);

const SidebarColorPill = ({ label, className = "" }) => (
  <button
    type="button"
    className={`
      flex w-full items-center justify-between
      rounded-full px-3 py-1.5 text-[12px]
      text-purple-950 font-semibold
      shadow-sm shadow-purple-900/60
      hover:brightness-110 transition
      ${className}
    `}
  >
    <span>{label}</span>
    <span className="h-2.5 w-2.5 rounded-full bg-purple-950/60" />
  </button>
);

export default Sidebar;