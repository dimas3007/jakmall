import styled from "styled-components";
import FormWizard from "../components/FormWizard/FormWizard";

const Wrapper = styled.div`
  padding: 4rem;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`;

const Payment = () => {
  return (
    <Wrapper>
      <FormWizard />
    </Wrapper>
  );
};

export default Payment;
