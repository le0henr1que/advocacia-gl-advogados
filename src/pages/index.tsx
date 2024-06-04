import { SpecialtySection } from "../Components/EspecialidadesSection";
import { Header } from "../Components/Header";
import { HeroBanner } from "../Components/HeroBanner";
import { WhyChooseUs } from "../Components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <SpecialtySection />
      <WhyChooseUs />
    </>
  );
}
