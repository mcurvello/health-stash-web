import {
  Container,
  ContainerDescription,
  MedicineTitle,
  Info,
  Status,
  ContainerPrice,
  Price,
  AccessLeafletLink,
  SimilarMedicines,
} from './styles';
import MedicineInfoImg from '@/assets/img/medicine-info.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const MedicineInfo = () => {
  return (
    <>
      <Container>
        <img src={MedicineInfoImg} alt="Imagem do Remédio" />
        <ContainerDescription>
          <MedicineTitle>
            Nome do remédio
          </MedicineTitle>
          <Info>ID:0000000000000000</Info>
          <Info>Dosagem/Composição</Info>
          <Info>Marca</Info>
          <Info>Possui Genérico</Info>
          <Info>Receita necessária</Info>
        </ContainerDescription>
        <ContainerPrice>
          <Status>Disponível</Status>
          <Price>Preço: R$ 30,00</Price>
          <AccessLeafletLink>
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px' }} />
            Acessar Bula
          </AccessLeafletLink>
        </ContainerPrice>
      </Container>
      <SimilarMedicines>Resultados Similares</SimilarMedicines>
    </>
  )
}

export default MedicineInfo;