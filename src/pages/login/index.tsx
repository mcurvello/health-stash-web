import './styles.css';
import Logo from '@/components/logo';
import InputUser from '@/components/input-user';
import InputPassword from '@/components/input-password';
import BaseButton from '@/components/base-button';

function Login() {

  return (
    <>
      <Logo />
      <h2 className='login-title'>Login</h2>
      <form>
        <InputUser />
        <InputPassword />
        <BaseButton text='Login' />
      </form>
      <p className='create-account-text'>
        Não possui conta?
        <a href={'/signup'}>
          Cadastrar agora
        </a>
      </p>
    </>
  )
}

export default Login
