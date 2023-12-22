import styled, { StyleSheetManager } from "styled-components";
import RequirementsIcons from "./RequirementsIcons";

interface Props {
  unitInfo: {
    unitName: string;
    unitFullAddress: string;
    openedStatus: boolean;

    requirements: {
      mask: "recommended" | "required";
      towel: "recommended" | "required";
      fountain: "partial" | "prohibited";
      lockerroom: "allowed" | "partial" | "closed";
    };

    schedules?: {
      weekdays: string;
      hour: string;
    }[];
  };
}

export default function UnitCard({ unitInfo }: Props) {
  return (
    <StyleSheetManager>
      <Container>
        <ContainerWrapper>
          <Header>
            <OpenedStatus
              style={{ color: unitInfo.openedStatus ? "#00FF00" : "#FF0000" }}
            >
              {unitInfo.openedStatus ? "Aberto" : "Fechado"}
            </OpenedStatus>
            <UnitNameTitle>{unitInfo.unitName}</UnitNameTitle>
            <AddressLabel
              dangerouslySetInnerHTML={{ __html: unitInfo.unitFullAddress }}
            ></AddressLabel>
          </Header>
          <Divisor />
          <InfoContainer>
            <RequirementsContainer>
              <RequirementsIcons
                mask="required"
                fountain="prohibited"
                lockerroom="partial"
                towel="required"
              />
            </RequirementsContainer>
            <SchedulesContainer>
              {unitInfo.schedules?.map((schedule, i) => {
                return (
                  <ScheduleCard key={`${schedule.weekdays}-${i}`}>
                    <ScheduleWeekdays>{schedule.weekdays}</ScheduleWeekdays>
                    <ScheduleHours>{schedule.hour}</ScheduleHours>
                  </ScheduleCard>
                );
              })}
            </SchedulesContainer>
          </InfoContainer>
        </ContainerWrapper>
      </Container>
    </StyleSheetManager>
  );
}

const Container = styled.div`
  width: 300px;
  height: 410px;
  background: white;
  border-radius: 6px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
`;

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Header = styled(InfoContainer)`
  height: 120px;
`;

const OpenedStatus = styled.span`
  font-weight: 600;
`;

const UnitNameTitle = styled.h1`
  color: ${(props) => props.theme.colors.dark_grey};
  font-size: 20px;
  font-weight: 700;
`;

const AddressLabel = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.dark_grey};
`;

const Divisor = styled.div`
  width: 100%;
  height: 1px;
  background: #e1e1e1;
  margin: 10px 0;
`;

const RequirementsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SchedulesContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const ScheduleCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ScheduleWeekdays = styled(UnitNameTitle)`
  font-size: 18px;
`;

const ScheduleHours = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.dark_grey};
`;
