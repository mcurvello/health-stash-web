import { Route, Routes } from 'react-router-dom';
import AddDoctor from '@/components/add-doctor';
import AddPatient from '@/components/add-patient';
import ChooseOptionSignup from '@/components/choose-option-signup';
import { Container } from '@/components/styles';
import Logo from '@/components/logo';

const signup = () => {
  return (
    <>
      <Container align="center">
        <Logo />
      </Container>
      <ChooseOptionSignup />
      <Routes>
        <Route path="/" element={<AddDoctor />} />
        <Route path="/patient" element={<AddPatient />} />
      </Routes>
    </>
  );
};

export default signup;
