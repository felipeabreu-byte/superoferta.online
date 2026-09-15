"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

const names = [
  "Maria S.", "João P.", "Ana Carolina", "Carlos E.", "Juliana M.",
  "Fernanda L.", "Ricardo T.", "Amanda R.", "Lucas V.", "Camila B.",
  "José V.", "Marcia S.", "Ana P.", "Carlos L.", "Juliana M.",
  "Mauricio J."

];
const locations = [
  "São Paulo", "Rio de Janeiro", "Curitiba", "Belo Horizonte", "Porto Alegre",
  "Salvador", "Fortaleza", "Brasília", "Recife", "Florianópolis", "Maringá", "Londrina", "Rio Verde"
];

export function RecentSalesPopup() {
  const [visible, setVisible] = useState(false);
  const [buyer, setBuyer] = useState("");
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    // Initial delay before first popup
    const initialDelay = setTimeout(() => {
      showRandomBuyer();
    }, 500);

    return () => clearTimeout(initialDelay);
  }, []);

  const showRandomBuyer = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomMinutes = Math.floor(Math.random() * 8) + 1;

    setBuyer(`${randomName} de ${randomLocation}`);
    setTimeAgo(`Há ${randomMinutes} min`);
    setVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setVisible(false);

      // Schedule next popup between 3 and 7 seconds
      const nextDelay = Math.floor(Math.random() * 4000) + 3000;
      setTimeout(showRandomBuyer, nextDelay);
    }, 5000);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-5 zoom-in-95 fade-in duration-500 w-[92%] max-w-sm">
      <div className="bg-white border-2 border-green-500/20 shadow-[0_8px_30px_rgb(0,209,84,0.2)] rounded-2xl p-4 flex items-center gap-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50/50 to-transparent animate-pulse" />
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-600 z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative shrink-0 z-10">
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20" />
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center relative shadow-sm">
            <CheckCircle2 className="w-7 h-7" />
          </div>
        </div>

        <div className="z-10 flex-1">
          <p className="text-sm font-extrabold text-zinc-900 leading-tight line-clamp-1">
            {buyer}
          </p>
          <p className="text-[13px] font-medium text-zinc-600 mt-0.5">
            acabou de comprar!
          </p>
          <p className="text-[10px] font-bold text-green-600 uppercase tracking-wider mt-1">
            {timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
}
