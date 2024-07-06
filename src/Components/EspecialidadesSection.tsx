import { title } from "process";

export const SpecialtySection = () => {
  const dataInformation = [
    {
      title: "Direito do Trabalho",
      description: `O direito do trabalho trata das regras e leis que regem a relação entre empregadores e empregados. Ele
estabelece direitos e deveres para ambas as partes. Seu principal objetivo é garantir condições dignas e justas
de forma protetiva ao trabalhador, sem deixar de assegurar direitos igualitários. `,
      image: "./Image1.png",
    },
    {
      title: "Direito Cível",
      description: `O direito civil é a legislação que regula as relações privadas entre pessoas, sejam físicas (indivíduos) ou
jurídicas (empresas). Isso inclui, entre outros, questões como contratos, propriedade e responsabilidade por
danos.`,
      image: "./Image1.png",
    },
    {
      title: "Direito do Consumidor",
      description: `O direito do consumidor é a legislação que protege os direitos dos consumidores, ou seja, as pessoas que
compram produtos ou contratam serviços. É o direito que assegura que os consumidores recebam produtos
de qualidade, sejam bem informados sobre o que estão comprando, e sejam protegidos contra práticas
comerciais abusivas ou lesivas, como por exemplo negativação indevida do nome e realização de
empréstimos não contratados, entre outros.`,
      image: "./Image1.png",
    },
    {
      title: "Direito Previdenciário",
      description: `O direito previdenciário é a legislação que trata da seguridade social, ou seja, dos direitos relacionados à
aposentadoria, pensões, auxílios e benefícios sociais que as pessoas recebem quando não podem trabalhar,
seja por idade, invalidez, ou outros motivos.`,
      image: "./Image1.png",
    },
  ];
  return (
    <div className="w-full bg-neutral-0 py-[80px] flex justify-center">
      <div className="flex flex-col justify-start text-left gap-5 hero-cards">
        <div className="">
          <h2 className="text-[40px] font-red-hat-display font-bold text-brand-600 text-3xl leading-tight mb-12 title-areas">
            Áreas de Atuação
          </h2>
        </div>

        <div className="flex gap-6 mt-[14px] cards-areas w-full">
          {dataInformation.map((item) => (
            <div
              key={item.title}
              className="flex flex-col h-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-[12px] border border-brand-600 border-solid rounded-md"
            >
              <img src={item.image} className="w-full mb-[12px]" />

              <h2 className="text-left text-[#913133] font-red-hat-display text-[18px] font-bold leading-[26px]">
                {item.title}
              </h2>
              <p className="text-left text-[#151515] font-red-hat-display text-[14px] font-semibold leading-[26px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
