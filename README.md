# Naming Ceremony Invitation — Vaishnavi & Anand
React + Vite + CSS. No backend, database or API; deploys as a static site.

## Run
    npm install
    npm run dev        # local preview
    npm run build      # static output in dist/ (upload anywhere)

## Update later (all in `src/data/invitationData.js`)
- **Baby's name:** set `babyName: "Name"`.
- **Ceremony time:** set `time: { hour: 11, minute: 0, label: "11:00 AM" }`. Until then the countdown targets 00:00 on 31 Oct 2026 (visitor's local time) and the details section reads "To be announced".
- **Directions:** paste a verified map link into `directionsUrl`; the button appears only when set.
- **Music:** put your own licensed file in `public/audio/` and set `audioSrc: "/audio/yourfile.mp3"`. Controls appear only when set; playback starts after "Open Invitation" or via the ♪ button.

Reduced-motion preferences are respected. Fonts load from Google Fonts with serif/cursive fallbacks.
