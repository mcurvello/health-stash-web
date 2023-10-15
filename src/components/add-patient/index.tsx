import InputName from '@/components/input-name';
import InputAge from '@/components/input-age';
import InputGender from '@/components/input-gender';
import { Container } from '@/components/styles';
import BaseButton from '@/components/base-button';
import InputAllergies from '@/components/input-allergies';
import InputEmail from '@/components/input-email';
import InputCommorbidities from '../input-commorbities';

const AddPatient = () => {
  return (
    <>
      <InputName />
      <Container>
        <InputAge />
        <InputGender width='254px' />
      </Container>
      <Container>
        <InputAllergies />
      </Container>
      <Container>
        <InputCommorbidities />
      </Container>
      <InputEmail />
      <Container align="center" top="30px">
        <BaseButton text='Cadastrar' />
      </Container>
    </>
  );
};

export default AddPatient;

