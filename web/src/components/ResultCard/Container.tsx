import styled from "styled-components";

export default function ResultCardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <ContainerWrapper>{children}</ContainerWrapper>
    </Container>
  );
}

const Container = styled("div")`
  width: 100%;
  padding: 0 80px;
  margin-top: 20px;
`;
const ContainerWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  gap: 10px;
`;
