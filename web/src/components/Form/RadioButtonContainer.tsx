import { ChangeEvent } from "react";
import styled from "styled-components";

interface Props {
  id: string;
  periodLabel: string;
  periodHour: string;
  onValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioButtonContainer({
  id,
  periodLabel,
  periodHour,
  onValueChange,
}: Props) {
  return (
    <Container htmlFor={id}>
      <RadioAndLabel>
        <Radio
          type="radio"
          id={id}
          name="period"
          value={id}
          onChange={onValueChange}
        />
        <PeriodLabel htmlFor={id}>{periodLabel}</PeriodLabel>
      </RadioAndLabel>
      <PeriodLabel htmlFor={id}>{periodHour}</PeriodLabel>
    </Container>
  );
}

const Container = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const RadioAndLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

const Radio = styled.input`
  width: 15px;
  height: 15px;
`;

const PeriodLabel = styled.label`
  color: ${(props) => props.theme.colors.light_grey};
  font-size: 18px;
`;
