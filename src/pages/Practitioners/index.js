import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import PractitionerCard from "../../components/PractitionerCard";
import { useEffect, useState } from "react";
import { getAuthToken, getPractitioners } from "../../services/api/api";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";

export default function Practitioners() {
  const [practitioners, setPractitioners] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllPractitioners = async () => {
      const accessToken = await getAuthToken();

      if (accessToken) {
        const result = await getPractitioners(accessToken.data);
        setPractitioners(result.entry);
      }
    };
    getAllPractitioners();
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
              w={["160px", "15vw", "15vw", "15vw"]}
              colorScheme="green"
              onClick={() => navigate("/consultas")}
            >
              Página Inicial
            </Button>
          </Link>
          <Link to="/pacientes">
            <Button
              w={["160px", "15vw", "15vw", "15vw"]}
              colorScheme="teal"
              onClick={() => navigate("/pacientes")}
            >
              Lista de pacientes
            </Button>
          </Link>
        </HStack>
        <Divider my={8} />
        <Heading as="h2" size="xl" mb={8} color="#fff">
          Lista de Médicos
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          {practitioners &&
            practitioners?.map((practitioner, index) => (
              <PractitionerCard key={index} practitioner={practitioner} />
            ))}
        </SimpleGrid>
        <Divider my={4} />
      </Container>
    </Box>
  );
}
