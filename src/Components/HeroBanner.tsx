import { motion, useAnimation } from "framer-motion";
import { Element, useScroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0 },
};

export const HeroBanner = () => {
  const controls = useAnimation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(true);
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrolled) {
      controls.start("visible");
    }
  }, [controls, scrolled]);
  return (
    <div className="h-[600px] w-screen bg-brand-600 hero-banner-first">
      <div className="grid-default mx-auto h-[600px] bg-brand-600 flex justify-center items-center hero-banner ">
        <div className="w-full w-1/1 xl:w-1/2 flex flex-col justify-center h-full gap-24 text-tons-white">
          <h1 className="text-[42px] font-bold leading-[50px] xl:text-left text-center hero-banner-text">
            Dra. Gabriela e Dra. Luciene Advogadas Associadas
          </h1>
          <p className="text-[22px] leading-[30px] w-full text-center xl:text-left ">
            A nossa missão é defender seus direitos com dedicação, ética e
            excelência, sempre comprometidas com a justiça e a integridade,
            construindo confiança em cada caso, cujo objetivo é sempre o
            sucesso.
          </p>
          <div className="flex gap-16 font-bold justify-center xl:justify-start">
            <button className="w-[155px] h-[48px] text-brand-600 rounded-md border-2 p-4 border-tons-white bg-tons-white">
              Fale conosco
            </button>
            <button className="w-[155px] h-[48px] text-tons-white rounded-md border-2 border-tons-white p-4 bg-transparent">
              Sobre nós
            </button>
          </div>
          <div className="text-about flex flex-col items-center text-tons-white gap-4 justify-center xl:justify-start sm:text-center xl:flex-row flex-shrink-0">
            <img
              src="./24hoursLayer.svg"
              height={20}
              width={20}
              alt="Ícone indicando 24 horas."
              className="flex-shrink-0"
            />
            <p>
              Atendimento de segunda-feira a sexta-feira, das 9h às 18h. Exceto
              feriados.
            </p>
          </div>
        </div>
        <div className="hidden xl:flex xl:w-1/2 h-full flex-col justify-end items-center">
          <img
            src={"./heroBannerWomen.svg"}
            className="relative w-[900px] h-11/12"
          />
        </div>
      </div>
    </div>
  );
};
