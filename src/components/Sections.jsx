import { invitation as i, names } from "../data/invitationData";
import { Flower, Petals } from "./Ornaments";

export function FamilyIntroduction() {
  return (
    <section className="sec burgundy intro-section" aria-labelledby="fam-h">
      <Flower className="bg-flower a" /><Flower className="bg-flower b" />
      
      <div className="baby-sparkle-stars">🎀 ⭐ ✦ ⭐ 🎀</div>
      <p className="eyebrow playful-eyebrow">Ten Tiny Fingers · Ten Tiny Toes</p>

      {/* Parents' Names */}
      <h1 id="fam-h" className="royal-names">
        {names}
      </h1>

      <p className="invitation-subtitle playful-subtitle">
        are over the moon and joyfully invite you to celebrate the
      </p>

      {/* Ceremony Banner */}
      <div className="ceremony-tag-wrapper">
        <span className="ceremony-accent-line" />
        <h2 className="script ceremony-title">Naming Ceremony</h2>
        <span className="ceremony-accent-line" />
      </div>

      <p className="ceremony-for">
        of their darling baby girl!
        {i.babyName && <span className="baby-mention"> · Welcoming our little princess <strong>{i.babyName}</strong></span>}
      </p>

      <div className="baby-sweet-tag">
        <span>🎀 Sweet little bows, happy giggles &amp; endless love! 🍼</span>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore the celebration</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
}

export function BlessingMessage() {
  return (
    <section className="sec ivory" aria-labelledby="bl-h">
      <p className="eyebrow reveal">Little Princess · Boundless Love</p>
      <h2 id="bl-h" className="section-serif-heading reveal d1">Our Sweet Baby Girl</h2>
      <div className="rule reveal d1" />
      <p className="lead reveal d2">
        A sweet little angel has stepped into our lives, bringing boundless sunshine, soft baby giggles, and an abundance of joy.
        As we gather with family and cherished friends to bestow our baby girl with a special name and seek your divine blessings,
        your presence will make this milestone truly magical!
      </p>
      <div className="blessing-signoff reveal d3">
        <p className="signoff-quote">“A baby girl is a blessing of love, a touch of heaven, and a gift forever.”</p>
        <p className="signoff-by">— Lovingly, <strong>{names}</strong></p>
      </div>
    </section>
  );
}

export function InvitationCard() {
  return (
    <section className="sec burgundy" aria-labelledby="card-h">
      <Petals />
      <article className="card reveal">
        <Flower className="tl" /><Flower className="tr" /><Flower className="bl" /><Flower className="br" />
        <p className="eyebrow">Cordially Invited</p>
        <h2 id="card-h" className="serif-title">The Naming Ceremony</h2>
        <div className="rule" />
        
        <p className="card-hosts-label">Hosted with immense joy by</p>
        <p className="royal-card-names">{names}</p>
        
        {i.babyName ? (
          <p className="card-line">to name and welcome our darling princess <strong>{i.babyName}</strong></p>
        ) : (
          <p className="card-line">to name and bless their sweet baby girl</p>
        )}
        
        <div className="card-ornament-divider">🎀 ❖ 🎀</div>
        
        <p className="card-line date-time">
          <strong>{i.dateLabel}</strong>{i.time ? ` · ${i.time.label}` : ""}
        </p>
        <p className="card-venue">{i.venue}</p>
        <p className="card-line">{i.location}</p>
      </article>
    </section>
  );
}

export function EventDetails() {
  const rows = [
    ["Occasion", `${i.event} (Baby Girl)`],
    ["Hosted By", `${names} (Parents)`],
    ["Date", i.dateLabel],
    ["Time", i.time ? i.time.label : "Morning Auspicious Muhurtham"],
    ["Venue", i.venue],
    ["Location", i.location],
  ];
  return (
    <section className="sec ivory" aria-labelledby="ev-h">
      <p className="eyebrow reveal">Ceremony Schedule</p>
      <h2 id="ev-h" className="section-serif-heading reveal d1">Event Details</h2>
      <dl className="details reveal d2">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function VenueSection() {
  return (
    <section className="sec burgundy" aria-labelledby="ve-h">
      <p className="eyebrow reveal">Where We Gather</p>
      <h2 id="ve-h" className="section-serif-heading gold reveal d1">{i.venue}</h2>
      <p className="lead reveal d2">{i.location}</p>
      {i.directionsUrl && (
        <a className="btn reveal d3" href={i.directionsUrl} target="_blank" rel="noopener noreferrer">
          Get Directions
        </a>
      )}
    </section>
  );
}

export function FinalInvitation() {
  return (
    <section className="sec burgundy final" aria-labelledby="fin-h">
      <Flower className="bg-flower a" /><Flower className="bg-flower b" />
      <p className="eyebrow reveal">Warm Welcome Awaits You</p>
      <h2 id="fin-h" className="section-serif-heading gold reveal d1">
        Your Presence Is Her Sweetest Blessing
      </h2>
      <p className="lead reveal d2">
        We eagerly await your gracious presence to bless our little girl, share delicious feast, and celebrate this beautiful day together.
      </p>
      <footer className="final-family-signoff reveal d3">
        <span className="signoff-label">Lovingly Invited By</span>
        <strong className="signoff-names">{names}</strong>
        <span className="signoff-family">&amp; Family</span>
      </footer>
    </section>
  );
}
