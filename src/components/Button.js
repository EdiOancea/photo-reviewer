import styled, {css} from 'styled-components';

const Button = styled.button`
  height: 50px;
  width: 120px;
  border-radius: 20px;
  border-width: 0px;
  cursor: pointer;
  ${({disabled}) => disabled && css`
    opacity: 0.4;
    cursor: inherit;
  `}
`;

export default Button;
