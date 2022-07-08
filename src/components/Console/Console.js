/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import Button from '../Button/Button';
import { StyledConsole, Line } from './styles';

const Console = ({ color }) => {
  const [lines, setLines] = useState(['C/users/SKYPRO_REACT>']);
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      setLines([...lines, 'C/users/SKYPRO_REACT>']);
    }
  };

  const onClick = () => {
    setLines(['C/users/SKYPRO_REACT>']);
    setInputValue('');
    setIsActive(false);
  };

  const onChange = (e) => {
    if (e.target.value === '') {
      setIsActive(false);
    } else setIsActive(true);

    setInputValue(e.target.value);
  };

  return (
    <>
      <Button onClick={onClick} active={isActive} color={color} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
        }}
      >
        <div>
          {lines.map((line, index) => (
            <Line key={index} color={color}>
              {line}
            </Line>
          ))}
        </div>
        <StyledConsole
          autoFocus
          color={color}
          onKeyPress={onKeyPress}
          onChange={onChange}
          value={inputValue}
        />
      </div>
    </>
  );
};

export default Console;
