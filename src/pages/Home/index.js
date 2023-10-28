import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Patient from "../../components/Patient";
import Appointments from "../../components/Appointments";
import Header from "../../components/Header";
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const totalPatients = patients.length;
  const { userType } = useContext(AuthenticationContext);
  console.log(userType);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  const scheduleAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <Box
      marginTop={{ base: 16, md: 20, xl: 20 }}
      width="100vw"
      height="100vh"
      bgGradient="linear-gradient(to bottom, #004460, #0083C5)"
    >
      <Header />

      <Flex
        height={["10vh", "10vh", "20vh", "20vh"]}
        alignItems="center"
        justifyContent="center"
      >
        <Heading as="h1" size={["md", "xl", "xl", "xl"]} color="#fff">
          Tenha a saúde em mãos
        </Heading>
      </Flex>
      <Box
        bg="#fff"
        p={[3, 3, 6, 6]}
        color="white"
        mx={[3, 3, 6, 8]}
        mb={8}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Box>
          <Heading
            color="#0083C5"
            as="h1"
            size={["sm", "md", "md", "xl"]}
            mb={4}
          >
            Médicos: Saúde de seus pacientes
          </Heading>
          <Text fontSize={["sm", "md", "md", "lg"]} color="#000">
            Aqui você pode encontrar informações sobre o histórico de saúde de
            seus pacientes, e sua agenda de consultas.
          </Text>
        </Box>
        <Divider my={8} />
        <Box>
          <Heading
            size={["sm", "md", "md", "xl"]}
            color="#0083C5"
            as="h1"
            mb={4}
          >
            Pacientes: Sua saúde
          </Heading>
          <Text fontSize={["sm", "md", "md", "lg"]} color="#000">
            Aqui você pode encontrar informações sobre seu histórico de saúde,
            resultados de exames e prescrições médicas.
          </Text>
        </Box>
      </Box>
      <HStack
        display={["none", "none", "none", "flex"]}
        mx={36}
        mt={20}
        spacing={8}
        justify="space-between"
      >
        <Link to="/pacientes">
          <Button
            w="15vw"
            colorScheme="teal"
            onClick={() => navigate("/pacientes")}
          >
            Lista de pacientes
          </Button>
        </Link>
        <Link to="/medicos">
          <Button
            w="15vw"
            colorScheme="blue"
            onClick={() => navigate("/medicos")}
          >
            Lista de médicos
          </Button>
        </Link>
        <Link to="/consultas">
          <Button
            w="15vw"
            colorScheme="green"
            onClick={() => navigate("/consultas")}
          >
            Consultas agendadas
          </Button>
        </Link>
      </HStack>
      <VStack
        display={["flex", "flex", "flex", "none"]}
        mx={36}
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <Link to="/pacientes">
          <Button
            w={["180px", "15vw", "15vw", "15vw"]}
            colorScheme="teal"
            onClick={() => navigate("/pacientes")}
          >
            Lista de pacientes
          </Button>
        </Link>
        <Link to="/medicos">
          <Button
            w={["180px", "15vw", "15vw", "15vw"]}
            colorScheme="blue"
            onClick={() => navigate("/medicos")}
          >
            Lista de médicos
          </Button>
        </Link>
        <Link to="/consultas">
          <Button
            w={["180px", "15vw", "15vw", "15vw"]}
            colorScheme="green"
            onClick={() => navigate("/consultas")}
          >
            Consultas agendadas
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}

export default Home;
