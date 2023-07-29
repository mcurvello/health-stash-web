import './styles.css';
import Logo from '@/assets/img/logo.png';

function Home() {

  return (
    <>
      <h1 className='title'>
        Health Stash
        <img
          className="logo" 
          src={Logo} alt="Health Stash logo com medicamentos e uma imagem de coração atrás"
        />
      </h1>
    </>
  )
}

export default Home;