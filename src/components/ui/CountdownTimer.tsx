"use client";

import { useState, useEffect } from "react";
import { Timer } from "lucide-react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 14,
    seconds: 59,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const DURATION = (2 * 60 * 60) + (14 * 60) + 59; // 2h 14m 59s in seconds
    const storageKey = "superoferta_timer_end";
    
    let endTime = localStorage.getItem(storageKey);
    
    if (!endTime || parseInt(endTime) < Date.now()) {
      endTime = (Date.now() + DURATION * 1000).toString();
      localStorage.setItem(storageKey, endTime);
    }

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = parseInt(endTime!) - now;

      if (difference <= 0) {
        // Reset if expired
        const newEndTime = (Date.now() + DURATION * 1000).toString();
        localStorage.setItem(storageKey, newEndTime);
        return { hours: 2, minutes: 14, seconds: 59 };
      }

      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center justify-center bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-2xl p-4 my-6 shadow-sm animate-pulse-slow">
      <div className="flex items-center gap-2 text-red-600 dark:text-red-500 mb-2">
        <Timer className="w-5 h-5 animate-bounce" />
        <span className="font-bold uppercase tracking-wider text-sm">Esta oferta expira em:</span>
      </div>
      <div className="flex items-center gap-3 text-3xl md:text-4xl font-black text-red-700 dark:text-red-400 font-mono tracking-tighter">
        <div className="flex flex-col items-center">
          <span>{format(timeLeft.hours)}</span>
          <span className="text-[0.6rem] font-sans font-bold uppercase text-red-500/80">Horas</span>
        </div>
        <span className="pb-4">:</span>
        <div className="flex flex-col items-center">
          <span>{format(timeLeft.minutes)}</span>
          <span className="text-[0.6rem] font-sans font-bold uppercase text-red-500/80">Min</span>
        </div>
        <span className="pb-4">:</span>
        <div className="flex flex-col items-center">
          <span>{format(timeLeft.seconds)}</span>
          <span className="text-[0.6rem] font-sans font-bold uppercase text-red-500/80">Seg</span>
        </div>
      </div>
    </div>
  );
}
