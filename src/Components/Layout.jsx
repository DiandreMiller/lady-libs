// src/layouts/DefaultLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../Commons/Navbar";
import Footer from "../Commons/Footer";

export function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* If your Navbar is fixed, add top padding so content isn't hidden */}
      <Navbar />
      <main className="flex-1 pt-20"> 
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export function BareLayout() {
  return <Outlet />; // no nav/footer
}