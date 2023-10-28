// src/components/Appointments.js
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Appointments = ({ appointments }) => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Próximas consultas
      </Heading>
      {appointments.map((appointment) => (
        <Box key={appointment.id} p={3} borderWidth="1px" my={3}>
          <Text fontSize="lg">
            {appointment.patientName} - {appointment.date}
          </Text>
          <Text>Descrição: {appointment.description}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Appointments;
