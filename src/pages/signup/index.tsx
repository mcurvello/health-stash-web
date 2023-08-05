import Logo from '@/components/logo';
import InputName from '@/components/input-name';
import InputAge from '@/components/input-age';

const signup = () => {
  return (
    <>
      <Logo />
      <h2 className='login-title'>Cadastro Médico</h2>
      <InputName />
      <div className="container">
        <InputAge />
      </div>
    </>
  );
};

export default signup;
