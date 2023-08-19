import styled, { css } from "styled-components";

interface Props {
  status: string
}

const fontCustom = css`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  line-height: 27px;
`;

const Container = styled.div`
  width: 100%;
  background: var(--color-white);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  cursor: pointer;
`;

const Image = styled.img`
  cursor: pointer;
  max-width: 100%;
`;

const Title = styled.h4`
  font-size: 18px;
  font-weight: 600px;
  color: #09101D;
  margin-bottom: 8px;
  ${fontCustom};
`

const ContainerDescription = styled.div``;

const MedicineComposition = styled.p`
  ${fontCustom};
  color: #858C94;
  font-size: 14px;
  line-height: 21px;
`;

type Status = 'available' | 'unavailable' | 'availableAt'; 

function colorStatus(value: Status) {
  const status = {
    available: '#01591F',
    unavailable: '#FF1843',
    availableAt: '#FF8A00',
  }
  
  return status[value] ?? 'red';
}

const MedicineStatus = styled.p<Props>`
  ${fontCustom};
  color: #858C94;
  font-size: 14px;
  line-height: 21px;
  color: ${props => colorStatus(props.status as Status)};
`;

export { Container, Image, Title, ContainerDescription, MedicineComposition, MedicineStatus };