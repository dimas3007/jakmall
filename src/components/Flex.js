import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => (props.items ? props.items : "start")};
  justify-content: ${({ justify }) => justify};
  margin-bottom: ${({ mb }) => (mb ? mb : "3rem")};
  margin-top: ${({ mt }) => mt};
  gap: ${(props) => props.gap};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  flex: ${({ flex }) => (flex ? flex : 1)};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
