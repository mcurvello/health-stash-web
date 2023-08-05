import InputName from '@/components/input-name';
import InputAge from '@/components/input-age';
import InputGender from '@/components/input-gender';
import InputCPF from '@/components/input-cpf';
import InputHealthInsurance from '@/components/input-health-insurance';
import InputRegistrationNumber from '@/components/input-registration-number';
import { Container } from '@/components/styles';
import BaseButton from '@/components/base-button';
import InputAllergies from '@/components/input-allergies';
import InputCommorbidities from '../input-commorbities';

const AddPatient = () => {
  return (
    <>
      <InputName />
      <Container>
        <InputAge width='170px' />
        <InputGender width='254px' />
        <InputCPF />
      </Container>
      <Container >
        <InputHealthInsurance />
        <InputRegistrationNumber />
      </Container>
      <Container>
        <InputAllergies />
      </Container>
      <Container>
        <InputCommorbidities />
      </Container>
      <Container align="center" top="30px">
        <BaseButton text='Cadastrar' />
      </Container>
    </>
  );
};

export default AddPatient;

