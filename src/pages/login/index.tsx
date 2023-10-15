import Logo from '@/components/logo';
import InputEmail from '@/components/input-email';
import InputPassword from '@/components/input-password';
import BaseButton from '@/components/base-button';
import { CreateAccountText, SignUpText, ContainerSignUpText, Container } from './styles';

function Login() {

  return (
    <>
      <Container>
        <Logo />
        <InputEmail />
        <InputPassword />
        <BaseButton text='Entrar' />
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
