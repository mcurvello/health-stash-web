import { ChangeEvent, useState } from 'react';
import BaseButton from '@/components/base-button';
import InputName from '@/components/input-name';
import InputAge from '@/components/input-birthdate';
import InputGender from '@/components/input-gender';
import InputSpeciality from '@/components/input-speciality';
import InputCommorbidities from '@/components/input-commorbities';
import InputEmail from '@/components/input-email';
import InputPassword from '@/components/input-password';
import { Container } from '@/components/styles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPhysician = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [commorbidities, setCommorbidities] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleAge(event: ChangeEvent<HTMLInputElement>) {
    setAge(event.target.value);
  }

  function handleSpeciality(event: ChangeEvent<HTMLInputElement>) {
    setSpeciality(event.target.value);
  }

  function handleCommorbidites(event: ChangeEvent<HTMLInputElement>) {
    setCommorbidities(event.target.value);
  }

  function handleEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  
  async function handleSignUp() {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      toast.success('Médico cadastrado com sucesso!', {
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
      toast.error('Erro ao cadastrar médico!', {
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
        <InputAge onChange={handleAge} />
        <InputGender />
      </Container>
      <InputSpeciality onChange={handleSpeciality} />
      <InputCommorbidities onChange={handleCommorbidites} />
      <InputEmail onChange={handleEmail} />
      <InputPassword onChange={handlePassword} />
      <Container align="center" top="30px">
        <BaseButton text='Cadastrar' onClick={handleSignUp} />
      </Container>
      <ToastContainer />
    </>
  );
};

export default AddPhysician;
