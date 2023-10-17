import styled from 'styled-components';
import { InputMask } from '@react-input/mask';

interface InputMaskProps {
  mask: string;
  replacement: Record<string, RegExp>;
}

const InputBithdateMask = styled(InputMask)<InputMaskProps>`
  border: 2px solid var(--color-white);
  border-radius: 37px;
  padding: 10px 40px;
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
  margin-bottom: 10px;
  background: transparent;
  background-image: '';
  background-repeat: no-repeat;
  background-position: center left 12px;
  caret-color: var(--color-white);
  color: var(--color-white);
  margin: 10px 0;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;

  &::placeholder {
    color: var(--color-white);
    font-size: 16px;
  };

  &:focus {
    outline: var(--color-blue) solid 2px;
  }
`

export { InputBithdateMask };