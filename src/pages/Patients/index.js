import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Heading,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAuthToken, getPatients } from "../../services/api/api";
import Header from "../../components/Header";
import PatientCard from "../../components/PatientCard";
import { useNavigate } from "react-router-dom";

export default function Patients() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getAllPatients = async () => {
      const accessToken = await getAuthToken();

      if (accessToken) {
        const result = await getPatients(accessToken.data);
        console.log(result);
        setPatients(result.entry);
      }
    };
    getAllPatients();
  }, []);

  return (
    <Box
      marginTop={{ base: 16, md: 20, xl: 20 }}
      width="100vw"
      height="auto"
      bgGradient="linear-gradient(to bottom, #004460, #0083C5)"
    >
      <Container maxW="container.xl" centerContent>
        <Header />
        <HStack
          display={["flex", "flex", "flex", "none"]}
          mx={36}
          spacing={2}
          justify="center"
          alignItems="center"
        >
          <Link to="/">
            <Button
              w={["160px", "160px", "15vw", "15vw"]}
              colorScheme="green"
              onClick={() => navigate("/consultas")}
            >
              Página Inicial
            </Button>
          </Link>
          <Link to="/medicos">
            <Button
              w={["160px", "160px", "15vw", "15vw"]}
              colorScheme="teal"
              onClick={() => navigate("/medicos")}
            >
              Lista de médicos
            </Button>
          </Link>
        </HStack>
        <Heading as="h2" size="xl" my={8} color="#fff">
          Lista de Pacientes
        </Heading>
        <Button color="#0083C5" onClick={() => navigate("/register")}>
          Adicionar paciente
        </Button>
        <Divider my={4} />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          {patients &&
            patients?.map((patient, index) => (
              <PatientCard key={index} patient={patient} />
            ))}
        </SimpleGrid>
        <Divider my={4} />
      </Container>
    </Box>
  );
}
