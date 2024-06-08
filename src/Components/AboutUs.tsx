export const AboutUs = () => {
  return (
    <section className="grid-default mt-[89px] flex justify-between gap-[45px] items-start">
      <div className="flex justify-center flex-shrink-0 ">
        <img src="./office.png" />
        <div className="w-[406px] h-[78px] rounded-[8px] border-[9px] border-white absolute bg-white mt-[460px]">
          <div className="w-full h-full rounded-[8px] bg-[#913133] text-white flex justify-center items-start gap-[45px] p-[8px] p-[14px] p-[15px] p-[29px]">
            <div className="flex flex-col items-center justify-center ">
              <div className="secondary-heading-lg">50+</div>
              <div className="body-regular-sm">Clientes </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="secondary-heading-lg">50+</div>
              <div className="body-regular-sm">Clientes </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="secondary-heading-lg">50+</div>
              <div className="body-regular-sm">Clientes </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="secondary-heading-lg">50+</div>
              <div className="body-regular-sm">Clientes </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="body-medium-sm text-[#913133] flex items-center gap-[13px]">
          <hr className="border border-[#913133]  border-solid w-[126px] border-[1px]" />
          O ESCRITÓRIO
        </div>

        <div className="primary-heading-md text-[#913133]">Sobre nós</div>
        <div className="text-[#151B20] body-regular-xl mt-[12px] text-left">
          A GL Advogadas é uma firma jurídica comprometida com a excelência e a
          inovação no campo do direito. Nossa equipe é formada por profissionais
          apaixonados e dedicados, que buscam sempre oferecer soluções jurídicas
          sob medida para nossos clientes. Com uma abordagem centrada no cliente
          e uma ampla gama de experiência em diversas áreas do direito, estamos
          prontos para enfrentar os desafios mais complexos e garantir os
          melhores resultados para aqueles que confiam em nossos serviços. Na GL
          Advogadas, não apenas defendemos seus interesses, mas também
          construímos parcerias duradouras baseadas na confiança, integridade e
          compromisso com a excelência.
        </div>
      </div>
    </section>
  );
};
