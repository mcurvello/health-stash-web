import AddPatient from '@/components/add-patient';
import { Container } from '@/components/styles';
import Logo from '@/components/logo';

const AddPatientPage = () => {
  return (
    <>
      <Container align="center">
        <Logo />
      </Container>
      <AddPatient />
    </>
  );
};

export default AddPatientPage;
