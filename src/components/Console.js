/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import styled from 'styled-components';
import Line from './Line';
import Button from './Button';

const StyledConsole = styled.textarea`
  font-size: inherit;
  color: green;

  width: 100%;
  height: 70vh;

  background: rgba(255, 255, 255, 0.2);
  border: none;
  :focus {
    outline: none;
  }

  resize: none;

  autofocus: true;
`;

const Console = (color, ...props) => {
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
      <Button onClick={onClick} active={status} />
      {lines.map((line) => (
        <Line>{line}</Line>
      ))}
      <StyledConsole
        {...props}
        color={color}
        onKeyPress={onKeyPress}
        onChange={onChange}
        value={inputValue}
      />
    </>
  );
};

export default Console;
