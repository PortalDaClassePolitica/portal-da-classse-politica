import Image from 'next/image';
import { ButtonStyled, Heading, Text } from '../base';
import { Divider } from '../Divider';
import { BoxIconAwesome } from '../box/BoxIconAwesome';
import TextBetween from '../base/text/TextBetween';

type CandidateProfileProps = {
  src: string;
  candidate: any;
};

const CandidateProfile = ({ src, candidate }: CandidateProfileProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className=" w-[190px] relative h-[240px] ">
        <Image src={src} fill className="rounded-lg object-cover h-auto w-auto" alt="" />
      </div>
      <div>
        <Text textType="span" size="L2" className="text-orange font-bold">
          {candidate.sigla}
        </Text>
        <Heading headingLevel={2} size="H4" className="font-bold mb-2">
          {candidate.nome}
        </Heading>
        <div className="mb-2">
          <Text size="L2">
            <span className="font-bold mr-1">Vice</span>
            ---
          </Text>
        </div>
        <Divider type="orange" bottom="small" />
        <div className="mb-3 flex flex-col gap-2">
          <TextBetween text={candidate.ultimo_cargo} title="Cargo" />
          <TextBetween text={candidate.ultima_unidade_eleitoral} title="Estado" />
          <TextBetween text={candidate.ultima_situacao_candidatura} title="Situação" />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <ButtonStyled style="fillOrange" className="w-[210px]">
            Entre em contato
          </ButtonStyled>
          <div className="flex gap-4">
            <BoxIconAwesome
              iconType="Phone"
              size={11}
              className="bg-white border-orange border-[1px] text-orange rounded-md"
            />
            <BoxIconAwesome
              iconType="Email"
              size={11}
              className="bg-white border-orange border-[1px] text-orange rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
