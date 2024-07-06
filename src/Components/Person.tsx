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
              <div className="primary-heading-lg">Dra. Gabriela Silva</div>
            </div>

            <div className="body-regular-xxl">Sócia-fundadora</div>
            <div className="body-regular-lg">
              Advogada. Bacharel em Direito pelo Centro Universitário Fieo -
              Unifieo. Pós-Graduada em Direito do Trabalho pela mesma
              universidade. Advogou por quatro anos na área de Direito do
              Trabalho no escritório Robortella Advogados Associados,
              representando empresas como Shell, Globo, White Martins, Método,
              entre outras. Em 2010, fundou seu próprio escritório, com ênfase
              na advocacia trabalhista. Além disso, ministra palestras sobre
              Direito do Trabalho na Ordem dos Advogados do Brasil (OAB).
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
              <div className="primary-heading-lg">Dra. Luciene Silva</div>
            </div>

            <div className="body-regular-xxl">Sócia</div>
            <div className="body-regular-lg">
              Advogada. Bacharel em Direito pelo Centro Universitário Fie -
              Unifie. Pós-graduanda em Direito Civil e Processo Civil no Centro
              Universitário Fieo e Direito Previdenciário na Faculdade Legale.
              Conta com vasta experiência em advocacia, trabalhando no
              escritório desde 2010. Em 2019, tornou-se sócia do escritório,
              ampliando o alcance e a expertise. Advoga com ênfase nas áreas do
              Direito Previdenciário, Direito do Consumidor e Direito Civil.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
