import { useEffect, useRef, useState } from "react";
// Renders nothing unless an audio file is configured. Never autoplays before user interaction.
export default function MusicControl({ src, startSignal }) {
  const a = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (startSignal && a.current) a.current.play().then(() => setOn(true)).catch(() => setOn(false));
  }, [startSignal]);
  if (!src) return null;
  const toggle = () => {
    const el = a.current;
    if (el.paused) el.play().then(() => setOn(true)).catch(() => setOn(false));
    else { el.pause(); setOn(false); }
  };
  return (
    <>
      <audio ref={a} src={src} loop preload="none" />
      <button className="music" onClick={toggle} aria-pressed={on} aria-label={on ? "Pause background music" : "Play background music"}>{on ? "❚❚" : "♪"}</button>
    </>
  );
}
