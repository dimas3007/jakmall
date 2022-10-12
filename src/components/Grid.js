import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  min-height: 45rem;
  background-color: ${({ theme }) => theme.white};
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  position: relative;
  border-radius: 1rem;
`;

export const GridItem = styled.div`
  grid-column: ${(props) => props.grid};
  padding: ${(props) => props.p};
`;
