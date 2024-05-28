import vector from "./especialidadesVector.svg";

export const EspecialidadesSection = () => {
  return (
    <section className="min-w-screen h-[600px] bg-neutral-0 py-[80px]">
      <div className="w-10/12 mx-auto h-[150px] flex flex-col justify-start text-left">
        <div className="flex flex-col w-6/12">
          <div className="flex gap-2 items-center">
            <img src="./especialidadesVector.svg" />
            <p className="text-[14px] text-brand-600 font-red-hat text-body-5">
              EXCELÊNCIA
            </p>
          </div>
          <h2 className="text-[34px] font-red-hat-display font-bold text-brand-600 text-3xl leading-tight mb-12">
            Nossas especialidades
          </h2>
          <p className="text-[21px] font-red-hat-display text-neutral-1000 text-base font-normal leading-7">
            Somos especialistas em BPC/LOAS e Auxilios. Nossa missão é garantir
            que você receba o suporte do Estado que merece.
          </p>
        </div>
      </div>

      <div className="max-w-full h-[320px] flex gap-10"></div>
    </section>
  );
};
