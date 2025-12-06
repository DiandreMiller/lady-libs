// src/Components/PickupTimeSelector.tsx
import React from "react";
import { generateTimeSlots } from '../utils/timeSlot';


function formatTo12Hour(hhmm) {
  const [hourStr, minuteStr] = hhmm.split(":");
  let hour = parseInt(hourStr, 10);

  const period = hour >= 12 ? "PM" : "AM";
  if (hour === 0) hour = 12;        // 00:00 -> 12:00 AM
  else if (hour > 12) hour -= 12;   // 13:00 -> 1:00 PM

  return `${hour}:${minuteStr} ${period}`;
}

const PickupTimeSelector = ({
  pickup,
  setPickup,
}) => {
  // Ex: generate ["09:00", "09:15", ..., "21:00"]
  const slots = generateTimeSlots();

  // Use date from `pickup` if present, otherwise use today's date
  const datePart =
    pickup && pickup.includes("T")
      ? pickup.split("T")[0]
      : new Date().toISOString().split("T")[0];

  // For the <select> value we only care about the "HH:mm" part
  const currentTime =
    pickup && pickup.includes("T") ? pickup.split("T")[1].slice(0, 5) : "";

  const handleChange = (event) => {
    const selectedTime = event.target.value; // "HH:mm"
    if (!selectedTime) {
      setPickup("");
      return;
    }

    // Build ISO-like string: "YYYY-MM-DDTHH:mm"
    const nextPickup = `${datePart}T${selectedTime}`;
    setPickup(nextPickup);
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm text-slate-700">
        Preferred Pickup Time
      </label>
      <select
        value={currentTime}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-900
                   focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
      >
        <option value="">Select a time</option>
        {slots.map((slot) => (
          <option key={slot} value={slot}>
            {formatTo12Hour(slot)}
          </option>
        ))}
      </select>
      <p className="mt-1 text-xs text-slate-500">
        Rentals available between 9:00 AM and 9:00 PM.
      </p>
    </div>
  );
};

export default PickupTimeSelector;