import { AboutUs } from "../Components/AboutUs";
import { SpecialtySection } from "../Components/EspecialidadesSection";
import { Header } from "../Components/Header";
import { HeroBanner } from "../Components/HeroBanner";
import { Person } from "../Components/Person";
import { WhyChooseUs } from "../Components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <SpecialtySection />
      <WhyChooseUs />
      <AboutUs />
      <Person />
    </>
  );
}
