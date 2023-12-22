import styled from "styled-components";
import maskRequiredIcon from "../../assets/required-mask.png";
import maskNotRequiredIcon from "../../assets/recommended-mask.png";
import toalhaRequiredIcon from "../../assets/required-towel.png";
import toalhaNotRequiredIcon from "../../assets/recommended-towel.png";
import bebedouroAllowed from "../../assets/partial-fountain.png";
import bebedouroNotAllowed from "../../assets/forbidden-fountain.png";
import vestiarioAllowed from "../../assets/required-lockerroom.png";
import vestiarioNotAllowed from "../../assets/forbidden-lockerroom.png";
import vestiarioPartial from "../../assets/partial-lockerroom.png";
import CaptionCard from "./CaptionCard";

const legendas = [
  {
    title: "Máscara",
    icons: [
      {
        legenda: "Obrigatório",
        iconUrl: maskRequiredIcon,
      },
      {
        legenda: "Recomendado",
        iconUrl: maskNotRequiredIcon,
      },
    ],
  },
  {
    title: "Toalha",
    icons: [
      {
        legenda: "Obrigatório",
        iconUrl: toalhaRequiredIcon,
      },
      {
        legenda: "Recomendado",
        iconUrl: toalhaNotRequiredIcon,
      },
    ],
  },
  {
    title: "Bebedouro",
    icons: [
      {
        legenda: "Parcial",
        iconUrl: bebedouroAllowed,
      },
      {
        legenda: "Proibido",
        iconUrl: bebedouroNotAllowed,
      },
    ],
  },
  {
    title: "Vestiário",
    icons: [
      {
        legenda: "Liberado",
        iconUrl: vestiarioAllowed,
      },
      {
        legenda: "Parcial",
        iconUrl: vestiarioPartial,
      },
      {
        legenda: "Fechado",
        iconUrl: vestiarioNotAllowed,
      },
    ],
  },
];

export default function ResultsCaptions() {
  return (
    <Container>
      <ContainerWrapper>
        {legendas.map((legenda, i) => {
          return (
            <CaptionCard
              title={legenda.title}
              icons={legenda.icons}
              key={`${legenda.title}..${i}`}
            />
          );
        })}
      </ContainerWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 0 80px;
  margin-top: 30px;
`;

const ContainerWrapper = styled.div`
  background: #e1e1e1;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
`;
