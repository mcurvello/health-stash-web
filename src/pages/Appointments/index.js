import { Box, Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAppointments, getAuthToken } from "../../services/api/api";
import AppointmentCard from "../../components/AppointmentCard";
import Header from "../../components/Header";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getAllAppointments = async () => {
      const accessToken = await getAuthToken();

      if (accessToken) {
        const result = await getAppointments(accessToken.data);
        setAppointments(result.entry);
      }
    };
    getAllAppointments();
  }, []);

  return (
    <Box
      marginTop={{ base: 16, md: 20, xl: 20 }}
      width="100vw"
      height="auto"
      bgGradient="linear-gradient(to bottom, #004460, #0083C5)"
    >
      <Header />
      <Container maxW="container.lg">
        <Divider my={8} />
        <Heading as="h2" size="xl" my={16} color="#fff" textAlign="center">
          Consultas
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} pb={8}>
          {appointments &&
            appointments?.map((appointment, index) => (
              <AppointmentCard key={index} appointment={appointment.resource} />
            ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
