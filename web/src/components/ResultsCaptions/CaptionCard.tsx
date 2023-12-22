import styled from "styled-components";

interface Props {
  title: string;
  icons: { legenda: string; iconUrl: string }[];
}

export default function CaptionCard({ title, icons }: Props) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <IconsContainer>
        {icons.map((icon) => {
          return (
            <IconContainer key={icon.legenda}>
              <img src={icon.iconUrl} width={40} />
              <span>{icon.legenda}</span>
            </IconContainer>
          );
        })}
      </IconsContainer>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 5px;
`;

const CardTitle = styled.span`
  font-weight: 600;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
