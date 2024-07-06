export default function Home() {
  return (
    <>
      <div className="w-full bg-[#913133] flex items-center justify-center h-[84px] border-b border-white bg-background p-5">
        <header className="w-full max-w-[1500px] min-w-[300px] mx-auto flex justify-between items-center ">
          <div className="flex justify-between items-center w-[51px] h-[50px]">
            <img
              src="./WhiteLogo.svg"
              alt="logo"
              className="w-[51px] h-[50px]"
            />
          </div>
          <div className="hidden md:flex">
            <nav className="flex justify-between items-center">
              <ul className="flex justify-between items-center gap-[32px]">
                <a href="#area-atuacao">
                  <li className="text-white text-[16px] red-hat-display-bold">
                    Áreas de atuação
                  </li>
                </a>
                <a href="#difereciais">
                  <li className="text-white text-[16px] red-hat-display-bold">
                    Diferenciais
                  </li>
                </a>
                <a href="#sobre-nos">
                  <li className="text-white text-[16px] red-hat-display-bold">
                    Sobre nós
                  </li>
                </a>
                <a href="#contatos">
                  <li className="text-white text-[16px] red-hat-display-bold">
                    Contatos
                  </li>
                </a>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      {/* BANNER DE BAIXO */}
      <div className="w-full bg-[#913133] flex items-center justify-center h-auto lg:h-[597px]  border-b border-white bg-background text-white p-5">
        <div className="w-full max-w-[1500px] min-w-[300px] mx-auto flex banner:justify-between lg:px-[120px] banner:items-center text-center justify-center banner:text-left">
          <div className="p-5 p-lateral:p-0 relative">
            <div className="Heading-Primary-Heading-2 text-white">
              Dra. Gabriela e Dra. Lucine Advogadas Associadas
            </div>
            <div className="Body-Regular-Body-1 mt-[16px]">
              A nossa missão é defender seus direitos com dedicação, ética e
              excelência, sempre comprometidas com a justiça e a integridade,
              construindo confiança em cada caso, cujo objetivo é sempre o
              sucesso.
            </div>
            <div className="flex gap-[15px]  mt-[24px] banner:justify-start justify-center">
              <button className="fill-large-default text-[#913133]">
                Fale conosco
              </button>
              <button className="outline-large-default text-white">
                Sobre nós
              </button>
            </div>
            <div className="mt-[24px] banner:flex banner:gap-[14px] flex flex-col tex-center justify-center items-center banner:flex banner:flex-row banner:items-start banner:justify-start">
              <img src="./Icons.svg" alt="logo" />
              <div className="Body-Semibold-Body-4">
                Atendimento de segunda-feiras, das 9h às 18h (Exceto feriados)
              </div>
            </div>
          </div>
          <div className="shrink-0 hidden banner:flex">
            <img src="./advs.png" alt="logo" className="shrink-0" />
          </div>
        </div>
      </div>
      {/* AREAS DE ATUACAO */}
      <div
        className="w-full bg-white flex items-center justify-center h-auto border-b border-white bg-background p-5"
        id="area-atuacao"
      >
        <div className="w-full max-w-[1500px] min-w-[300px] mx-auto flex flex-col ">
          <div className="flex gap-[15px] mt-[97px] justify-center ">
            <div className="container mx-auto p-4 ">
              <div className="Heading-Primary-Heading-3 lg:text-left text-[#913133] mb-[44px] text-center">
                Áreas de atuação
              </div>

              <div className="lg:grid lg:grid-cols-2 gap-3 flex flex-col">
                <div className="border border-[#913133] rounded-4 h-[470px] w-full p-[12px] flex flex-col gap-[12px]">
                  <div className="w-full shrink-0 ">
                    <img
                      src="./direito-trabalhista.png"
                      alt="logo"
                      className="shrink-0 w-full"
                    />
                  </div>
                  <div>
                    <div className="Heading-Primary-Heading-5 text-[#913133] ">
                      Direito Trabalhista
                    </div>
                    <div className="Body-Regular-Body-5 text-[#151515]">
                      O direito do trabalho trata das regras e leis que regem a
                      relação entre empregadores e empregados. Ele estabelece
                      direitos e deveres para ambas as partes. Seu principal
                      objetivo é garantir condições dignas e justas de forma
                      protetiva ao trabalhador, sem deixar de assegurar direitos
                      igualitários.
                    </div>
                  </div>
                </div>
                <div className="border border-[#913133] rounded-4 h-[470px] w-full p-[12px] flex flex-col gap-[12px]">
                  <div className="w-full shrink-0 ">
                    <img
                      src="./direito-trabalhista.png"
                      alt="logo"
                      className="shrink-0 w-full"
                    />
                  </div>
                  <div>
                    <div className="Heading-Primary-Heading-5 text-[#913133] ">
                      Direitos Previdenciários
                    </div>
                    <div className="Body-Regular-Body-5 text-[#151515]">
                      O direito previdenciário é a legislação que trata da
                      seguridade social, ou seja, dos direitos relacionados à
                      aposentadoria, pensões, auxílios e benefícios sociais que
                      as pessoas recebem quando não podem trabalhar, seja por
                      idade, invalidez, ou outros motivos.
                    </div>
                  </div>
                </div>
                <div className="border border-[#913133] rounded-4 h-[470px] w-full p-[12px] flex flex-col gap-[12px]">
                  <div className="w-full shrink-0 ">
                    <img
                      src="./direito-trabalhista.png"
                      alt="logo"
                      className="shrink-0 w-full"
                    />
                  </div>
                  <div>
                    <div className="Heading-Primary-Heading-5 text-[#913133] ">
                      Direitos do Consumidor
                    </div>
                    <div className="Body-Regular-Body-5 text-[#151515]">
                      O direito do consumidor é a legislação que protege os
                      direitos dos consumidores, ou seja, as pessoas que compram
                      produtos ou contratam serviços. É o direito que assegura
                      que os consumidores recebam produtos de qualidade, sejam
                      bem informados sobre o que estão comprando, e sejam
                      protegidos contra práticas comerciais abusivas ou lesivas.
                    </div>
                  </div>
                </div>
                <div className="border border-[#913133] rounded-4 h-[470px] w-full p-[12px] flex flex-col gap-[12px]">
                  <div className="w-full shrink-0 ">
                    <img
                      src="./direito-trabalhista.png"
                      alt="logo"
                      className="shrink-0 w-full"
                    />
                  </div>
                  <div>
                    <div className="Heading-Primary-Heading-5 text-[#913133] ">
                      Direito Civil
                    </div>
                    <div className="Body-Regular-Body-5 text-[#151515]">
                      O direito civil é a legislação que regula as relações
                      privadas entre pessoas, sejam físicas (indivíduos) ou
                      jurídicas (empresas). Isso inclui, entre outros, questões
                      como contratos, propriedade e responsabilidade por danos.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* POR QUE ESCOLHER */}
      <div
        className="w-full bg-white flex items-center justify-center h-auto border-b border-white bg-background mt-[94px] bg-gradient-brand py-[70px] p-5"
        id="difereciais"
      >
        <div className="w-full max-w-[1500px] min-w-[300px] mx-auto flex flex-col ">
          <div className="container mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:items-center xl:gap-[117px] gap-[22px] flex flex-col">
              <div>
                <div className=" flex items-center gap-[13px] Body-Medium-Body-5 text-white">
                  <hr className="border border-solid w-[126px] h-[1px]" />
                  DIFERENCIAIS
                </div>
                <div className="Heading-Primary-Heading-3 text-white mb-[7px] ">
                  Por que escolher o nosso escritório?
                </div>

                <div className="text-white Body-Regular-Body-1">
                  O nosso escritório se destaca pela sua dedicação incansável em
                  fornecer serviços jurídicos de excelência, construídos sobre
                  uma base sólida de conhecimento técnico e experiência prática.
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-[20px] p-[32px] p-[24px] rounded-[4px] border border-white bg-[rgba(145,49,51,0.30)] backdrop-blur-[7px]">
                  <div className="flex items-start justify-start gap-[21px]">
                    <div className="flex-shrink-0 mt-[7px]">
                      <img src="./arrowIcon.svg" />
                    </div>
                    <div className="flex flex-col justify-start items-start text-white">
                      <div className="Body-Semibold-Body-4">
                        Serviços Específicos
                      </div>
                      <div className="Body-Regular-Body-5">
                        Detalhe os serviços específicos oferecidos pela firma,
                        como consultoria jurídica, representação em processos
                        judiciais, elaboração de contratos, entre outros.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-[21px]">
                    <div className="flex-shrink-0 mt-[7px]">
                      <img src="./arrowIcon.svg" />
                    </div>
                    <div className="flex flex-col justify-start items-start text-white">
                      <div className="Body-Semibold-Body-4">
                        Serviços Específicos
                      </div>
                      <div className="Body-Regular-Body-5">
                        Detalhe os serviços específicos oferecidos pela firma,
                        como consultoria jurídica, representação em processos
                        judiciais, elaboração de contratos, entre outros.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-[21px]">
                    <div className="flex-shrink-0 mt-[7px]">
                      <img src="./arrowIcon.svg" />
                    </div>
                    <div className="flex flex-col justify-start items-start text-white">
                      <div className="Body-Semibold-Body-4">
                        Serviços Específicos
                      </div>
                      <div className="Body-Regular-Body-5">
                        Detalhe os serviços específicos oferecidos pela firma,
                        como consultoria jurídica, representação em processos
                        judiciais, elaboração de contratos, entre outros.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-start gap-[21px]">
                    <div className="flex-shrink-0 mt-[7px]">
                      <img src="./arrowIcon.svg" />
                    </div>
                    <div className="flex flex-col justify-start items-start text-white">
                      <div className="Body-Semibold-Body-4">
                        Serviços Específicos
                      </div>
                      <div className="Body-Regular-Body-5">
                        Detalhe os serviços específicos oferecidos pela firma,
                        como consultoria jurídica, representação em processos
                        judiciais, elaboração de contratos, entre outros.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SOBRE NOS */}
      <div
        className="w-full bg-t flex items-center justify-center h-auto border-b border-white bg-background mt-[94px] p-5"
        id="sobre-nos"
      >
        <div className="w-full max-w-[1500px] min-w-[300px] mx-auto flex flex-col ">
          <div className="container mx-auto">
            <div className="lg:grid lg:grid-cols-2 gap-[60px] items-center flex flex-col-reverse ">
              <div>
                {" "}
                <img src="./foto-escritorio.png" />
              </div>
              <div>
                <div className="Body-Medium-Body-5 text-[#913133]  flex items-center gap-[13px]">
                  <hr className="border border-solid w-[126px] h-[1px] bg-[#913133] border-[#913133]" />
                  O ESCRITÓRIO
                </div>
                <div className="Heading-Primary-Heading-3 text-[#913133] mb-[7px] ">
                  Sobre nós
                </div>

                <div className="Body-Regular-Body-3">
                  O escritório fora fundado em outubro de 2010 pela Dra.
                  Gabriela Silva, e estabeleceu-se inicialmente com foco na
                  advocacia trabalhista com defesa de empregados e empregadores,
                  destacando-se pelo compromisso e dedicação nessa área. Até
                  2019 a Dra. Gabriela atuou como única proprietária, quando a
                  Dra. Luciene Silva foi nomeada sócia, ampliando o alcance e
                  expertise. Com a chegada da Dra. Luciene, expandiu-se os
                  serviços para abranger, além da área Trabalhista, também as
                  áreas de Direito Previdenciário, Cível e do Consumidor,
                  atendendo tanto pessoas físicas quanto jurídica. O escritório
                  se diferencia pela especial atenção dedicada aos clientes,
                  buscando excelência em cada etapa do atendimento e atuação,
                  desde o primeiro contato até o término da ação. Valoriza a
                  transparência e a ética, assegurando que os clientes mantenham
                  um contato direto e fácil com as advogadas responsáveis por
                  seus casos. Cada questão é tratada com atenção e dedicação
                  primordial, refletindo o compromisso com a qualidade e a
                  integridade profissional, sempre com o foco na excelência de
                  tudo o que é feito, para o alcance do objetivo almejado.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SÓCIAS */}
      <div className="w-full bg-[#913133] flex items-center justify-center h-auto lg:p-0 border-b border-white bg-background mt-[94px] p-5 ">
        <div className="w-full max-w-[1500px] min-w-[300px] mx-auto flex flex-col ">
          <div className="container mx-auto">
            <div className="items-center flex flex-col">
              <div className="lg:grid lg:grid-cols-2 lg:gap-0 gap-[20px]  items-center flex flex-col lg:w-full w-[90%]">
                <div>
                  <div>
                    <div className="body-medium-sm text-white flex items-center gap-[13px]">
                      <hr className="border border-white  border-solid w-[126px] border-[1px]" />
                      SOBRE AS ADVOGADAS
                    </div>
                    <div className="primary-heading-lg text-white">
                      Dra. Gabriela Ribeiro
                    </div>
                  </div>
                  <div className="body-regular-xxl text-white">
                    Sócia-fundadora
                  </div>
                  <div className="body-regular-lg text-white w-[80%]">
                    Advogada. Bacharel em Direito pelo Centro Universitário Fieo
                    - Unifieo. Pós-Graduada em Direito do Trabalho pela mesma
                    universidade. Advogou por quatro anos na área de Direito do
                    Trabalho no escritório Robortella Advogados Associados,
                    representando empresas como Shell, Globo, White Martins,
                    Método, entre outras. Em 2010, fundou seu próprio
                    escritório, com ênfase na advocacia trabalhista. Além disso,
                    ministra palestras sobre Direito do Trabalho na Ordem dos
                    Advogados do Brasil (OAB).
                  </div>
                </div>
                <div>
                  <img src="/doctor1.png" className="w-full" />
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-0 gap-[20px] items-center flex flex-col-reverse lg:mt-0 mt-[80px]">
                <div>
                  <img src="/doctor2.png" className="w-full" />
                </div>
                <div className="flex flex-col justify-end items-end lg:w-full w-[90%]  ">
                  <div className="lg:ml-[100px]">
                    <div>
                      <div className="body-medium-sm text-white flex items-center gap-[13px]">
                        <hr className="border border-white  border-solid w-[126px] border-[1px]" />
                        SOBRE AS ADVOGADAS
                      </div>
                      <div className="primary-heading-lg text-white">
                        Dra. Luciene Silva
                      </div>
                    </div>
                    <div className="body-regular-xxl text-white">Sócia</div>
                    <div className="body-regular-lg text-white">
                      Advogada. Bacharel em Direito pelo Centro Universitário
                      Fie - Unifie. Pós-graduanda em Direito Civil e Processo
                      Civil no Centro Universitário Fieo e Direito
                      Previdenciário na Faculdade Legale. Conta com vasta
                      experiência em advocacia, trabalhando no escritório desde
                      2010. Em 2019, tornou-se sócia do escritório, ampliando o
                      alcance e a expertise. Advoga com ênfase nas áreas do
                      Direito Previdenciário, Direito do Consumidor e Direito
                      Civil.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CONTATO */}
      <div
        className="w-full bg-t flex items-center justify-center h-auto border-b border-white bg-background mt-[94px] p-5"
        id="contatos"
      >
        <div className="w-full max-w-[1500px] min-w-[300px] mx-auto flex flex-col ">
          <div className="container mx-auto">
            <div className="lg:grid lg:grid-cols-2 gap-[60px] items-center flex flex-col-reverse "></div>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div className="w-full bg-[#913133] flex items-center justify-center h-auto border-b border-white bg-background mt-[94px] p-5">
        <div className="w-full max-w-[1500px] min-w-[300px] mx-auto flex flex-col ">
          <div className="container mx-auto">
            <div className="lg:grid lg:grid-cols-4 gap-[60px] items-center flex flex-col-reverse ">
              <div>
                {" "}
                <img
                  src="./WhiteLogo.svg"
                  alt="logo"
                  className="w-[80px] h-[78px]"
                />
                <div className="text-left p-4 text-white mt-[16px]">
                  <blockquote>
                    “A justiça é o vínculo das sociedades humanas; as leis
                    emanadas da justiça são a alma de um povo.”
                    <footer className="text-right mt-2">
                      — Juan Luis Vives
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div
              className="max-w-[1500px] min-w-[300px]  lg:flex lg:flex-row text-center flex-col gap-[20px] justify-between h-[79px] items-center text-white body-medium-md  mt-[41px]"
              style={{ borderTop: "1px solid white" }}
            >
              <div>
                Projetado por Felipe Silva e Desenvolvido por Leonardo Henrique
              </div>
              <div>© 2024 GL Advogadas. Todos os direitos reservados.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
