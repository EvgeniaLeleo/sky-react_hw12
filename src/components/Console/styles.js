import styled from 'styled-components';

export const StyledConsole = styled.textarea`
  font-size: inherit;
  color: ${(props) => props.color};

  padding: 0 3px;

  width: 100%;
  min-height: 100%;

  background: transparent;
  border: none;
  :focus {
    outline: none;
  }

  resize: none;
`;

export const Line = styled.div`
  color: ${(props) => props.color};
  font-size: 16px;
`;
