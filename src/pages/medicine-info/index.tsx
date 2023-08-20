import Logo from "@/components/logo";
import InputSearch from "@/components/input-search";
import MedicineItem from "@/components/medicine-item";
import { Container, ContainerButtons, ContainerSimilarMedicines } from './styles';
import MedicineInfo from "@/components/medicine-info";
import BaseButton from "@/components/base-button";


function MedicineInfoPage() {
  return (
    <> 
      <Container>
        <Logo />
        <InputSearch />
        <MedicineInfo />
        <ContainerSimilarMedicines>
          <MedicineItem status="available" />
          <MedicineItem status="available" />
        </ContainerSimilarMedicines>
        <ContainerButtons>
          <BaseButton icon="home" text="Home" />
          <BaseButton icon="comments" text="Chat" />
        </ContainerButtons>
      </Container>
    </>
  )
}

export default MedicineInfoPage;