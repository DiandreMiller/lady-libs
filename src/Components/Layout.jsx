// src/layouts/DefaultLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../Commons/Navbar";
import Footer from "../Commons/Footer";
import Sidebar from "../Components/Sidebar";

export function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main area: sidebar + page content */}
      <main className="flex-1 pt-20">
        <div className="flex">
          {/* Desktop sidebar (hidden on mobile inside component) */}
          <Sidebar />

          {/* Page content */}
          <section className="flex-1 px-4 sm:px-6 lg:px-8 pb-10">
            <Outlet />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export function BareLayout() {
  return <Outlet />; // no nav/footer
}