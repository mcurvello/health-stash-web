import Logo from "@/components/logo";
import InputSearch from "@/components/input-search";
import MedicineItem from "@/components/medicine-item";
import { MedicineList, Container, ContainerButtons } from './styles';
import BaseButton from "@/components/base-button";

function medicineList() {
  return (
    <> 
      <Container>
        <Logo />
        <InputSearch />
        <MedicineList>
          <MedicineItem status='available' />
          <MedicineItem status='unavailable' />
          <MedicineItem status='availableAt' />
          <ContainerButtons>
            <BaseButton icon="home" text="Home" />
            <BaseButton icon="comments" text="Chat" />
          </ContainerButtons>
        </MedicineList>
      </Container>
    </>
  )
}

export default medicineList;