/**
 * Real-time Store Hours & Port Augusta Time Utility
 * Timezone: Australia/Adelaide (Port Augusta, South Australia)
 * Trading Hours: 7 Days a week · 8:00 AM - 8:00 PM (08:00 - 20:00)
 */

export interface StoreStatus {
  isOpen: boolean;
  hours: number;
  minutes: number;
  timeFormatted: string;
  timezoneLabel: string;
  statusTextEn: string;
  statusTextHi: string;
  statusDetailEn: string;
  statusDetailHi: string;
  badgeClass: string;
  queueTextEn: string;
  queueTextHi: string;
}

export function getPortAugustaDate(baseDate: Date = new Date()): {
  hours: number;
  minutes: number;
  day: number;
  timeFormatted: string;
  timezoneLabel: string;
} {
  // Format into Australia/Adelaide timezone
  const dtf = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Adelaide",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    weekday: "short",
    timeZoneName: "short",
  });

  const parts = dtf.formatToParts(baseDate);
  const hourPart = parts.find((p) => p.type === "hour");
  const minutePart = parts.find((p) => p.type === "minute");
  const tzPart = parts.find((p) => p.type === "timeZoneName");

  const hours = hourPart ? parseInt(hourPart.value, 10) : 12;
  const minutes = minutePart ? parseInt(minutePart.value, 10) : 0;
  const timezoneLabel = tzPart ? tzPart.value : "ACST";

  // 12-hour formatted time
  const dtf12 = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Adelaide",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const timeFormatted = dtf12.format(baseDate);

  // Day of week
  const dayStr = parts.find((p) => p.type === "weekday")?.value || "Mon";
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = Math.max(0, days.indexOf(dayStr));

  return { hours, minutes, day, timeFormatted, timezoneLabel };
}

export function getStoreStatus(baseDate: Date = new Date()): StoreStatus {
  const { hours, minutes, timeFormatted, timezoneLabel } = getPortAugustaDate(baseDate);

  // Open between 8:00 AM (08:00) and 8:00 PM (20:00)
  const totalMinutes = hours * 60 + minutes;
  const openMinutes = 8 * 60; // 08:00
  const closeMinutes = 20 * 60; // 20:00

  const isOpen = totalMinutes >= openMinutes && totalMinutes < closeMinutes;

  if (isOpen) {
    const minutesLeft = closeMinutes - totalMinutes;
    const hoursLeft = Math.floor(minutesLeft / 60);
    const minsRemainder = minutesLeft % 60;

    let closingText = "Closes at 8:00 PM";
    if (hoursLeft === 0) {
      closingText = `Closing soon in ${minsRemainder}m`;
    } else if (hoursLeft === 1) {
      closingText = `Closes in 1h ${minsRemainder}m`;
    }

    return {
      isOpen: true,
      hours,
      minutes,
      timeFormatted,
      timezoneLabel,
      statusTextEn: `Open Now · ${closingText}`,
      statusTextHi: "अभी खुला है · रात 8:00 बजे तक",
      statusDetailEn: "Workshop open at 18 Domeyer Ct · Express 15-30m repairs active",
      statusDetailHi: "18 डोमेयर कोर्ट पर वर्कशॉप खुला है · 15-30 मिनट एक्सप्रेस सर्विस",
      badgeClass: "bg-emerald-500",
      queueTextEn: "🟢 Current Queue: Express 15-30m Repairs Active Today",
      queueTextHi: "🟢 वर्तमान स्थिति: आज 15-30 मिनट में त्वरित रिपेयर उपलब्ध",
    };
  } else {
    return {
      isOpen: false,
      hours,
      minutes,
      timeFormatted,
      timezoneLabel,
      statusTextEn: "Closed Now · Opens at 8:00 AM",
      statusTextHi: "अभी बंद है · सुबह 8:00 बजे खुलेगा",
      statusDetailEn: "Book online 24/7 for 1st priority slot tomorrow morning",
      statusDetailHi: "ऑनलाइन बुकिंग 24/7 चालू है · कल सुबह पहली प्राथमिकता",
      badgeClass: "bg-amber-400",
      queueTextEn: "🌙 Online Bookings Active: Guaranteed First Priority Tomorrow at 8 AM",
      queueTextHi: "🌙 ऑनलाइन बुकिंग चालू: कल सुबह 8 बजे पहली प्राथमिकता गारंटी",
    };
  }
}
