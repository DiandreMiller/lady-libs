// src/Components/Notification
import { useEffect, useState } from "react";
import notificationAPI from "../api/notification";
import BeHappy from "../assets/BeHappy1.MP4";


const Notification = () => {
  const [notification, setNotification] = useState(null);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const data = notificationAPI.getChristmasNotification();
    setNotification(data);
  }, []);

  if (!notification || notification.id === "Not today") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-lg rounded-3xl bg-purple-950/95 p-6 shadow-2xl border border-purple-700/40 text-center space-y-4">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-50">
          Merry Christmas Baby Girl, I Love You 💛
        </h2>

        {/* Video */}
        {!videoEnded && (
          <video
            src={BeHappy}
            controls
            playsInline
            onEnded={() => setVideoEnded(true)}
            className="w-full rounded-2xl border border-purple-700/40 shadow-lg"
          />
        )}

        {/* After video message */}
        {videoEnded && (
          <div className="space-y-3">
            <p className="text-lg text-yellow-100">
              Check back December 29th, 2025 ✨
            </p>

            <button
              onClick={() => setNotification(null)}
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2 text-sm font-semibold text-purple-950 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Notification;