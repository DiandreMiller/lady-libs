// utils/timeSlots.ts
export const generateTimeSlots = () => {
    const slots = [];
    for (let h = 9; h <= 20; h++) {
      for (let m = 0; m < 60; m += 15) {
        const hh = String(h).padStart(2, "0");
        const mm = String(m).padStart(2, "0");
        slots.push(`${hh}:${mm}`);
      }
    }
    return slots;
  };