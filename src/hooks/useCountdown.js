import { useEffect, useState } from "react";
// Counts down to the event start in the visitor's local timezone.
// With no time configured, the target is 00:00 on the event date.
export default function useCountdown(d, time) {
  const calc = () => {
    const start = new Date(d.year, d.month - 1, d.day, time ? time.hour : 0, time ? time.minute : 0).getTime();
    const end = new Date(d.year, d.month - 1, d.day + 1).getTime();
    const now = Date.now();
    if (now < start) {
      const t = Math.floor((start - now) / 1000);
      return { phase: "before", days: Math.floor(t / 86400), hours: Math.floor((t % 86400) / 3600), minutes: Math.floor((t % 3600) / 60), seconds: t % 60 };
    }
    return { phase: now < end ? "today" : "after", days: 0, hours: 0, minutes: 0, seconds: 0 };
  };
  const [v, setV] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setV(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return v;
}
