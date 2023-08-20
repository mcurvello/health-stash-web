import styled from "styled-components";

const Container = styled.div`
  width: 1040px;
`

const MedicineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export { MedicineList, Container, ContainerButtons }