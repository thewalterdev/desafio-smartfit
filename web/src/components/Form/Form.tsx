import styled from "styled-components";

import clockImageUrl from "../../assets/icon-hour.png";
import RadioButtonContainer from "./RadioButtonContainer";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onSubmitFunction: (data: {
    period: string;
    showClosedUnits: boolean;
  }) => void;

  results: number;
}

export default function Form({ onSubmitFunction, results = 0 }: Props) {
  const [period, setPeriod] = useState<string>("");
  const [showClosedUnits, setShowClosedUnits] = useState<boolean>(false);

  function resetForm() {
    const form: HTMLFormElement | null = document.querySelector("#unit_form");
    form!.reset();
    setPeriod("");
    setShowClosedUnits(false);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const data = {
      period: period,
      showClosedUnits: showClosedUnits,
    };

    onSubmitFunction(data);
  }

  function onRadioChange(e: ChangeEvent<HTMLInputElement>) {
    setPeriod(e.target.value);
  }

  return (
    <Container>
      <ContainerWrapper>
        <ContainerHeader>
          <img src={clockImageUrl} alt="Relógio" width={20} />
          <HorarioSpan>Horário</HorarioSpan>
        </ContainerHeader>
        <FormContainer id="unit_form" onSubmit={(e) => onSubmit(e)}>
          <Title>Qual período quer treinar?</Title>
          <Divisor />
          <RadioButtonContainer
            id="morning"
            periodLabel="Manhã"
            periodHour="06:00 às 12:00"
            onValueChange={onRadioChange}
          />
          <Divisor />
          <RadioButtonContainer
            id="afternoon"
            periodLabel="Tarde"
            periodHour="12:01 às 18:00"
            onValueChange={onRadioChange}
          />
          <Divisor />
          <RadioButtonContainer
            id="evening"
            periodLabel="Noite"
            periodHour="18:01 às 23:00"
            onValueChange={onRadioChange}
          />
          <Divisor />
          <Options>
            <ClosedUnitsDiv>
              <ClosedUnitsInput
                type="checkbox"
                id="showclosedunits"
                name="showclosedunits"
                onChange={(e) => setShowClosedUnits(e.target.checked)}
              />
              <ClosedUnitsLabel htmlFor="showclosedunits">
                Exibir unidades fechadas
              </ClosedUnitsLabel>
            </ClosedUnitsDiv>
            <ResultsAmount>
              Resultados: <strong>{results}</strong>
            </ResultsAmount>
          </Options>
          <Buttons>
            <FindButton type="submit">ENCONTRAR UNIDADE</FindButton>
            <ClearButton type="button" onClick={resetForm}>
              LIMPAR
            </ClearButton>
          </Buttons>
        </FormContainer>
      </ContainerWrapper>
    </Container>
  );
}

const HorarioSpan = styled.span`
  color: ${(props) => props.theme.colors.light_grey};
  font-size: 16px;
`;

const Title = styled.span`
  font-size: 22px;
  color: ${(props) => props.theme.colors.light_grey};
`;

const Container = styled.div`
  width: 100%;
  padding: 0 80px;
  margin-top: 30px;
`;

const ContainerWrapper = styled.div`
  border: 4px solid #e1e1e1;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 20px;
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 5px;
  width: 100%;
  color: #e1e1e1;
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Divisor = styled.span`
  width: 100%;
  height: 1px;
  background: #e1e1e1;
  margin: 10px 0;
`;

const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const ClosedUnitsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

const ClosedUnitsInput = styled.input`
  width: 15px;
  height: 15px;
`;

const ClosedUnitsLabel = styled.label`
  color: ${(props) => props.theme.colors.light_grey};
`;

const ResultsAmount = styled.span``;

const Buttons = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const FindButton = styled.button`
  cursor: pointer;
  padding: 15px 40px;
  background: ${(props) => props.theme.colors.yellow};
  color: black;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid transparent;
  border-radius: 5px;
`;

const ClearButton = styled(FindButton)`
  background: none;
  color: black;
  border: 2px solid ${(props) => props.theme.colors.light_grey};
  border-radius: 5px;
`;
