import Logo from "@/components/logo";
import InputSearch from "@/components/input-search";
import MedicineItem from "@/components/medicine-item";
import { MedicineList, Container } from './styles';

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
        </MedicineList>
      </Container>
    </>
  )
}

export default medicineList;