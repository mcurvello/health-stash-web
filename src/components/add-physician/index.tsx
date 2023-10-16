import { ChangeEvent, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BaseButton from '@/components/base-button';
import InputName from '@/components/input-name';
import InputBirthdate from '@/components/input-birthdate';
import InputGender from '@/components/input-gender';
import InputSpeciality from '@/components/input-speciality';
import InputTel from '@/components/input-tel';
import InputEmail from '@/components/input-email';
import InputPassword from '@/components/input-password';
import { converterDataParaFormatoISO } from '@/utils/date';

import { Container } from '@/components/styles';
import { createUser } from '@/services/firebase/create-user';
import useCreatePhysician from '@/services/api/useCreatePhysician';
import { ToastContext } from '@/context/toast';

const AddPhysician = () => {
  const toast = useContext(ToastContext);
  const { createPhysician } = useCreatePhysician();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [tel, setTel] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleBirthdate(event: ChangeEvent<HTMLInputElement>) {
    setBirthdate(event.target.value);
  }

  function handleGender(event: ChangeEvent<HTMLInputElement>) {
    setGender(event.target.value);
  }

  function handleSpeciality(event: ChangeEvent<HTMLInputElement>) {
    setSpeciality(event.target.value);
  }

  function handleTel(event: ChangeEvent<HTMLInputElement>) {
    setTel(event.target.value);
  }

  function handleEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  
  async function handleSignUp() {
    try {
      const [firstName, middleName, lastName] = name.split(" ");

      await createUser(email, password)
      const { id } = await createPhysician({
        birthDate: converterDataParaFormatoISO(birthdate),
        firstName,
        middleName,
        lastName,
        gender,
        tel,
        speciality,
      })
      if (id) {
        toast?.showToastSuccess('Médico cadastrado com sucesso!');
        navigate("/");
      }
    } catch {
      toast?.showToastError('Erro ao cadastrar médico!');
    }
  }

  return (
    <>
      <InputName onChange={handleName} />
      <Container>
        <InputBirthdate onChange={handleBirthdate} />
        <InputGender onChange={handleGender} />
      </Container>
      <InputSpeciality onChange={handleSpeciality} />
      <InputTel onChange={handleTel} />
      <InputEmail onChange={handleEmail} />
      <InputPassword onChange={handlePassword} />
      <Container align="center" top="30px">
        <BaseButton text='Cadastrar' onClick={handleSignUp} />
      </Container>
    </>
  );
};

export default AddPhysician;
