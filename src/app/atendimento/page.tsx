import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ButtonStyled, Container, Heading, Text, Input, TextArea, TextParagraphImage } from '@base';
import { Header } from '@components/sections/Header';
import { LineItem } from '@components/LineItem';
import { BoxIconText } from '@components/box/BoxIconText';

const Atendimento = () => {
  return (
    <main>
      <section className="bg-orange pt-4">
        <Container>
          <Header style="light" />
        </Container>
      </section>
      <section className="bg-orange py-20">
        <Container className={'md:w-[770px]'}>
          <div className="text-white text-center mb-11">
            <Text textType="span" size="S1" className="font-bold mb-4">
              ATENDIMENTO
            </Text>{' '}
            <Heading headingLevel={2} className="font-bold mb-4">
              Precisando de ajuda? Escolha o método de atendimento
            </Heading>{' '}
          </div>
          <div className="flex flex-wrap items-center justify-evenly gap-4 md:gap-4">
            <div className="w-[160px] h-[160px]">
              <BoxIconText text="Atendimento Redem" iconType="Headset" />
            </div>
            <div className="w-[160px] h-[160px]">
              <BoxIconText text="Reportar Erro" iconType="Error" />
            </div>
            <div className="w-[160px] h-[160px]">
              <BoxIconText text="Elogios ao projeto" iconType="Star" />
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#F4F4F4]">
        <Container className="pt-10 pb-10 md:pb-28">
          <Heading headingLevel={2}>Informações de Contato</Heading>
          <div className="flex mb-10 md:mb-28 flex-col-reverse md:flex-row">
            <div className="flex-1">
              <LineItem className="my-7">
                <Text size="B1" className="font-bold mb-2">
                  Telefone
                </Text>
                <Text>+55 (41) 3234-1241</Text>
              </LineItem>
              <LineItem className="mb-7">
                <Text size="B1" className="font-bold mb-2">
                  WhatsApp
                </Text>
                <Text>+55 (41) 98234-1241</Text>
              </LineItem>
              <LineItem className="mb-7">
                <Text size="B1" className="font-bold mb-2">
                  E-mail
                </Text>
                <Text>contato@rwbincorporadora.com.br</Text>
              </LineItem>
              <LineItem className="mb-7">
                <Text size="B1" className="font-bold mb-2">
                  Endereço
                </Text>
                <Text>Rua João José Massaneiro, 1377</Text>
                <Text>Centro - São José dos Pinhais</Text>
              </LineItem>
              <LineItem>
                <Text size="B1" className="font-bold mb-2">
                  Redes Sociais
                </Text>
                <div className="flex justify-between text-orange">
                  <Text textType="a">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </Text>
                  <Text textType="a">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </Text>
                  <Text textType="a">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </Text>
                </div>
              </LineItem>
            </div>
            <div className="flex-1">
              <Text size="S1" className="font-bold hidden md:flex">
                Informações de Contato
              </Text>
              <form className="flex flex-col gap-7 mt-6 mb-9">
                <div className="flex gap-5 flex-col md:flex-row">
                  <Input placeholder="Nome Completo" label="name" />
                  <Input placeholder="Email" label="email" />
                </div>
                <div className="flex gap-5 flex-col md:flex-row">
                  <Input placeholder="Celular (DDD + telefone)" label="phone" />
                  <Input placeholder="Assunto" label="topic" />
                </div>
                <div>
                  <TextArea placeholder="Mensagem" label="message" />
                </div>
              </form>
              <ButtonStyled style="fillOrange">Enviar </ButtonStyled>
            </div>
          </div>
          <TextParagraphImage
            link="/blog/promo-part"
            src="/img/blog/smile.png"
            header={
              'A promoção da participação política das mulheres parcialmente realizada pelos partidos políticos'
            }
            texts={[
              'Os partidos políticos desempenham um papel crucial na política, controlando recursos importantes como cargos, seleção de candidatos (as) e financiamento. Desde 2009, a legislação brasileira obriga os partidos a destinar pelo menos 5% do Fundo Partidário anual para incentivar a participação das mulheres na política. Desde 2015, essa lei tem sido aprimorada, exigindo que os recursos fossem geridos por secretarias de mulheres ou institutos liderados pela secretaria. Ainda que o repasse seja obrigatório, os partidos cumprem essa regra apenas parcialmente, no período de 2009 a 2021. A anistia dada pelos partidos a eles próprios, no caso do não cumprimento da lei, é uma forma de subverter as regras formais que buscam incluir mais mulheres na política. Enquanto isso, o papel de formação política acaba sendo ocupado por organizações sociais e think tanks.',
            ]}
            className="mb-28"
          />
        </Container>
      </section>
    </main>
  );
};

export default Atendimento;
