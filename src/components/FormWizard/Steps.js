import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";

const WrapStep = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: -4rem;
`;

const BoxStep = styled.div`
  background-color: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 2.6rem 4rem;
  border-radius: 5rem;
`;

const StepItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    background-color: ${({ active, theme }) =>
      active === "true" ? theme.primary : theme.secondary};
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    display: flex;
    color: ${({ active, theme }) =>
      active === "true" ? theme.white : theme.primary};
    justify-content: center;
    align-items: center;
  }
`;

const stepsData = ["Delivery", "Payment", "Finish"];

const Steps = ({ active }) => {
  return (
    <WrapStep>
      <BoxStep>
        {stepsData.map((item, index) => (
          <StepItem active={index <= active ? "true" : ""}>
            <span>{index + 1}</span>
            {item}
            {index !== 2 ? <BsChevronRight /> : <></>}
          </StepItem>
        ))}
      </BoxStep>
    </WrapStep>
  );
};

export default Steps;
