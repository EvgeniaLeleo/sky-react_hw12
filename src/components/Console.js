/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import styled from 'styled-components';
import Line from './Line';
import Button from './Button';

const StyledConsole = styled.textarea`
  font-size: inherit;
  color: ${(props) => props.color};

  width: 100%;
  min-height: 70vh;

  background: transparent;
  border: none;
  :focus {
    outline: none;
  }

  resize: none;
`;

const Console = ({ color }) => {
  const [lines, setLines] = useState(['C/users/SKYPRO_REACT>']);
  const [status, setStatus] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      setLines([...lines, 'C/users/SKYPRO_REACT>']);
    }
  };

  const onClick = () => {
    setLines(['C/users/SKYPRO_REACT>']);
    setInputValue('');
    setStatus(false);
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
    setStatus(true);
  };

  // const ConsoleWrapper = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   gap: 10px;
  //   align-items: flex-start;
  // `;

  return (
    <>
      <Button onClick={onClick} active={status} color={color} />
      {lines.map((line, index) => (
        <Line key={index} color={color}>
          {line}
        </Line>
      ))}
      <StyledConsole
        autoFocus
        color={color}
        onKeyPress={onKeyPress}
        onChange={onChange}
        value={inputValue}
      />
    </>
  );
};

export default Console;
