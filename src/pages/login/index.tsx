import { useState } from 'react';
import Logo from '@/components/logo';
import InputEmail from '@/components/input-email';
import InputPassword from '@/components/input-password';
import BaseButton from '@/components/base-button';
import { CreateAccountText, SignUpText, ContainerSignUpText, Container } from './styles';
import { login } from '@/services/firebase/login'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: Event) => {
    event.preventDefault();
    try {
      await login(email, password);
      toast.success('Login feito com sucesso!', {
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
      toast.error('E-mail ou senha incorretos!', {
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

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <>
      <Container>
        <Logo />
        <InputEmail onChange={handleEmail} />
        <InputPassword onChange={handlePassword} />
        <BaseButton text='Entrar' onClick={handleLogin} />
        <CreateAccountText>
          Não possui conta?
          <ContainerSignUpText>
            <SignUpText to="add-patient">
              Cadastro de paciente
            </SignUpText>
            <SignUpText to="add-physician">
              Cadastro de médico
            </SignUpText>
          </ContainerSignUpText>
        </CreateAccountText>
        <ToastContainer />
      </Container>
    </>
  )
}

export default Login
