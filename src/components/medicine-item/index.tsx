import { Container, ContainerDescription, Image, Title, MedicineComposition, MedicineStatus } from './styles';
import MedicineImage from '@/assets/img/medicine.png';

interface MedicinteItemProps {
  status: string;
}

type Status = 'available' | 'unavailable' | 'availableAt'; 

function MedicineItem(props: MedicinteItemProps) {
  
  function renderStatus(value: Status) {
    const status = {
      available: 'Disponível',
      unavailable: 'Indisponível',
    };

    return status[value] ?? 'Disponível até dia 23/05/2023';
  }
  
  return (
    <>
      <Container>
        <Image src={MedicineImage} alt="Remédio" />
        <ContainerDescription>
          <Title>Nome do Remédio</Title>
          <MedicineComposition>
            Dosagem/composição
          </MedicineComposition>
          <MedicineStatus status={props.status}>
            { renderStatus(props.status as Status) }
          </MedicineStatus>
        </ContainerDescription>
      </Container>
    </>
  );
}

export default MedicineItem;