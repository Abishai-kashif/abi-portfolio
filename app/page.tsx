import Grid from "@/components/grid";
import dynamic from "next/dynamic";
import {
  CollaboratorsNetworkSection,
  HeroSection,
} from "../components/sections";
import Footer from "@/components/layout/footer";

// Dynamic imports for below-fold sections
const ShowcaseOfWorkSection = dynamic(
  () => import('@/components/sections').then(mod => mod.ShowcaseOfWorkSection),
  { loading: () => <div className="min-h-[400px]" /> }
);

const TechnicalProficienciesSection = dynamic(
  () => import('@/components/sections').then(mod => mod.TechnicalProficienciesSection),
  { loading: () => <div className="min-h-[300px]" /> }
);

const MyOfferingsSection = dynamic(
  () => import('@/components/sections').then(mod => mod.MyOfferingsSection),
  { loading: () => <div className="min-h-[300px]" /> }
);

const GetInTouchSection = dynamic(
  () => import('@/components/sections').then(mod => mod.GetInTouchSection),
  { loading: () => <div className="min-h-[400px]" /> }
);

const MyOnlinePresenceSection = dynamic(
  () => import('@/components/sections').then(mod => mod.MyOnlinePresenceSection),
  { loading: () => <div className="min-h-[300px]" /> }
);

const MilestonesRecognitionsSection = dynamic(
  () => import('@/components/sections').then(mod => mod.MilestonesRecognitionsSection),
  { loading: () => <div className="min-h-[400px]" /> }
);

const FrequentlyAskedQuestionsSection = dynamic(
  () => import('@/components/sections').then(mod => mod.FrequentlyAskedQuestionsSection),
  { loading: () => <div className="min-h-[400px]" /> }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-purple/25 overflow-x-hidden">
      <div className="relative overflow-hidden">
        <Grid className="absolute inset-0 w-full h-full opacity-30 z-[-2]" />
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
      <Footer />
    </main>
  );
}
