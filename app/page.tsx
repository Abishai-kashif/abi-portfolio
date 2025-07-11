import Grid from "@/components/grid"
import {
  CollaboratorsNetworkSection,
  EndorsementsFeedbackSection,
  FrequentlyAskedQuestionsSection,
  GetInTouchSection,
  HeroSection,
  MilestonesRecognitionsSection,
  MyOfferingsSection,
  MyOnlinePresenceSection,
  ShowcaseOfWorkSection,
  TechnicalProficienciesSection
} from "../components/sections"



export default function Home() {
  return (
    <main className="min-h-screen bg-dark-purple/25 overflow-x-hidden">
      <div className="relative">
        <Grid className="absolute inset-0 w-full h-full opacity-40 z-[-2]" />
        <HeroSection />
        <CollaboratorsNetworkSection />
      </div>
      {/* <EndorsementsFeedbackSection /> */}
      <ShowcaseOfWorkSection />
      <TechnicalProficienciesSection />
      <MyOfferingsSection />
      <GetInTouchSection />
      <MyOnlinePresenceSection />
      <MilestonesRecognitionsSection />
      <FrequentlyAskedQuestionsSection />
    </main>
  );
}
