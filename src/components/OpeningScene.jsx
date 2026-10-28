import { useState } from "react";
import { invitation as i, names } from "../data/invitationData";

export default function OpeningScene({ onOpen }) {
  const [opened, setOpened] = useState(false);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  if (gone) return null;

  const handleOpen = () => {
    if (fading) return;
    if (opened) {
      proceed();
      return;
    }
    setOpened(true);
    // After card glides out and presents itself, transition into celebration site
    setTimeout(() => {
      proceed();
    }, 3200);
  };

  const proceed = () => {
    setFading(true);
    onOpen();
    setTimeout(() => setGone(true), 1000);
  };

  return (
    <div
      className={`envelope-scene ${opened ? "envelope-opened" : ""} ${fading ? "scene-fading" : ""}`}
      role="dialog"
      aria-label="Royal Invitation Envelope"
    >
      {/* Floating Ambient Stardust Particles */}
      <div className="stardust-container" aria-hidden="true">
        {[...Array(24)].map((_, idx) => (
          <span
            key={idx}
            className="stardust"
            style={{
              left: `${(idx * 4.3 + 2) % 98}%`,
              top: `${(idx * 7.1 + 4) % 96}%`,
              animationDelay: `${(idx * 0.28) % 4}s`,
              animationDuration: `${3.2 + (idx % 4) * 1.2}s`,
            }}
          />
        ))}
      </div>

      <div className="scene-content">
        {/* Header Text */}
        <header className="scene-header">
          <p className="delivery-tag">✦ VAISHNAVI &amp; ANAND ✦</p>
          <h1 className="delivery-title">Invite You to Celebrate</h1>
        </header>

        {/* 3D Envelope Wrapper */}
        <div
          className="envelope-wrapper"
          onClick={handleOpen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleOpen(); }}
          aria-label="Open Royal Invitation Envelope"
        >
          {/* Particle Burst on Breaking Seal */}
          {opened && (
            <div className="wax-burst" aria-hidden="true">
              {[...Array(16)].map((_, i) => (
                <span
                  key={i}
                  className="burst-particle"
                  style={{
                    transform: `rotate(${i * 22.5}deg) translate(${40 + (i % 3) * 25}px)`,
                    animationDelay: `${(i % 4) * 0.04}s`,
                  }}
                />
              ))}
            </div>
          )}

          <div className="envelope">
            {/* Envelope Back Interior */}
            <div className="envelope-back" />

            {/* The Royal Gold Foil Invitation Card (Slides Up on Open) */}
            <div className="envelope-card">
              <div className="card-inner">
                <div className="card-top-ornament">❧ ❖ ☙</div>
                <p className="card-eyebrow">YOU ARE CORDIALLY INVITED</p>
                <h2 className="card-event">The {i.event}</h2>
                <div className="card-gold-rule" />
                <p className="card-names">{names}</p>
                <p className="card-baby-girl-note">Welcoming Our Baby Girl 🎀</p>
                <div className="card-date-badge">
                  <span>🗓 {i.dateLabel}</span>
                </div>
                <p className="card-venue">{i.venue}</p>
                <p className="card-location">{i.location}</p>
                <div className="card-tap-enter">
                  <span>Enter Celebration</span>
                  <span className="card-arrow">✦</span>
                </div>
              </div>
            </div>

            {/* Front Pocket of the Envelope */}
            <div className="envelope-pocket">
              <div className="pocket-fold-left" />
              <div className="pocket-fold-right" />
              <div className="pocket-fold-bottom" />
              <div className="pocket-gold-corner tl" />
              <div className="pocket-gold-corner tr" />
            </div>

            {/* Envelope Flap (Flips open in 3D) */}
            <div className="envelope-flap">
              <div className="flap-border-gold" />
            </div>

            {/* Golden Monogram Wax Seal */}
            <div className="wax-seal-wrapper">
              <div className="seal-halo-glow" />
              <div className="seal-gold-ribbon" />
              <img
                src="/images/wax_seal.jpg"
                alt="Embossed Golden Monogram Wax Seal V&A"
                className="wax-seal-img"
              />
              <span className="seal-sparkle-ping" />
            </div>
          </div>
        </div>

        {/* Footer Call to Action */}
        <footer className="scene-footer">
          <button
            className="open-envelope-btn"
            onClick={handleOpen}
            aria-label="View Invitation"
          >
            <span className="btn-shimmer-sweep" />
            <span className="btn-icon">💌</span>
            <span className="btn-label">
              {opened ? "Entering Celebration..." : "View Invitation"}
            </span>
            <span className="btn-sparkle">✨</span>
          </button>
          <p className="tap-hint">
            {opened ? "Unfolding your royal invitation..." : "Tap the golden wax seal or button to view"}
          </p>
        </footer>
      </div>
    </div>
  );
}
