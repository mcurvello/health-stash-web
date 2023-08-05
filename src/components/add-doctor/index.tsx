import InputName from '@/components/input-name';
import InputAge from '@/components/input-age';
import InputGender from '@/components/input-gender';
import InputCRM from '@/components/input-crm';
import InputSpecialty from '@/components/input-specialty';
import { Container } from '@/components/styles';
import BaseButton from '@/components/base-button';

const signup = () => {
  return (
    <>
      <InputName />
      <Container>
        <InputAge />
        <InputGender />
      </Container>
      <Container >
        <InputCRM />
        <InputSpecialty />
      </Container>
      <Container align="center" top="30px">
        <BaseButton text='Cadastrar' />
      </Container>
    </>
  );
};

export default signup;
