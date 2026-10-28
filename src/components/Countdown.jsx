import useCountdown from "../hooks/useCountdown";
import { invitation as i } from "../data/invitationData";

const pad = (n) => String(n).padStart(2, "0");

export default function Countdown() {
  const c = useCountdown(i.date, i.time);
  const units = [
    { label: "Days", val: c.days },
    { label: "Hours", val: c.hours },
    { label: "Minutes", val: c.minutes },
    { label: "Seconds", val: c.seconds },
  ];

  return (
    <section className="sec ivory countdown-section" aria-labelledby="cd-h">
      <div className="cd-ornament">🎀 ✦ 🎀</div>
      <p className="eyebrow">Counting Down The Moments</p>
      <h2 id="cd-h" className="section-serif-heading">Until We Celebrate Our Baby Girl</h2>
      <div className="rule" />

      {c.phase === "before" ? (
        <div className="countdown-grid" role="timer" aria-label="Countdown to Naming Ceremony">
          {units.map(({ label, val }) => (
            <div key={label} className="cd-card">
              <span className="cd-num">{pad(val)}</span>
              <span className="cd-label">{label}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="lead">
          {c.phase === "today"
            ? "Today we celebrate and name our darling little princess! 🎉"
            : "Thank you for showering our baby girl with your precious love and blessings! 💕"}
        </p>
      )}

      <p className="cd-footer-note">
        Join us on <strong>{i.dateLabel}</strong> to shower her with blessings &amp; love
      </p>
    </section>
  );
}
