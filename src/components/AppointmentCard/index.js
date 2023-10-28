import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { formatarDataHoraParaBR } from "../../utils/date";
import { useEffect, useState } from "react";
import { getAuthToken, getPractitionerById } from "../../services/api/api";

export default function AppointmentCard({ appointment }) {
  const [practitioner, setPractitioner] = useState();

  useEffect(() => {
    const getPractitioner = async (appointment) => {
      const accessToken = await getAuthToken();

      const practitionerId = appointment.participant
        .find((participant) =>
          participant.actor.reference.startsWith("Practitioner/")
        )
        ?.actor.reference.split("/")[1];

      if (accessToken) {
        const result = await getPractitionerById(
          accessToken.data,
          practitionerId
        );
        setPractitioner(result.entry);
      }
    };
    getPractitioner(appointment);
  }, [appointment]);

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" bgColor="#F2F2F2">
      <VStack spacing={4}>
        <Heading as="h2" size={["sm", "md", "md", "lg"]} color="#0083C5">
          {formatarDataHoraParaBR(appointment?.meta.lastUpdated)}
        </Heading>
        <Text fontSize="md" color="#000">
          Médico: {practitioner?.name[0].given[0]}{" "}
          {practitioner?.name[0].family}
        </Text>
        <Text fontSize="md" color="#000">
          Especialidade: {practitioner?.qualification[0].code.text}
        </Text>
        <Text fontSize="md" color="#000">
          Telefone: {practitioner?.telecom[0].value}
        </Text>
      </VStack>
    </Box>
  );
}
