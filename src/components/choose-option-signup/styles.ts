import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-white);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`

const ContainerInputRadio = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-white);
  font-family: 'Roboto', sans-serif;
  margin-left: 20px;
`
const Title = styled.h2`
  color: var(--color-white);
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export { Container, ContainerInputRadio, Title }