import { useEffect, useState } from "react";

const themes = [
  { id: "blush-rose", name: "Blush Rose & Gold", emoji: "🌸", color: "#691a34", border: "#ffd3df" },
  { id: "royal-emerald", name: "Emerald & Rose Gold", emoji: "🌿", color: "#0d4230", border: "#f4a6b8" },
  { id: "pastel-lavender", name: "Lavender & Starlight", emoji: "💜", color: "#3d1f59", border: "#e5c158" },
  { id: "royal-burgundy", name: "Royal Burgundy", emoji: "🍷", color: "#460614", border: "#d4af37" },
];

export default function ThemeSwitcher() {
  const [current, setCurrent] = useState(() => {
    return localStorage.getItem("invitation_theme") || "blush-rose";
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", current);
    localStorage.setItem("invitation_theme", current);
  }, [current]);

  return (
    <div className="theme-switcher-wrapper">
      <button
        className="theme-toggle-btn"
        onClick={() => setOpen(!open)}
        aria-label="Change color palette"
        title="Choose color palette"
      >
        <span className="theme-toggle-icon">🎨</span>
        <span className="theme-toggle-label">Palette</span>
      </button>

      {open && (
        <div className="theme-popover" role="dialog" aria-label="Color palettes">
          <p className="theme-popover-title">Select Color Palette</p>
          <div className="theme-options-list">
            {themes.map((t) => (
              <button
                key={t.id}
                className={`theme-option-item ${current === t.id ? "active" : ""}`}
                onClick={() => {
                  setCurrent(t.id);
                  setOpen(false);
                }}
              >
                <span
                  className="theme-swatch"
                  style={{ background: t.color, borderColor: t.border }}
                />
                <span className="theme-item-name">
                  {t.emoji} {t.name}
                </span>
                {current === t.id && <span className="theme-check">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
