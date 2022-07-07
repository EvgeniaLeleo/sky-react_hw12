import styled from 'styled-components';

const ButtonStyles = styled.button`
  display: inline-block;
  display: block;

  font-family: monospace;
  font-size: 18px;
  color: green;
  text-decoration: none;
  opacity: ${(props) => (props.$active ? '100%' : '50%')};

  padding: 10px 20px;
  margin-bottom: 20px;

  background-color: transparent;

  border: 2px solid green;
  border-radius: 3px;

  cursor: ${(props) => (props.$active ? 'pointer' : 'default')};
  transition: all 0.3s;

  :hover {
    color: ${(props) => (props.$active ? 'tomato' : 'green')};
    border: 2px solid ${(props) => (props.$active ? 'tomato' : 'green')};
  }

  :active {
    transform: ${(props) => (props.$active ? 'translate(1px, 1px)' : 'none')};
  }
`;

const Button = ({ active = false, onClick }) => (
  <div>
    <ButtonStyles $active={active} onClick={onClick}>
      Reset
    </ButtonStyles>
  </div>
);

export default Button;
