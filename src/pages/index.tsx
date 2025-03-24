export default function Home() {
  return (
    <>
      <div className="w-full bg-[#913133] flex items-center justify-center h-[84px] border-b border-white bg-background p-5">
        <header className="w-full max-w-[1500px] min-w-[300px] mx-auto flex justify-between items-center ">
          <div className=" flex justify-between flex-col items-center gap-[10px]">
            <img
              src="./WhiteLogo.svg"
              alt="logo"
              className="w-[41px] h-[40px]"
            />
            <span className="text-1xl text-[#FFFF] italic font-serif  whitespace-nowrap">
              Desde 2010
            </span>
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
                <a href="#o-escritorio">
                  <li className="text-white text-[16px] red-hat-display-bold">
                    O escritório
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
        <div className="w-full max-w-[1720px] min-w-[300px] mx-auto flex banner:justify-between lg:px-[120px] banner:items-center text-center justify-center banner:text-left">
          <div className="p-5 p-lateral:p-0 relative ">
            <div className="Heading-Primary-Heading-2 text-white hyphens-auto w-[550px]">
              Dra. Gabriela e Dra. Luciene <br></br>
            </div>
            <span className="text-[35px] text-normal">
              Advogadas Associadas
            </span>
            <div className="Body-Regular-Body-1 mt-[16px] text-justify hyphens-auto  w-[550px]">
              A nossa missão é defender seus direitos com dedicação, ética e
              excelência, sempre comprometidas com a justiça e a integridade,
              construindo confiança em cada caso, cujo objetivo é sempre o
              sucesso.
            </div>
            <div className="flex gap-[15px]  mt-[24px] banner:justify-start justify-center">
              <a href="#contatos">
                <button className="fill-large-default text-[#913133]">
                  Fale conosco
                </button>
              </a>
              <a href="#sobre-nos">
                <button className="outline-large-default text-white">
                  Sobre nós
                </button>
              </a>
            </div>
            <div className="mt-[24px] banner:flex banner:gap-[14px] flex flex-col tex-center justify-center items-center banner:flex banner:flex-row banner:items-start banner:justify-start">
              <div className="Body-Semibold-Body-4">
                Atendimento das 9h às 18h, em dias úteis.
              </div>
            </div>
          </div>
          <div className="shrink-0 hidden banner:flex">
            <img src="./Vector.png" alt="logo" className="shrink-0" />
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

              <div className="lg:grid lg:grid-cols-2 lg:gap-[20px]  gap-3 flex flex-col">
                <div className="border  border-[#913133] rounded-4 h-auto lg:h-[470px] w-full p-[12px] flex flex-col gap-[12px]">
                  <div className="w-full  shrink-0 overflow-hidden">
                    <img
                      src="./service-02-980x340.webp"
                      alt="logo"
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  <div>
                    <div className="Heading-Primary-Heading-5 text-[#913133] ">
                      Direito Trabalhista
                    </div>
                    <div className="Body-Regular-Body-5 text-[#151515] text-justify hyphens-auto">
                      O direito do trabalho trata das regras e leis que regem a
                      relação entre empregadores e empregados. Ele estabelece
                      direitos e deveres para ambas as partes. Seu principal
                      objetivo é garantir condições dignas e justas de forma
                      protetiva ao trabalhador, sem deixar de assegurar direitos
                      igualitários.
                    </div>
                  </div>
                </div>
                <div className="border border-[#913133] rounded-4 h-auto lg:h-[470px] w-full p-[12px] flex flex-col gap-[12px]">
                  <div className="w-full  shrink-0 overflow-hidden">
                    <img
                      src="./direito-previdenciario.webp"
                      alt="logo"
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  <div>
                    <div className="Heading-Primary-Heading-5 text-[#913133] ">
                      Direitos Previdenciários
                    </div>
                    <div className="Body-Regular-Body-5 text-[#151515] text-justify hyphens-auto">
                      O direito previdenciário é a legislação que trata da
                      seguridade social, ou seja, dos direitos relacionados à
                      aposentadoria, pensões, auxílios e benefícios sociais que
                      as pessoas recebem quando não podem trabalhar, seja por
                      idade, invalidez, ou outros motivos.
                    </div>
                  </div>
                </div>
                <div className="border border-[#913133] rounded-4 h-auto lg:h-[470px] w-full p-[12px] flex flex-col gap-[12px]">
                  <div className="w-full  shrink-0 overflow-hidden">
                    <img
                      src="./636d05f915b737ba8d7c224a_afya-vest-direito-consumidor-areas-de-atuacao.jpg"
                      alt="logo"
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  <div>
                    <div className="Heading-Primary-Heading-5 text-[#913133] ">
                      Direitos do Consumidor
                    </div>
                    <div className="Body-Regular-Body-5 text-[#151515] text-justify hyphens-auto">
                      O direito do consumidor é a legislação que protege os
                      direitos dos consumidores, ou seja, as pessoas que compram
                      produtos ou contratam serviços. É o direito que assegura
                      que os consumidores recebam produtos de qualidade, sejam
                      bem informados sobre o que estão comprando, e sejam
                      protegidos contra práticas comerciais abusivas ou lesivas.
                    </div>
                  </div>
                </div>
                <div className="border border-[#913133] rounded-4 h-auto lg:h-[470px] w-full p-[12px] flex flex-col gap-[12px]">
                  <div className="w-full  shrink-0 overflow-hidden">
                    <img
                      src="./rhHvzNxq2vK90KCX7Tq9X1BW5P6ZVTd1.jpg"
                      alt="logo"
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  <div>
                    <div className="Heading-Primary-Heading-5 text-[#913133] ">
                      Direito Civil
                    </div>
                    <div className="Body-Regular-Body-5 text-[#151515] text-justify hyphens-auto">
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
            <div className="lg:grid lg:grid-cols-1 center text-center lg:items-center xl:gap-[117px] gap-[22px] flex flex-col h-[250px]">
              <div>
                <div className="center flex text-center justify-center">
                  <div className="flex items-center gap-[13px] Body-Medium-Body-5 text-white text-center center">
                    <hr className="border border-solid w-[126px] h-[1px]" />
                    DIFERENCIAIS
                    <hr className="border border-solid w-[126px] h-[1px]" />
                  </div>
                </div>
                <div className="Heading-Primary-Heading-3 text-white mb-[7px] ">
                  Por que escolher o nosso escritório?
                </div>

                <div className="text-white Body-Regular-Body-1">
                  O nosso escritório se destaca pela sua dedicação incansável em
                  fornecer serviços jurídicos de excelência, <br></br>{" "}
                  construídos sobre uma base sólida de conhecimento técnico e
                  experiência prática.
                </div>
              </div>
              {/* <div>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* SOBRE NOS */}
      <div
        className="w-full bg-t flex items-center justify-center h-auto border-b border-white bg-background mt-[94px] p-5"
        id="o-escritorio"
      >
        <div className="w-full max-w-[1500px] min-w-[300px] mx-auto flex flex-col ">
          <div className="container mx-auto">
            <div className="lg:grid lg:grid-cols-2 gap-[60px] items-center flex flex-col-reverse ">
              <div>
                {" "}
                <img src="./Group39471.png" width={600} />
              </div>
              <div className="mb-[6 0px]">
                <div className="Heading-Primary-Heading-3 text-[#913133] mb-[7px] ">
                  O Escritório
                </div>

                <div className="Body-Regular-Body-1 text-justify hyphens-auto ">
                  O escritório fora fundado em outubro de 2010 pela Dra.
                  Gabriela Silva, e estabeleceu-se inicialmente com foco na
                  advocacia trabalhista com defesa de empregados e empregadores,
                  destacando-se pelo compromisso e dedicação nessa área. Até
                  2019 a Dra. Gabriela atuou como única proprietária, quando a
                  Dra. Luciene Silva foi nomeada sócia, ampliando o alcance e
                  expertise. Com a chegada da Dra. Luciene, expandiu-se os
                  serviços para abranger, além da área Trabalhista, também as
                  áreas de Direito Previdenciário, Cível e do Consumidor,
                  atendendo tanto pessoas físicas quanto jurídicas. O escritório
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
      <div
        id="sobre-nos"
        className="w-full bg-[#913133] flex items-center justify-center h-auto lg:p-0 border-b border-white bg-background mt-[94px] p-5 "
      >
        <div className="w-full max-w-[1500px] min-w-[300px] mx-auto flex flex-col ">
          <div className="container mx-auto">
            <div className="items-center flex flex-col">
              <div className="lg:grid lg:grid-cols-2 lg:gap-0 gap-[20px]  items-center flex flex-col lg:w-full w-[90%]">
                <div>
                  <div>
                    <div className="body-medium-sm text-white flex items-center gap-[13px]">
                      <hr className="border border-white  border-solid w-[126px] border-[1px]" />
                      SOBRE NÓS
                    </div>
                    <div className="primary-heading-lg text-white">
                      Dra. Gabriela Silva
                    </div>
                  </div>
                  <div className="body-regular-xxl text-white">
                    Sócia-fundadora
                  </div>
                  <div className="body-regular-lg text-white w-[80%] text-justify hyphens-auto ">
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
                  <img src="/_MG_1965.JPG" className="w-full" width={683} />
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-0 gap-[20px] items-center flex flex-col-reverse lg:mt-0 mt-[80px]">
                <div>
                  <img src="/_MG_2000.JPG" className="w-full" width={683} />
                </div>
                <div className="flex flex-col justify-end items-end lg:w-full w-[90%]  ">
                  <div className="lg:ml-[100px]">
                    <div>
                      <div className="body-medium-sm text-white flex items-center gap-[13px]">
                        <hr className="border border-white  border-solid w-[126px] border-[1px]" />
                        SOBRE NÓS
                      </div>
                      <div className="primary-heading-lg text-white">
                        Dra. Luciene Silva
                      </div>
                    </div>
                    <div className="body-regular-xxl text-white">Sócia</div>
                    <div className="body-regular-lg text-white text-justify hyphens-auto ">
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
            <div className="lg:grid lg:grid-cols-1 gap-[60px] items-center flex flex-col-reverse ">
              {/* <div className="w-full max-w-[1500px] min-w-[300px] mx-auto flex flex-col p-6">
                <div className="container mx-auto"> */}
              <div className="lg:grid lg:grid-cols-2 gap-[60px] items-start flex flex-col-reverse">
                <div className="flex flex-col space-y-5">
                  <h2 className="Heading-Primary-Heading-3 text-[#913133] mb-[7px]">
                    Contato
                  </h2>

                  <div className="flex flex-col gap-[30px] mb-[100px]">
                    <div className="flex gap-[20px] items-center">
                      <div className="flex gap-[12px] items-center">
                        <div>
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.2"
                              d="M28.0007 7L16.0007 18L4.00067 7H28.0007Z"
                              fill="#913133"
                            />
                            <path
                              d="M28 7L16 18L4 7"
                              stroke="#913133"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z"
                              stroke="#913133"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M13.8181 16L4.30829 24.7174"
                              stroke="#913133"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M27.6918 24.7174L18.1818 16"
                              stroke="#913133"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-[#913133]">
                            DIREITO TRARABALHISTA
                          </div>
                          <div className="font-semibold">
                            gabriela@gabrielasilva.com.br
                          </div>
                        </div>
                      </div>
                      <div className="border-[1px] bg-black h-[50px]"></div>
                      <div className="flex gap-[12px] items-center">
                        <div>
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.2"
                              d="M28.0007 7L16.0007 18L4.00067 7H28.0007Z"
                              fill="#913133"
                            />
                            <path
                              d="M28 7L16 18L4 7"
                              stroke="#913133"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z"
                              stroke="#913133"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M13.8181 16L4.30829 24.7174"
                              stroke="#913133"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M27.6918 24.7174L18.1818 16"
                              stroke="#913133"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-[#913133] UpperCase break-words word-wrap whitespace-nowrap">
                            {" "}
                            DIREITO CÍVEL E CONSUMIDOR
                          </div>
                          <div className="font-semibold">
                            luciene@gabrielasilva.com.br
                          </div>
                        </div>
                      </div>
                      <div className="border-[1px] bg-black h-[50px]"></div>
                      <div className="flex gap-[12px] items-center">
                        <div>
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.2"
                              d="M28.0007 7L16.0007 18L4.00067 7H28.0007Z"
                              fill="#913133"
                            />
                            <path
                              d="M28 7L16 18L4 7"
                              stroke="#913133"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z"
                              stroke="#913133"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M13.8181 16L4.30829 24.7174"
                              stroke="#913133"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M27.6918 24.7174L18.1818 16"
                              stroke="#913133"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-[#913133]">
                            DIREITO PREVIDENCIÁRIO
                          </div>
                          <div className="font-semibold">
                            luciene@gabrielasilva.com.br
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-[12px] items-center">
                      <div>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.2"
                            d="M16 3C13.3478 3.00001 10.8043 4.05358 8.92894 5.92894C7.05358 7.8043 6.00001 10.3478 6 13C6 22 16 29 16 29C16 29 26 22 26 13C26 10.3478 24.9464 7.8043 23.0711 5.92894C21.1957 4.05358 18.6522 3.00001 16 3ZM16 17C15.2089 17 14.4355 16.7654 13.7777 16.3259C13.1199 15.8864 12.6072 15.2616 12.3045 14.5307C12.0017 13.7998 11.9225 12.9956 12.0769 12.2196C12.2312 11.4437 12.6122 10.731 13.1716 10.1716C13.731 9.61216 14.4437 9.2312 15.2196 9.07686C15.9956 8.92252 16.7998 9.00173 17.5307 9.30448C18.2616 9.60723 18.8864 10.1199 19.3259 10.7777C19.7654 11.4355 20 12.2089 20 13C20 14.0609 19.5786 15.0783 18.8284 15.8284C18.0783 16.5786 17.0609 17 16 17Z"
                            fill="#913133"
                          />
                          <path
                            d="M7 29H25"
                            stroke="#913133"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16 17C18.2091 17 20 15.2091 20 13C20 10.7909 18.2091 9 16 9C13.7909 9 12 10.7909 12 13C12 15.2091 13.7909 17 16 17Z"
                            stroke="#913133"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M26 13C26 22 16 29 16 29C16 29 6 22 6 13C6 10.3478 7.05357 7.8043 8.92893 5.92893C10.8043 4.05357 13.3478 3 16 3C18.6522 3 21.1957 4.05357 23.0711 5.92893C24.9464 7.8043 26 10.3478 26 13V13Z"
                            stroke="#913133"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">
                          Av. João de Andrade, 1.256 - 1º andar, sala 1 - Santo
                          Antônio, Osasco - SP, 06132-004
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-[12px] items-center">
                      <div>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 157 157"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M156.254 118.215C154.429 116.271 147.986 110.523 136.141 102.919C124.209 95.2488 115.409 90.4662 112.885 89.3509C112.663 89.2522 112.418 89.216 112.176 89.2462C111.935 89.2764 111.706 89.3718 111.515 89.5222C107.449 92.6932 100.603 98.5177 100.236 98.8323C97.8659 100.864 97.8659 100.864 95.9256 100.231C92.5134 99.112 81.9132 93.4833 72.6765 84.2256C63.4399 74.968 57.521 64.1056 56.4022 60.6969C55.7624 58.7531 55.7624 58.7531 57.8007 56.3827C58.1153 56.0157 63.9433 49.1703 67.1143 45.1078C67.2646 44.9165 67.3601 44.6879 67.3902 44.4464C67.4204 44.2049 67.3842 43.9598 67.2856 43.7374C66.1703 41.2097 61.3876 32.4135 53.7172 20.4814C46.1027 8.64009 40.3621 2.19679 38.4183 0.371825C38.2399 0.203499 38.0195 0.0864015 37.7801 0.0328719C37.5408 -0.0206577 37.2914 -0.00863722 37.0583 0.0676656C30.2636 2.40275 23.7078 5.38216 17.4802 8.96522C11.4684 12.46 5.77682 16.4786 0.471709 20.9743C0.286521 21.1317 0.14768 21.3366 0.0700768 21.567C-0.00752657 21.7973 -0.0209649 22.0444 0.0312021 22.2818C0.761886 25.687 4.25448 39.9022 15.0924 59.5922C26.1505 79.6877 33.814 89.9837 50.0533 106.167C66.2927 122.351 76.9138 130.475 97.0303 141.534C116.72 152.371 130.942 155.868 134.341 156.591C134.579 156.643 134.826 156.629 135.057 156.552C135.288 156.474 135.493 156.336 135.652 156.151C140.147 150.846 144.164 145.154 147.657 139.142C151.24 132.914 154.219 126.359 156.555 119.564C156.63 119.333 156.641 119.086 156.588 118.848C156.535 118.611 156.42 118.392 156.254 118.215Z"
                            fill="#913133"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">(11) 3591-6149</div>
                      </div>
                    </div>
                    <div className="flex gap-[12px] items-center">
                      <div>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 157 157"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M156.254 118.215C154.429 116.271 147.986 110.523 136.141 102.919C124.209 95.2488 115.409 90.4662 112.885 89.3509C112.663 89.2522 112.418 89.216 112.176 89.2462C111.935 89.2764 111.706 89.3718 111.515 89.5222C107.449 92.6932 100.603 98.5177 100.236 98.8323C97.8659 100.864 97.8659 100.864 95.9256 100.231C92.5134 99.112 81.9132 93.4833 72.6765 84.2256C63.4399 74.968 57.521 64.1056 56.4022 60.6969C55.7624 58.7531 55.7624 58.7531 57.8007 56.3827C58.1153 56.0157 63.9433 49.1703 67.1143 45.1078C67.2646 44.9165 67.3601 44.6879 67.3902 44.4464C67.4204 44.2049 67.3842 43.9598 67.2856 43.7374C66.1703 41.2097 61.3876 32.4135 53.7172 20.4814C46.1027 8.64009 40.3621 2.19679 38.4183 0.371825C38.2399 0.203499 38.0195 0.0864015 37.7801 0.0328719C37.5408 -0.0206577 37.2914 -0.00863722 37.0583 0.0676656C30.2636 2.40275 23.7078 5.38216 17.4802 8.96522C11.4684 12.46 5.77682 16.4786 0.471709 20.9743C0.286521 21.1317 0.14768 21.3366 0.0700768 21.567C-0.00752657 21.7973 -0.0209649 22.0444 0.0312021 22.2818C0.761886 25.687 4.25448 39.9022 15.0924 59.5922C26.1505 79.6877 33.814 89.9837 50.0533 106.167C66.2927 122.351 76.9138 130.475 97.0303 141.534C116.72 152.371 130.942 155.868 134.341 156.591C134.579 156.643 134.826 156.629 135.057 156.552C135.288 156.474 135.493 156.336 135.652 156.151C140.147 150.846 144.164 145.154 147.657 139.142C151.24 132.914 154.219 126.359 156.555 119.564C156.63 119.333 156.641 119.086 156.588 118.848C156.535 118.611 156.42 118.392 156.254 118.215Z"
                            fill="#913133"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">(11) 9 9022-4279</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-[220px]">
                    <div className="body-medium font-bold text-[#913133] flex items-center gap-[13px] mb-[20px] ">
                      <hr className="border border-[#913133]  border-solid w-[126px] border-[1px]" />
                      Nossas redes sociais
                    </div>
                    <div>
                      <div className="flex gap-[20px]">
                        <a
                          href="https://www.instagram.com/gladvogadasassociadas/"
                          target="_blank"
                        >
                          <svg
                            width="45"
                            height="44"
                            viewBox="0 0 45 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.0484009"
                              width="44"
                              height="44"
                              rx="5"
                              fill="#913133"
                              fill-opacity="0.08"
                            />
                            <g clip-path="url(#clip0_2323_1260)">
                              <path
                                d="M32.0288 17.8801C31.9819 16.8174 31.8101 16.0868 31.5639 15.4537C31.3099 14.7818 30.9192 14.1801 30.4074 13.68C29.9072 13.1721 29.3016 12.7774 28.6375 12.5274C28.0007 12.2813 27.274 12.1094 26.2113 12.0626C25.1407 12.0118 24.8008 12 22.0854 12C19.3701 12 19.0302 12.0118 17.9635 12.0586C16.9009 12.1055 16.1703 12.2775 15.5374 12.5235C14.8653 12.7774 14.2636 13.1681 13.7635 13.68C13.2556 14.1801 12.8611 14.7857 12.6109 15.4499C12.3648 16.0868 12.1929 16.8134 12.1461 17.8761C12.0952 18.9467 12.0835 19.2866 12.0835 22.002C12.0835 24.7173 12.0952 25.0572 12.1421 26.1239C12.189 27.1865 12.361 27.9171 12.6071 28.5502C12.8611 29.2221 13.2556 29.8238 13.7635 30.3239C14.2636 30.8318 14.8692 31.2265 15.5334 31.4765C16.1703 31.7226 16.8969 31.8945 17.9597 31.9413C19.0262 31.9883 19.3662 31.9999 22.0816 31.9999C24.797 31.9999 25.1369 31.9883 26.2035 31.9413C27.2662 31.8945 27.9968 31.7226 28.6297 31.4765C29.9738 30.9568 31.0364 29.8941 31.5561 28.5502C31.8021 27.9133 31.9741 27.1865 32.021 26.1239C32.0678 25.0572 32.0796 24.7173 32.0796 22.002C32.0796 19.2866 32.0756 18.9467 32.0288 17.8801ZM30.2277 26.0457C30.1847 27.0225 30.0206 27.5499 29.8839 27.9015C29.5478 28.7728 28.8563 29.4643 27.985 29.8004C27.6334 29.9372 27.1021 30.1012 26.1292 30.1441C25.0743 30.1911 24.7579 30.2027 22.0894 30.2027C19.4209 30.2027 19.1005 30.1911 18.0495 30.1441C17.0727 30.1012 16.5453 29.9372 16.1936 29.8004C15.7601 29.6402 15.3654 29.3862 15.045 29.0541C14.7129 28.7298 14.459 28.3391 14.2987 27.9055C14.162 27.5539 13.9979 27.0225 13.955 26.0497C13.908 24.9948 13.8964 24.6783 13.8964 22.0097C13.8964 19.3412 13.908 19.0209 13.955 17.9699C13.9979 16.9932 14.162 16.4657 14.2987 16.1141C14.459 15.6804 14.7129 15.2859 15.049 14.9654C15.3732 14.6333 15.7639 14.3793 16.1976 14.2192C16.5492 14.0825 17.0806 13.9184 18.0534 13.8754C19.1083 13.8285 19.4249 13.8168 22.0932 13.8168C24.7657 13.8168 25.0821 13.8285 26.1332 13.8754C27.1099 13.9184 27.6374 14.0825 27.989 14.2192C28.4226 14.3793 28.8172 14.6333 29.1376 14.9654C29.4697 15.2897 29.7236 15.6804 29.8839 16.1141C30.0206 16.4657 30.1847 16.997 30.2277 17.9699C30.2746 19.0248 30.2863 19.3412 30.2863 22.0097C30.2863 24.6783 30.2746 24.9908 30.2277 26.0457Z"
                                fill="#913133"
                              />
                              <path
                                d="M22.0855 16.8643C19.2491 16.8643 16.9478 19.1654 16.9478 22.002C16.9478 24.8385 19.2491 27.1397 22.0855 27.1397C24.922 27.1397 27.2232 24.8385 27.2232 22.002C27.2232 19.1654 24.922 16.8643 22.0855 16.8643ZM22.0855 25.3347C20.2454 25.3347 18.7528 23.8422 18.7528 22.002C18.7528 20.1617 20.2454 18.6693 22.0855 18.6693C23.9257 18.6693 25.4182 20.1617 25.4182 22.002C25.4182 23.8422 23.9257 25.3347 22.0855 25.3347Z"
                                fill="#913133"
                              />
                              <path
                                d="M28.6259 16.6611C28.6259 17.3235 28.0888 17.8605 27.4263 17.8605C26.7639 17.8605 26.2269 17.3235 26.2269 16.6611C26.2269 15.9986 26.7639 15.4617 27.4263 15.4617C28.0888 15.4617 28.6259 15.9986 28.6259 16.6611Z"
                                fill="#913133"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2323_1260">
                                <rect
                                  width="20"
                                  height="20"
                                  fill="#913133"
                                  transform="translate(12.0484 12)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>

                        <a
                          href="https://wa.me/5511990224279"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="44"
                            height="44"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24.5 9C31.4038 9 37 14.5962 37 21.5C37 28.4037 31.4038 34 24.5 34C22.291 34.0038 20.1207 33.4192 18.2125 32.3062L12.005 34L13.695 27.79C12.5812 25.8811 11.9961 23.71 12 21.5C12 14.5962 17.5963 9 24.5 9ZM20.24 15.625L19.99 15.635C19.8284 15.6461 19.6704 15.6886 19.525 15.76C19.3895 15.8369 19.2657 15.9329 19.1575 16.045C19.0075 16.1862 18.9225 16.3087 18.8313 16.4275C18.3689 17.0286 18.12 17.7666 18.1238 18.525C18.1263 19.1375 18.2863 19.7337 18.5363 20.2912C19.0475 21.4187 19.8888 22.6125 20.9988 23.7187C21.2663 23.985 21.5288 24.2525 21.8113 24.5012C23.1905 25.7155 24.8341 26.5912 26.6113 27.0587L27.3213 27.1675C27.5525 27.18 27.7838 27.1625 28.0163 27.1512C28.3802 27.132 28.7356 27.0335 29.0575 26.8625C29.2211 26.7779 29.3808 26.6862 29.5363 26.5875C29.5363 26.5875 29.5892 26.5517 29.6925 26.475C29.8613 26.35 29.965 26.2612 30.105 26.115C30.21 26.0067 30.2975 25.8808 30.3675 25.7375C30.465 25.5337 30.5625 25.145 30.6025 24.8212C30.6325 24.5737 30.6238 24.4387 30.62 24.355C30.615 24.2212 30.5038 24.0825 30.3825 24.0237L29.655 23.6975C29.655 23.6975 28.5675 23.2237 27.9025 22.9212C27.8329 22.8909 27.7583 22.8736 27.6825 22.87C27.597 22.861 27.5105 22.8706 27.429 22.898C27.3475 22.9254 27.2728 22.97 27.21 23.0287C27.2038 23.0262 27.12 23.0975 26.2163 24.1925C26.1644 24.2622 26.0929 24.3149 26.011 24.3438C25.9291 24.3727 25.8404 24.3766 25.7563 24.355C25.6748 24.3333 25.595 24.3057 25.5175 24.2725C25.3625 24.2075 25.3088 24.1825 25.2025 24.1375C24.4849 23.8249 23.8206 23.4018 23.2338 22.8837C23.0763 22.7462 22.93 22.5962 22.78 22.4512C22.2883 21.9802 21.8597 21.4475 21.505 20.8662L21.4313 20.7475C21.3791 20.6672 21.3363 20.5813 21.3038 20.4912C21.2563 20.3075 21.38 20.16 21.38 20.16C21.38 20.16 21.6838 19.8275 21.825 19.6475C21.9625 19.4725 22.0788 19.3025 22.1538 19.1812C22.3013 18.9437 22.3475 18.7 22.27 18.5112C21.92 17.6562 21.5583 16.8058 21.185 15.96C21.1113 15.7925 20.8925 15.6725 20.6938 15.6487C20.6263 15.6404 20.5588 15.6337 20.4913 15.6287C20.3234 15.6191 20.1551 15.6208 19.9875 15.6337L20.24 15.625Z"
                              fill="#913133"
                            />
                            <rect
                              width="44"
                              height="44"
                              rx="5"
                              fill="#913133"
                              fill-opacity="0.08"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="flex justify-center items-center w-[100%] ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.313737759123!2d-46.80365152467!3d-23.557172978802726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff9076484c13%3A0x18277df785905b12!2sGL%20Advogadas%20Associadas!5e0!3m2!1spt-BR!2sbr!4v1723074478965!5m2!1spt-BR!2sbr"
                    loading="lazy"
                    className="border-0 w-[100%]  alg:w-full h-[400px] "
                  ></iframe>
                </div> */}
              </div>
              <div className="flex justify-center items-center w-[100%] ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.313737759123!2d-46.80365152467!3d-23.557172978802726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff9076484c13%3A0x18277df785905b12!2sGL%20Advogadas%20Associadas!5e0!3m2!1spt-BR!2sbr!4v1723074478965!5m2!1spt-BR!2sbr"
                  loading="lazy"
                  className="border-0 w-[100%]  alg:w-full h-[400px] "
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
      {/* FOOTER */}
      <div className="w-full bg-[#913133] flex items-center justify-center h-auto border-b border-white bg-background mt-[94px] p-5">
        <div className="w-full max-w-[1500px] min-w-[300px] mx-auto flex flex-col ">
          <div className="container mx-auto">
            <div className=" flex justify-between items-center w-[100%] h-[50px] flex-col">
              <img
                src="./WhiteLogo.svg"
                alt="logo"
                className="w-[51px] h-[50px]"
              />
              <span className="text-2xl text-[#FFFF] italic font-serif  whitespace-nowrap">
                Desde 2010
              </span>
            </div>
            {/* <div className="lg:grid lg:grid-cols-4 gap-[60px] items-center flex flex-col-reverse ">
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
            </div> */}
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
