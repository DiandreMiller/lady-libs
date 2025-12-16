import axios from 'axios';
import { useState, useEffect } from 'react';

const Notification = () => {

    const [notification, setNotification] = useState({});
    const API_BASE = import.meta.env.VITE_REACT_APP_BACKEND_API;

    useEffect(() => {
        const getChristmasMessage = async () => {
            try {
                const message = await axios.get(`${API_BASE}/api/notification`);
                const data = message.data;
                setNotification(data);
            } catch (err) {
                console.error('Message Missing',err);
            }
        }

        getChristmasMessage()
    },[])

    console.log('Notification:', notification);

    return (
        <>
          {notification?.title && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <div className="relative w-full max-w-md mx-4 rounded-2xl bg-gradient-to-b from-[#2a1a14] to-[#1a0f0b] shadow-2xl border border-amber-300/30">
                
                {/* Decorative glow */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-amber-400/20 blur-3xl" />
      
                {/* Content */}
                <div className="relative p-8 text-center">
                  <h2 className="mb-3 font-serif text-2xl tracking-wide text-amber-200">
                    {notification.title}
                  </h2>
      
                  <p className="mb-6 text-base text-amber-100/90 leading-relaxed">
                    {notification.message}
                  </p>
      
                  <button
                    onClick={() => setNotification({})}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#1a0f0b]">
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      );
}

export default Notification