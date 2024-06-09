import { motion, useAnimation } from "framer-motion";
import { Element, useScroll } from "react-scroll";
import React from "react";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0 },
};

export const Person = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div
      ref={ref}
      className="w-full flex flex-col justify-center items-center mt-[104px] bg-[#913133] "
    >
      <motion.div
        id="first"
        className="flex w-full items-center justify-center  gap-[204px]"
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-[#913133] h-full  text-white flex flex-col justify-center items-center">
          <div className="w-[480px] flex flex-col gap-[22px]">
            <div>
              {" "}
              <div className="body-medium-sm text-white flex items-center gap-[13px]">
                <hr className="border border-white  border-solid w-[126px] border-[1px]" />
                SOBRE AS ADVOGADAS
              </div>
              <div className="primary-heading-lg">Dra. Gabriela Ribeiro</div>
            </div>

            <div className="body-regular-xxl">
              OAB/SC 45.332 Sócia-fundadora
            </div>
            <div className="body-regular-lg">
              Luane Ribeiro é uma advogada de destaque, reconhecida por sua
              dedicação e excelência no campo jurídico. Com uma carreira sólida,
              Luane conquistou o respeito e a confiança daqueles que buscam seus
              serviços jurídicos. Seu compromisso com o cliente é evidente em
              seu atendimento personalizado, sempre dedicado às necessidades
              individuais de cada um. Ela prioriza uma comunicação clara e
              transparente em todas as etapas do processo legal, garantindo que
              seus clientes estejam sempre bem informados e confiantes.
            </div>
          </div>
        </div>
        <motion.div
          className="h-full flex-shrink-0"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/doctor1.png" />
        </motion.div>
      </motion.div>
      <div
        id="second"
        className="flex  items-center justify-between gap-[204px]"
      >
        <div className="h-full flex-shrink-0">
          <img src="/doctor2.png" />
        </div>
        <div className="bg-[#913133] h-full w-full text-white flex flex-col justify-center items-center">
          <div className="w-[480px] flex flex-col gap-[22px]">
            <div>
              {" "}
              <div className="body-medium-sm text-white flex items-center gap-[13px]">
                <hr className="border border-white  border-solid w-[126px] border-[1px]" />
                SOBRE AS ADVOGADAS
              </div>
              <div className="primary-heading-lg">Dra. Gabriela Ribeiro</div>
            </div>

            <div className="body-regular-xxl">
              OAB/SC 45.332 Sócia-fundadora
            </div>
            <div className="body-regular-lg">
              Luane Ribeiro é uma advogada de destaque, reconhecida por sua
              dedicação e excelência no campo jurídico. Com uma carreira sólida,
              Luane conquistou o respeito e a confiança daqueles que buscam seus
              serviços jurídicos. Seu compromisso com o cliente é evidente em
              seu atendimento personalizado, sempre dedicado às necessidades
              individuais de cada um. Ela prioriza uma comunicação clara e
              transparente em todas as etapas do processo legal, garantindo que
              seus clientes estejam sempre bem informados e confiantes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
