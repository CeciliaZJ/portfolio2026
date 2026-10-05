import { CafeHero } from "@/components/cafe-hero";
import { PortfolioSection } from "@/components/portfolio-section";
import { SiteHeader } from "@/components/site-header";
import { SocialsSection } from "@/components/socials-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <CafeHero />
        <PortfolioSection />
        <SocialsSection />
      </main>
    </>
  );
}
