import { Container, Heading, Display, Text, ButtonStyled } from '@base';
import dynamic from 'next/dynamic';
import { BoxFerramenta } from '@components/box/BoxFerramenta';
import { BoxData } from '@/components/box/BoxData';
import { CardPost } from '@/components/CardPost';
import { Header } from '@/components/Header';
import { GetInContact } from '@/components/sections/GetInContact';
import { SpecialContents } from '@/components/sections/SpecialContents';
import { SelectBoxProps } from '@components/SelectBox';

const SelectBox = dynamic<SelectBoxProps>(() => import('@components/SelectBox'), {
  ssr: false,
});

const Home = () => {
  return (
    <main className="font-montserrat">
      <section className="bg-orange pb-10 md:pb-[90px] pt-4">
        <Container>
          <Header style="light" />
          <div className="gap-7 flex flex-col items-center md:mt-10 text-white md:flex-row">
            <div className=" flex-1">
              <div className=" md:max-w-[472px]">
                <Display style={'D1'} className="text-h2 md:text-d1 mb-1">
                  Portal da Classe Política
                </Display>
                <Text size={'S1'} className="text-h6 md:text-s1">
                  Democratizando o acesso ao conhecimento
                </Text>
              </div>
            </div>
            <div className="flex-1 ">
              <div className="md:max-w-[460px]">
                <Text size={'B1'}>
                  Seja bem-vindo(a) ao Portal da Classe Política! A partir do uso intensivo de dados e da
                  expertise de profissionais de ciência política, produzimos análises úteis e acessíveis,
                  mesmo para quem não é especialista no assunto. Fazemos isso porque, além de produzir
                  informação, queremos democratizar o acesso ao conhecimento, estimulando a participação,
                  conectando pessoas, produzindo inovação e impacto social.
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center md:gap-2 md:flex-row md:justify-between mt-12 md:mt-24">
            <BoxFerramenta
              alt="Cruzamentos e Dados Eleitorais"
              src={'/img/Cruzdados.png'}
              title={'Cruzamentos e Dados Eleitorais'}
              subTitle={'Cruze e analise dezenas de variáveis eleitorais.'}
            />
            <BoxFerramenta
              alt="Indicadores e Índices Especiais"
              src={'/img/Indicadores.png'}
              title={'Indicadores e Índices Especiais'}
              subTitle={'Trinta índices construídos com variáveis eleitorais.'}
            />
            <BoxFerramenta
              alt="Aprenda a usar os Indicadores"
              src={'/img/Aprenda.png'}
              title={'Aprenda a usar os Indicadores'}
              subTitle={'Diversos tutoriais para ajudar você explorar ao máximo o Portal.'}
            />
            <BoxFerramenta
              alt="Comunicação Científica"
              src={'/img/Comunicacao.png'}
              title={'Comunicação Científica'}
              subTitle={'Nosso blog traz análises relevantes e acessíveis sobre a política nacional.'}
            />
          </div>
        </Container>
      </section>
      <section className=" pt-10 md:pt-[90px] pb-14 md:pb-[120px]">
        <Container>
          <div className=" md:max-w-[854px] mb-8">
            <Heading headingLevel={2}>Análises e Treinamentos </Heading>
            <Text size={'B1'}>
              Aprofunde seu conhecimento sobre dados eleitorais com conteúdos e guias que tornarão a sua
              experiência nos uso dos dados eleitorais mais intuitiva e fundamentada.
            </Text>
          </div>
          <div className="flex flex-col h-full md:flex-row gap-4 md:gap-[58px]">
            <div className="h-[370px] md:h-[480px]">
              <CardPost
                alt={'Eleições 2024: Conheça o histórico dos candidatos da sua cidade'}
                category={['Leitura de 3min', 'Categoria Aqui']}
                customHeight={250}
                title={'Eleições 2024: Conheça o histórico dos candidatos da sua cidade'}
                subTitle={
                  'Antes de votar, confira o material informativo que preparamos com tudo que você precisa saber sobre suas opções de voto para prefeito e vereadores da sua cidade.'
                }
                src={'/img/Dados.svg'}
                type="Primary"
              />
            </div>

            <div className="flex flex-col gap-[24px]">
              <div className="md:h-[227px]">
                <CardPost
                  alt={'Eleições 2024: Conheça o histórico dos candidatos da sua cidade'}
                  type="Secondary"
                  category={['Leitura de 3min', 'Categoria Aqui']}
                  customHeight={90}
                  title={'Eleições 2024: Conheça o histórico dos candidatos da sua cidade'}
                  src={'/img/Dados2.svg'}
                />
              </div>
              <div className="md:h-[227px]">
                <CardPost
                  alt={'Eleições 2024: Conheça o histórico dos candidatos da sua cidade'}
                  type="Secondary"
                  category={['Leitura de 3min', 'Categoria Aqui']}
                  customHeight={90}
                  title={'Eleições 2024: Conheça o histórico dos candidatos da sua cidade'}
                  src={'/img/Dados2.svg'}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-orange py-10 md:py-[80px]">
        <Container>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="text-white flex-1 flex">
              <div className="max-w-[440px] content-center">
                <Heading headingLevel={2} className="font-bold">
                  Big Numbers
                </Heading>
                <Text size={'B1'} className="py-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non odio sit amet massa
                  lobortis scelerisque. Integer gravida nulla ipsum, in convallis nisi mollis nec. Nam
                  vulputate ipsum.
                </Text>
                <ButtonStyled style="fillBlack">
                  <Text size={'C1'} className="font-bold">
                    Saiba mais
                  </Text>
                </ButtonStyled>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]	flex-1">
              <BoxData
                header="+40"
                title="Pesquisadores e pesquisadoras envolvidos"
                content="Consectetur adipiscing elit. Suspendisse non odio sit amet massa lobortis"
              />
              <BoxData
                header="+20"
                title="Universidades"
                content="Consectetur adipiscing elit. Suspendisse non odio sit amet massa lobortis"
              />
              <BoxData
                header="+100"
                title="Estudantes envolvidos"
                content="Consectetur adipiscing elit. Suspendisse non odio sit amet massa lobortis"
              />
              <BoxData
                header="+1200"
                title="Cruzamentos possíveis"
                content="Consectetur adipiscing elit. Suspendisse non odio sit amet massa lobortis"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="pt-8 md:pt-[72px] pb-8 md:pb-[78px]">
        <Container>
          <SelectBox
            tabs={[
              {
                title: 'Como fazer os cruzamentos',
                content: (
                  <>
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                      <div className="  text-white">
                        <Heading headingLevel={2} className="font-bold pb-3 text-h5 md:text-h1">
                          Como fazer os cruzamentos
                        </Heading>
                        <Text className=" text-[18px] font-bold pb-[20px]">
                          Como fazer os cruzamentosComo fazer os cruzamentos
                        </Text>
                        <Text size={'B2'} className="mt-auto pb-[20px] ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non odio sit
                          amet massa lobortis scelerisque. Integer gravida nulla ipsum, in convallis nisi
                          mollis ec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non
                          odio sit amet massa lobortis scelerisque. Integer gravida nulla ipsum, in convallis
                          nisi mollis nec. Nam vulputate ipsum. Suspendisse non odio sit amet massa lobortis
                          scelerisque. Integer gravida nulla ipsum.
                        </Text>
                        <ButtonStyled style="fillBlack">
                          <Text className="text-[14px] font-bold">Saiba mais</Text>
                        </ButtonStyled>
                      </div>
                      <div>
                        <div className="w-[320px] md:h-[300px] md:w-[533px] bg-orangeLight1 rounded-lg"></div>
                      </div>
                    </div>
                  </>
                ),
              },
              {
                title: 'Como fazer os cruzamentos',
                content: (
                  <>
                    <div className="flex flex-col md:flex-row">
                      <div className="  text-white">
                        <Heading headingLevel={2} className="font-bold pb-3">
                          Como fazer os cruzamentos
                        </Heading>
                        <Text className=" text-[18px font-bold pb-[20px]">
                          Como fazer os cruzamentosComo fazer os cruzamentos
                        </Text>
                        <Text size={'B2'} className="mt-auto pb-[20px] ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non odio sit
                          amet massa lobortis scelerisque. Integer gravida nulla ipsum, in convallis nisi
                          mollis ec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non
                          odio sit amet massa lobortis scelerisque. Integer gravida nulla ipsum, in convallis
                          nisi mollis nec. Nam vulputate ipsum. Suspendisse non odio sit amet massa lobortis
                          scelerisque. Integer gravida nulla ipsum.
                        </Text>
                      </div>
                      <div>
                        <div className="w-[320px] md:h-[300px] md:w-[533px] bg-orangeLight1 rounded-lg"></div>
                      </div>
                    </div>
                  </>
                ),
              },
            ]}
          />

          <SpecialContents />
        </Container>
      </section>
      <GetInContact />
    </main>
  );
};

export default Home;
