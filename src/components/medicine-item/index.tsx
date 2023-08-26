import { Container, ContainerDescription, Image, Title, MedicineComposition, MedicineStatus } from './styles';
import MedicineImage from '@/assets/img/medicine.png';

interface MedicinteItemProps {
  status: string;
}

type Status = {
  available: string;
  unavailable: string;
  availableAt: string;
} 

function MedicineItem(props: MedicinteItemProps) {
  
  function renderStatus(value: string) {
    const status: Status = {
      available: 'Disponível',
      unavailable: 'Indisponível',
      availableAt: 'Disponível em 23/05/2023'
    };

    return status[value as keyof Status];
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
            { renderStatus(props.status as keyof Status) }
          </MedicineStatus>
        </ContainerDescription>
      </Container>
    </>
  );
}

export default MedicineItem;