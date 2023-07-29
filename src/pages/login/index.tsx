import './styles.css';
import Logo from '@/components/logo';
import BaseInputUser from '@/components/base-input-user';
import BaseInputPassword from '@/components/base-input-password';
import BaseButton from '@/components/base-button';

function Login() {

  return (
    <>
      <Logo />
      <h2 className='login-title'>Login</h2>
      <BaseInputUser placeholder='CPF/CRM' />
      <BaseInputPassword placeholder='Digite sua senha' />
      <BaseButton text='Login' />
      <p className='create-account-text'>
        Não possui conta?
        <a>Cadastrar agora</a>
      </p>
    </>
  )
}

export default Login
