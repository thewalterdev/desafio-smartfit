import maskRequiredIcon from "../../assets/required-mask.png";
import maskNotRequiredIcon from "../../assets/recommended-mask.png";
import toalhaRequiredIcon from "../../assets/required-towel.png";
import toalhaNotRequiredIcon from "../../assets/recommended-towel.png";
import bebedouroAllowed from "../../assets/partial-fountain.png";
import bebedouroNotAllowed from "../../assets/forbidden-fountain.png";
import vestiarioAllowed from "../../assets/required-lockerroom.png";
import vestiarioNotAllowed from "../../assets/forbidden-lockerroom.png";
import vestiarioPartial from "../../assets/partial-lockerroom.png";
import styled from "styled-components";

interface Props {
  mask: "recommended" | "required";
  towel: "recommended" | "required";
  fountain: "partial" | "prohibited";
  lockerroom: "allowed" | "partial" | "closed";
}

export default function RequirementsIcons({
  mask,
  towel,
  fountain,
  lockerroom,
}: Props) {
  return (
    <>
      {mask === "recommended" ? (
        <RequirementIcon src={maskNotRequiredIcon} />
      ) : (
        <RequirementIcon src={maskRequiredIcon} />
      )}
      {towel === "recommended" ? (
        <RequirementIcon src={toalhaNotRequiredIcon} />
      ) : (
        <RequirementIcon src={toalhaRequiredIcon} />
      )}
      {fountain === "partial" ? (
        <RequirementIcon src={bebedouroAllowed} />
      ) : (
        <RequirementIcon src={bebedouroNotAllowed} />
      )}
      {lockerroom === "allowed" ? (
        <RequirementIcon src={vestiarioAllowed} />
      ) : lockerroom === "partial" ? (
        <RequirementIcon src={vestiarioPartial} />
      ) : (
        <RequirementIcon src={vestiarioNotAllowed} />
      )}
    </>
  );
}

const RequirementIcon = styled.img`
  width: 65px;
  height: 65px;
`;
