"use client";

import { useEffect, useState } from "react";
import { getStoreStatus, StoreStatus } from "../../lib/store-hours";
import { useLanguage } from "../contexts/LanguageContext";

interface Props {
  variant?: "pill" | "banner" | "compact" | "card";
  className?: string;
}

export default function LiveStoreStatus({ variant = "pill", className = "" }: Props) {
  const { language } = useLanguage();
  const isHi = language === "hi";

  // Initialize with initial calculation, then tick every 30 seconds
  const [status, setStatus] = useState<StoreStatus>(() => getStoreStatus());

  useEffect(() => {
    setStatus(getStoreStatus());
    const interval = setInterval(() => {
      setStatus(getStoreStatus());
    }, 30000); // refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  if (variant === "compact") {
    return (
      <span className={`inline-flex items-center gap-1.5 ${className}`}>
        <span
          className={`w-2 h-2 rounded-full ${
            status.isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
          }`}
        />
        <span className="font-bold">
          {isHi ? status.statusTextHi : status.statusTextEn}
        </span>
      </span>
    );
  }

  if (variant === "banner") {
    return (
      <div
        className={`w-full py-2 px-4 rounded-xl border flex flex-wrap items-center justify-between gap-2 text-xs backdrop-blur-md transition-all ${
          status.isOpen
            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-200"
            : "bg-amber-500/10 border-amber-500/30 text-amber-950 dark:text-amber-200"
        } ${className}`}
      >
        <div className="flex items-center gap-2">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              status.isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-400"
            }`}
          />
          <span className="font-black uppercase tracking-wider">
            {isHi ? status.statusTextHi : status.statusTextEn}
          </span>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="font-medium hidden sm:inline">
            {isHi ? status.statusDetailHi : status.statusDetailEn}
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] font-bold opacity-90">
          <span>🕒 Port Augusta: {status.timeFormatted} {status.timezoneLabel}</span>
        </div>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={`p-4 rounded-2xl border transition-all ${
          status.isOpen
            ? "bg-emerald-50/80 dark:bg-emerald-950/20 border-emerald-500/30 text-slate-900 dark:text-white"
            : "bg-amber-50/80 dark:bg-amber-950/20 border-amber-500/30 text-slate-900 dark:text-white"
        } ${className}`}
      >
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                status.isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-400"
              }`}
            />
            <span className="text-xs font-black uppercase tracking-wider">
              {isHi ? status.statusTextHi : status.statusTextEn}
            </span>
          </div>
          <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">
            {status.timeFormatted} {status.timezoneLabel}
          </span>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300">
          {isHi ? status.statusDetailHi : status.statusDetailEn}
        </p>
      </div>
    );
  }

  // Default: "pill"
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-bold backdrop-blur-md shadow-xs transition-all ${
        status.isOpen
          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-300"
          : "bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-300"
      } ${className}`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          status.isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-400"
        }`}
      />
      <span>{isHi ? status.statusTextHi : status.statusTextEn}</span>
      <span className="opacity-50">·</span>
      <span className="font-mono text-[10px] opacity-80">
        {status.timeFormatted} {status.timezoneLabel}
      </span>
    </div>
  );
}
