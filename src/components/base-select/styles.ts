import styled from "styled-components";

const ContainerInput = styled.div`
  position: relative;
`;

const Option = styled.div`
  background-color: transparent;
  color: var(--color-white);
  font-family: 'Roboto', sans-serif;
`;

const ContainerOptions = styled.div`
  position: absolute;
  top: 100%;
  left:  0;
  border: 2px solid var(--color-white);
  width: 100%;
  border-radius: 12px;
`;

export { Option, ContainerInput, ContainerOptions };