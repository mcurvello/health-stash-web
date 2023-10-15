import AddPhysician from '@/components/add-physician';
import { Container } from '@/components/styles';
import Logo from '@/components/logo';

const AddPhysicianPage = () => {
  return (
    <>
      <Container align="center">
        <Logo />
      </Container>
      <AddPhysician />
    </>
  );
};

export default AddPhysicianPage;
