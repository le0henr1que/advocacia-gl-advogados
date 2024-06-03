import Image from "next/image";
import Layer from "../../public/24HoursLayer.svg";

export const HeroBanner = () => {
  return (
    <section className="h-[600px] w-screen bg-brand-600">
      <div className="w-10/12 mx-auto h-[600px] bg-brand-600 flex justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center h-full gap-24 text-tons-white">
          <h1 className="text-[42px] font-bold leading-[50px]">
            GL Advogadas Associadas: Direitos Civis e Familiares Especializado
          </h1>
          <p className="text-[22px] leading-[30px]">
            Somos especialistas em BPC/LOAS e Auxilios. Nossa missão é garantir
            que você receba o suporte do Estado que merece.
          </p>
          <div className="flex gap-16 font-bold">
            <button className="w-[155px] h-[48px] text-brand-600 rounded-md border-2 p-4 border-tons-white bg-tons-white">
              Fale conosco
            </button>
            <button className="w-[155px] h-[48px] text-tons-white rounded-md border-2 border-tons-white p-4 bg-transparent">
              Sobre nós
            </button>
          </div>
          <div className="flex items-center text-tons-white gap-4">
            <Image
              src={Layer}
              height={20}
              width={20}
              alt="Ícone indicando 24 horas."
            />
            <p>Atendimento 24 horas, online ou presencial.</p>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-end items-center">
          <img
            src={"./heroBannerWomen.svg"}
            className="absolute w-[900px] h-11/12"
          />
        </div>
      </div>
    </section>
  );
};
