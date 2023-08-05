import styled from 'styled-components';
import UserIcon from '@/assets/img/user-icon.svg';
import PasswordIcon from '@/assets/img/password-icon.svg';
import ArrowIcon from '@/assets/img/arrow-icon.svg'

const Input = styled.input.attrs((props) => ({
    type: props.type || 'text',
  }))`
  border: 2px solid var(--color-white);
  border-radius: 37px;
  padding: 10px 40px;
  width: ${({ width }) => width || '100%'};
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

  &[placeholder='CRM/CPF'] {
    background-image: url(${UserIcon});
  }

  &[type='password'] {
    background-image: url(${PasswordIcon});
  }

  &[placeholder='Gênero'],
  &[placeholder='Especialidade'],
  &[placeholder='Convênio'] {
    background-image: url(${ArrowIcon});
    background-position: center right 12px;
  }

  &::placeholder {
    color: var(--color-white);
    font-size: 16px;
  }
`;

const LabelTags = styled.span`
  display: inline-block;
  margin-left: 14px;
  font-size: 16px;
  color: var(--color-white);
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`

export { Input, LabelTags };