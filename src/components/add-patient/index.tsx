import React, { useState, useContext } from 'react';
import InputName from '@/components/input-name';
import InputBirthdate from '@/components/input-birthdate';
import InputGender from '@/components/input-gender';
import { Container } from '@/components/styles';
import BaseButton from '@/components/base-button';
import InputAllergies from '@/components/input-allergies';
import InputEmail from '@/components/input-email';
import InputCommorbidities from '../input-commorbities';
import InputPassword from '@/components/input-password';
import { AuthContext } from '@/context/AuthContext';
import { converterDataParaFormatoISO } from '@/utils/date';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCreatePatient from '@/services/useCreatePatient';

const AddPatient = () => {
  const auth = useContext(AuthContext);
  const { createPatient } = useCreatePatient();

  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('01/01/1900');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleBirthdate(event: React.ChangeEvent<HTMLInputElement>) {
    setBirthdate(event.target.value);
  }

  function handleGender(event: React.ChangeEvent<HTMLInputElement>) {
    setGender(event.target.value);
  }

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function handleSignUp(event: Event) {
    event.preventDefault();
    try {
      const [firstName, middleName, lastName] = name.split(" ");

      await auth?.createUser(email, password);
      await createPatient({
        birthDate: converterDataParaFormatoISO(birthdate),
        firstName,
        middleName,
        lastName,
        gender
      })

      toast.success('Paciente cadastrado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      });
    } catch {
      toast.error('Paciente não foi cadastrado!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      });
    }
  }

  return (
    <>
      <InputName onChange={handleName} />
      <Container>
        <InputBirthdate onChange={handleBirthdate} />
        <InputGender onChange={handleGender} />
      </Container>
      <Container>
        <InputAllergies />
      </Container>
      <Container>
        <InputCommorbidities />
      </Container>
      <InputEmail onChange={handleEmail} />
      <InputPassword onChange={handlePassword} />
      <Container align="center" top="30px">
        <BaseButton text='Cadastrar' onClick={handleSignUp} />
      </Container>
      <ToastContainer />
    </>
  );
};

export default AddPatient;

