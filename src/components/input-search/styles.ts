import styled from "styled-components";
import SearchIcon from '@/assets/img/search-icon.svg';

const Input = styled.input`
  border: 1px solid var(--color-white);
  background: transparent;
  border-radius: 37px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  max-width: 1040px;
  width: 100%;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: center right 12px;

  &::placeholder {
    color: var(--color-white);
  }
`;

export { Input };