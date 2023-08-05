import { useState } from 'react';
import BaseRadio from '@/components/base-radio';
import { useNavigate, useLocation } from "react-router-dom";
import { Container, ContainerInputRadio, Title } from './styles';

const ChooseOptionSignup = () => {
  const location = useLocation();

  const initialOption = location.pathname === '/signup/patient' ? 'patient' : 'doctor';

  const [option, setOption] = useState(initialOption); 

  const isDoctor = option === 'doctor';
  
  const navigate = useNavigate();
  
  function handleChange(value: string) {
    setOption(value);
    const route = value === 'doctor' ? '/signup' : '/signup/patient';
    navigate(route);
  }

  return (
    <>
      <Title> {`Cadastro ${isDoctor ? 'Médico' : 'Paciente'}`}</Title>
      <Container>
        <p>Escolha uma opção:</p>
        <ContainerInputRadio>
          <BaseRadio
            label="médico"
            value="doctor"
            checked={option === 'doctor'}
            onChange={handleChange}
          />
        </ContainerInputRadio>
        <ContainerInputRadio>
          <BaseRadio
            label="paciente"
            value="patient"
            checked={option === 'patient'}
            onChange={handleChange}
          />
        </ContainerInputRadio>
      </Container>
    </>
  );
};

export default ChooseOptionSignup;