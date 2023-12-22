import styled from "styled-components";
import imgLogoSrc from "../../public/logo.svg";

export default function Header() {
  return (
    <HTMLHeader>
      <LogoContainer>
        <LogoImg src={imgLogoSrc} />
      </LogoContainer>
      <TextContainer>
        <TextContainerWrapper>
          <Title>
            REABERTURA <br /> SMART FIT
          </Title>
          <Divisor />
          <Description>
            O horário de funcionamento das nossas unidades está seguindo os
            decretos de cada município. Por isso, confira aqui se a sua unidade
            está aberta e as medidas de segurança que estamos seguindo.
          </Description>
        </TextContainerWrapper>
      </TextContainer>
    </HTMLHeader>
  );
}

const HTMLHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  row-gap: 50px;
`;

const LogoContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;

const LogoImg = styled.img`
  width: 200px;
`;

const TextContainer = styled.div`
  width: 100%;
`;
const TextContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 80px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.dark_grey};
  font-size: 34px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.dark_grey};
`;

const Divisor = styled.span`
  width: 100px;
  height: 8px;
  background: ${(props) => props.theme.colors.dark_grey};
  margin: 20px 0;
`;
