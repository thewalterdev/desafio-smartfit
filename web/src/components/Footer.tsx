import styled from "styled-components";
import imgLogoSrc from "../../public/logo.svg";

export default function Footer() {
  return (
    <Container>
      <LogoImg src={imgLogoSrc} />
      <AllRightsReserved>Todos os direitos reservados - 2020</AllRightsReserved>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 220px;
  background: ${(props) => props.theme.colors.dark_grey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const LogoImg = styled.img`
  width: 200px;
`;

const AllRightsReserved = styled.span`
  color: white;
`;
