import './styles.css';
import Logo from '@/components/logo';
import InputUser from '@/components/input-user';
import InputPassword from '@/components/input-password';
import BaseButton from '@/components/base-button';
import { CreateAccountText, SignUpText, ContainerSignUpText } from './styles';

function Login() {

  return (
    <>
      <Logo />
      <form>
        <InputUser />
        <InputPassword />
        <BaseButton text='Entrar' />
      </form>
      <CreateAccountText>
        Não possui conta?
        <ContainerSignUpText>
          <SignUpText>
            Cadastro de paciente
          </SignUpText>
          <SignUpText>
            Cadastro de médico
          </SignUpText>
        </ContainerSignUpText>
      </CreateAccountText>
    </>
  )
}

export default Login
