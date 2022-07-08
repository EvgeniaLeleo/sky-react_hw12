import ButtonStyles from './styles';

const Button = ({ active = false, onClick, color }) => (
  <div>
    <ButtonStyles $active={active} onClick={onClick} color={color}>
      Reset
    </ButtonStyles>
  </div>
);

export default Button;
