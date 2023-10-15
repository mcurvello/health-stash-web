import InputName from '@/components/input-name';
import InputAge from '@/components/input-age';
import InputGender from '@/components/input-gender';
import InputSpecialty from '@/components/input-specialty';
import { Container } from '@/components/styles';
import BaseButton from '@/components/base-button';

const AddPhysician = () => {
  return (
    <>
      <InputName />
      <Container>
        <InputAge />
        <InputGender />
      </Container>
      <Container >
        <InputSpecialty />
      </Container>
      <Container align="center" top="30px">
        <BaseButton text='Cadastrar' />
      </Container>
    </>
  );
};

export default AddPhysician;
