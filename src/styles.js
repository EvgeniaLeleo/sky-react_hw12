import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => props.color};
`;

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;

  background: black;
`;
