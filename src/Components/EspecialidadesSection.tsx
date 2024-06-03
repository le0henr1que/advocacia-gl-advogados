import { title } from "process";

export const SpecialtySection = () => {
  const dataInformation = [
    {
      title: "Direito Trabalhista",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum arcu nec augue tincidunt, et dapibus justo porta.",
      image: "./Image1.png",
    },
    {
      title: "Direito Civil",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum arcu nec augue tincidunt, et dapibus justo porta.",
      image: "./Image1.png",
    },
    {
      title: "Direitos Previdenciários",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum arcu nec augue tincidunt, et dapibus justo porta.",
      image: "./Image1.png",
    },
    {
      title: "Direitos do Consumidor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum arcu nec augue tincidunt, et dapibus justo porta.",
      image: "./Image1.png",
    },
  ];
  return (
    <section className="min-w-screen h-[600px] bg-neutral-0 py-[80px] ">
      <div className="w-10/12 mx-auto h-[150px] flex flex-col justify-start text-left ">
        <div
          className="
            flex 
            flex-col 
            w-6/12 
            text-left
            xl:text-left
            xl:w-6/12 
            lg:text-left  
            lg:w-6/12 
            md:text-left  
            sm:text-center
            sm:w-full
            xs:text-center
            xs:w-full
          "
        >
          <div className="flex gap-2 items-center">
            <p
              className="
                  text-[14px] 
                  text-brand-600 
                  font-red-hat 
                  text-body-5   
                  xl:text-left
                  lg:text-left  
                  md:text-left  
                  sm:text-center
                  sm:w-full
                  xs:text-center
                  xs:w-full
                "
            >
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

      <div className="grid mx-auto max-w-full h-[320px] flex gap-10">
        {dataInformation.map((item) => (
          <div
            key={item.title}
            className="flex w-1/5 flex-col items-center h-[322px] p-3 gap-3 flex-grow border border-brand-600 rounded-md h-auto"
          >
            <div className="w-full">
              <img src={item.image} className="w-full" />
            </div>
            <div className="self-stretch text-[#913133] font-red-hat-display text-[18px] font-bold leading-[26px]">
              {item.title}
            </div>
            <div className="self-stretch text-[#151515] font-red-hat-display text-[14px] font-semibold leading-[26px]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
