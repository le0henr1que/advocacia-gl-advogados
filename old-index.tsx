import { useEffect, useState } from "react";
import { AboutUs } from "../Components/AboutUs";
import { SpecialtySection } from "../Components/EspecialidadesSection";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { HeroBanner } from "../Components/HeroBanner";
import { Person } from "../Components/Person";
import { Results } from "../Components/results";
import { WhyChooseUs } from "../Components/WhyChooseUs";
import { motion, useSpring } from "framer-motion";

export default function Home() {
  return (
    <>
      <>
        <Header />
        <HeroBanner />
        <SpecialtySection />
        <WhyChooseUs />
        {/* <AboutUs />
        <Person />
        <Results />
        <Footer /> */}
      </>
    </>
  );
}
