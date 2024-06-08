export const Person = () => {
  return (
    <section className="w-1/1 mt-[104px]">
      <div id="first" className="h-[619px] flex">
        <div className="w-1/2 bg-[#913133] h-full"></div>
        <div className="w-1/2 h-full"></div>
      </div>
      <div id="second">
        <div id="first" className="h-[619px] flex">
          <div className="w-1/2 h-full"></div>
          <div className="w-1/2 bg-[#913133] h-full text-white flex flex-col justify-center items-center">
            <div className="w-[480px]">
              <div>
                {" "}
                <div className="body-medium-sm text-white flex items-center gap-[13px]">
                  <hr className="border border-white  border-solid w-[126px] border-[1px]" />
                  SOBRE AS ADVOGADAS
                </div>
              </div>
              <div>Dra. Gabriela Ribeiro</div>
              <div>OAB/SC 45.332 Sócia-fundadora</div>
              <div>
                Luane Ribeiro é uma advogada de destaque, reconhecida por sua
                dedicação e excelência no campo jurídico. Com uma carreira
                sólida, Luane conquistou o respeito e a confiança daqueles que
                buscam seus serviços jurídicos. Seu compromisso com o cliente é
                evidente em seu atendimento personalizado, sempre dedicado às
                necessidades individuais de cada um. Ela prioriza uma
                comunicação clara e transparente em todas as etapas do processo
                legal, garantindo que seus clientes estejam sempre bem
                informados e confiantes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
