import { useEffect, useState } from "react";
import { invitation } from "./data/invitationData";
import useScrollReveal from "./hooks/useScrollReveal";
import OpeningScene from "./components/OpeningScene";
import MusicControl from "./components/MusicControl";
import Countdown from "./components/Countdown";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { FamilyIntroduction, BlessingMessage, InvitationCard, EventDetails, VenueSection, FinalInvitation } from "./components/Sections";

export default function App() {
  const [opened, setOpened] = useState(false);
  useScrollReveal(opened);
  useEffect(() => { document.body.style.overflow = opened ? "" : "hidden"; }, [opened]);
  return (
    <>
      <OpeningScene onOpen={() => setOpened(true)} />
      <ThemeSwitcher />
      <MusicControl src={invitation.audioSrc} startSignal={opened} />
      <main>
        <FamilyIntroduction /><BlessingMessage /><InvitationCard />
        <Countdown /><EventDetails /><VenueSection /><FinalInvitation />
      </main>
    </>
  );
}
