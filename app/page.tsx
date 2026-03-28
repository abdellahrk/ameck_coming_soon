import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { VisualProof } from "@/components/sections/visual-proof";
import { Pain } from "@/components/sections/pain";
import { Solution } from "@/components/sections/solution";
import { TrustSystem } from "@/components/sections/trust-system";
import { SocialProof } from "@/components/sections/social-proof";
import { Urgency } from "@/components/sections/urgency";
import { WaitlistForm } from "@/components/sections/waitlist-form";
import { Education } from "@/components/sections/education";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <VisualProof />
        <Pain />
        <Solution />
        <TrustSystem />
        <SocialProof />
        <Urgency />
        <WaitlistForm />
        <Education />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
