import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 1rem 3rem;
  border: ${({ theme }) => theme.primary};
  font-size: 16px;
  cursor: pointer;
  width: 100%;
`;

export default Button;
