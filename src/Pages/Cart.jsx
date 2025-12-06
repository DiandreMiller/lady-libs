// src/Pages/CartPage.tsx
import { useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";

import { useCart } from "../context/CartContext";
import { makeAbsoluteImageUrl } from "../utils/helpers";
import PickupTimeSelector from "../Components/PickUpTimeSelector";

import EmptyCart from "../assets/EmptyCart.png";

function formatPhone(input) {
  const numbers = input.replace(/\D/g, "");

  if (numbers.length <= 3) {
    return `(${numbers}`;
  }

  if (numbers.length <= 6) {
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
  }

  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
    6,
    10
  )}`;
}

const money = (cents) => `$${(cents / 100).toFixed(2)}`;

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateItemQty, removeItem, clearCart, subtotalCents } =
    useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [pickup, setPickup] = useState("");
  const [date, setDate] = useState("");

  const API_BASE = (
    import.meta.env.VITE_REACT_APP_BACKEND_API
  )?.replace(/\/+$/, "");

  const isEmpty = items.length === 0;

  const serviceFeeCents = useMemo(
    () => (isEmpty ? 0 : 0),
    [isEmpty]
  );
  const totalCents = subtotalCents + serviceFeeCents;

  const handleProceed = async (event) => {
    event.preventDefault();

    if (isEmpty) return;
    if (!name.trim() || !email.trim() || !phoneNumber.trim()) {
      alert("Please enter your name, email, and phone number.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        customer: { name, email, phoneNumber, pickup },
        items: items.map((item) => ({
          productId: item.productId,
          qty: item.quantity,
        })),
      };

      await axios.post(`${API_BASE}/api/orders`, payload);

      alert(
        "Rental request sent! Order is not confirmed until we contact you via phone. We’ll follow up to confirm your order."
      );
      clearCart();
      navigate("/inventory");
    } catch (err) {
      console.error(err);
      alert("We couldn’t submit your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950 text-yellow-50 py-8">
      {/* Full-width content block so it lines up with the sidebar */}
      <div className="w-full rounded-3xl bg-purple-950/70 backdrop-blur-xl border border-purple-700/40 shadow-xl shadow-purple-950/70 px-4 sm:px-6 lg:px-10 py-6">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-yellow-200/70">
              Your Selections
            </p>
            <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Your Cart
            </h1>
          </div>

          {!isEmpty && (
            <button
              onClick={clearCart}
              className="rounded-full border border-rose-400/40 bg-rose-500/10 px-4 py-2 text-xs font-semibold text-rose-200 hover:bg-rose-500/20 transition"
            >
              Clear Cart
            </button>
          )}
        </header>

        {/* Empty state */}
        {isEmpty ? (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center py-12">
            <div className="space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Your cart is feeling a little lonely.
              </h2>
              <p className="text-sm sm:text-base text-yellow-100/85 leading-relaxed">
                You haven&apos;t added any Lady Libs pieces just yet. Browse the
                collection to find one-of-one gems, cozy home accents, and
                vintage treasures curated with love.
              </p>
              <button
                onClick={() => navigate("/inventory")}
                className="mt-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 px-6 py-3 text-sm font-semibold text-purple-950 shadow-lg shadow-purple-950/60 hover:brightness-110 transition"
              >
                Shop the Collection
              </button>
              <p className="text-xs text-yellow-200/70">
                *Items are not reserved until your rental is confirmed via
                phone.*
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-3xl bg-purple-900/60 border border-purple-700/60 shadow-[0_25px_90px_rgba(0,0,0,0.75)] flex items-center justify-center overflow-hidden hover:scale-110 cursor-pointer">
                <img
                  onClick={() => navigate("/inventory")}
                  src={EmptyCart}
                  alt="Lady Libs empty cart illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Items list */}
            <ul className="divide-y divide-purple-800/70 rounded-2xl bg-purple-950/60 border border-purple-800/60 overflow-hidden">
              {items.map((it) => (
                <li
                  key={it.productId}
                  className="py-4 px-4 sm:px-6 flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    to={`/product/${it.productId}`}
                    className="flex-shrink-0 w-24 h-24 rounded-xl border border-purple-700/70 bg-purple-900/60 overflow-hidden flex items-center justify-center"
                  >
                    {it.coverImagePath ? (
                      <img
                        src={makeAbsoluteImageUrl(it.coverImagePath, API_BASE)}
                        alt={it.name}
                        className="max-h-24 object-contain"
                      />
                    ) : (
                      <div className="text-xs text-yellow-200/70">
                        No image
                      </div>
                    )}
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <Link
                        to={`/product/${it.productId}`}
                        className="text-lg font-semibold text-emerald-300 hover:underline"
                      >
                        {it.name}
                      </Link>
                      <div className="text-right">
                        <div className="font-semibold text-amber-300">
                          {money(it.pricePerRentalCents)}
                        </div>
                        <button
                          onClick={() => removeItem(it.productId)}
                          className="mt-1 text-xs text-rose-300 hover:text-rose-200"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <label className="text-sm text-yellow-100/85">
                        Qty
                      </label>
                      <select
                        value={it.quantity}
                        onChange={(e) =>
                          updateItemQty(it.productId, Number(e.target.value))
                        }
                        className="rounded-full border border-purple-700/70 bg-purple-900/80 px-3 py-1 text-yellow-50 text-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/40 outline-none"
                      >
                        {Array.from(
                          { length: Math.min(it.maxQty ?? 20, 20) },
                          (_, i) => i + 1
                        ).map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>

                      <span className="ml-auto text-sm text-yellow-100/80">
                        Item total:{" "}
                        <span className="ml-1 font-semibold text-emerald-300">
                          {money(it.pricePerRentalCents * it.quantity)}
                        </span>
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Contact / request details */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="mb-2 block text-sm text-yellow-100/85">
                  Your Name
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(DOMPurify.sanitize(event.target.value))
                  }
                  className="w-full rounded-xl border border-purple-700/70 bg-purple-900/70 px-4 py-2 text-yellow-50 placeholder:text-purple-300/60 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/30 outline-none"
                  placeholder="Jane Doe"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-yellow-100/85">
                  Email
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(DOMPurify.sanitize(event.target.value))
                  }
                  className="w-full rounded-xl border border-purple-700/70 bg-purple-900/70 px-4 py-2 text-yellow-50 placeholder:text-purple-300/60 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/30 outline-none"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-yellow-100/85">
                  Phone Number
                </span>
                <input
                  type="text"
                  value={phoneNumber}
                  maxLength={14}
                  onChange={(e) => {
                    const sanitized = DOMPurify.sanitize(e.target.value);
                    setPhoneNumber(formatPhone(sanitized));
                  }}
                  className="w-full rounded-xl border border-purple-700/70 bg-purple-900/70 px-4 py-2 text-yellow-50 placeholder:text-purple-300/60 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/30 outline-none"
                  placeholder="(000) 000-0000"
                />
              </label>

              {/* Pickup Date */}
              <label className="block">
                <span className="mb-2 block text-sm text-yellow-100/85">
                  Pickup Date
                </span>
                <input
                  type="date"
                  value={
                    pickup && pickup.includes("T")
                      ? pickup.split("T")[0]
                      : date
                  }
                  onChange={(e) => {
                    const newDate = e.target.value;
                    setDate(newDate);
                    if (pickup && pickup.includes("T")) {
                      const timePart = pickup.split("T")[1];
                      setPickup(`${newDate}T${timePart}`);
                    } else if (newDate) {
                      setPickup(`${newDate}T09:00`);
                    }
                  }}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-xl border border-purple-700/70 bg-purple-900/70 px-4 py-2 text-yellow-50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300/30 outline-none"
                />
              </label>

              {/* Time picker */}
              <PickupTimeSelector pickup={pickup} setPickup={setPickup} />
            </div>

            {/* Terms of Service notice */}
            <div className="text-xs text-yellow-200/80 mt-4 mb-2">
              By placing this order, you agree to our{" "}
              <Link
                to="/terms&conditions"
                className="text-emerald-300 hover:underline font-medium"
              >
                Terms of Service
              </Link>
              .
            </div>

            {/* Summary */}
            <div className="mt-8 border-t border-purple-800/70 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1 text-sm">
                <div className="flex items-center justify-between gap-8">
                  <span className="text-yellow-100/85">Subtotal</span>
                  <span className="font-semibold">
                    {money(subtotalCents)}
                  </span>
                </div>
                {serviceFeeCents > 0 && (
                  <div className="flex items-center justify-between gap-8">
                    <span className="text-yellow-100/85">Service Fee</span>
                    <span className="font-semibold">
                      {money(serviceFeeCents)}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between gap-8 text-lg pt-2 border-t border-purple-800/70 mt-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-emerald-300">
                    {money(totalCents)}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/inventory")}
                  className="rounded-full px-6 py-3 border border-purple-700/70 text-yellow-50 hover:bg-purple-900/70 transition"
                >
                  Continue Shopping
                </button>

                <button
                  disabled={loading}
                  onClick={handleProceed}
                  className="rounded-full px-6 py-3 font-semibold text-purple-950 bg-gradient-to-r from-emerald-400 to-emerald-300 border border-emerald-200/70 shadow-lg shadow-purple-950/60 hover:brightness-110 transition disabled:opacity-60"
                >
                  {loading ? "Submitting…" : "Submit Rental Request"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Cart;