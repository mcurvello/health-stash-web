import { useContext } from 'react';
import Logo from '@/components/logo';
import InputEmail from '@/components/input-email';
import InputPassword from '@/components/input-password';
import BaseButton from '@/components/base-button';
import { CreateAccountText, SignUpText, ContainerSignUpText, Container } from './styles';
import { AuthContext } from '@/context/AuthContext';

function Login() {

  const auth = useContext(AuthContext);

  const handleLogin = async (event: Event) => {
    event.preventDefault();
    const resp = await auth?.login('jose.laercio.bezerra@gmail.com', 'Test123#');
    console.log(resp);
  }

  return (
    <>
      <Container>
        <Logo />
        <InputEmail />
        <InputPassword />
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
      </Container>
    </>
  )
}

export default Login
