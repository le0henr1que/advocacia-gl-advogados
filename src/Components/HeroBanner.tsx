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
    <div className="h-[600px] w-screen bg-brand-600">
      <div
        // ref={ref}
        className="grid-default mx-auto h-[600px] bg-brand-600 flex justify-center items-center"
      >
        <motion.div
          className="w-full w-1/1 xl:w-1/2 flex flex-col justify-center h-full gap-24 text-tons-white"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[42px] font-bold leading-[50px] xl:text-left text-center">
            GL Advogadas Associadas: Direitos Civis e Familiares Especializado
          </h1>
          <p className="text-[22px] leading-[30px] w-full text-center xl:text-left ">
            Somos especialistas em BPC/LOAS e Auxilios. Nossa missão é garantir
            que você receba o suporte do Estado que merece.
          </p>
          <div className="flex gap-16 font-bold justify-center xl:justify-start">
            <button className="w-[155px] h-[48px] text-brand-600 rounded-md border-2 p-4 border-tons-white bg-tons-white">
              Fale conosco
            </button>
            <button className="w-[155px] h-[48px] text-tons-white rounded-md border-2 border-tons-white p-4 bg-transparent">
              Sobre nós
            </button>
          </div>
          <div className="flex flex-col items-center text-tons-white gap-4 justify-center xl:justify-start sm:text-center xl:flex-row flex-shrink-0">
            <img
              src="./24hoursLayer.svg"
              height={20}
              width={20}
              alt="Ícone indicando 24 horas."
              className="flex-shrink-0"
            />
            <p>Atendimento 24 horas, online ou presencial.</p>
          </div>
        </motion.div>
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
