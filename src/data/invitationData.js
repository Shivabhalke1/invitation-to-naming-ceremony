// Single source of truth. Edit here; nothing else needs to change.
export const invitation = {
  mother: "Vaishnavi",
  father: "Anand",
  babyName: "",                 // e.g. "Aarohi" -> appears in the intro and invitation card
  event: "Naming Ceremony",
  date: { year: 2026, month: 11, day: 1 },   // month is 1-12
  dateLabel: "Sunday, 1 November 2026",
  time: null,                   // e.g. { hour: 11, minute: 0, label: "11:00 AM" }
  venue: "Bhavi Function Hall",
  location: "Hallikhed B",
  directionsUrl: "",            // paste a verified Google Maps link to show "Get Directions"
  audioSrc: "",                 // e.g. "/audio/blessing.mp3" (file placed in public/audio/)
};
export const names = `${invitation.mother} & ${invitation.father}`;
