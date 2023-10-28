// src/components/Patient.js
import React from "react";
import { Box, Text, Button, Flex, Divider } from "@chakra-ui/react";

const Patient = ({ patient, onScheduleAppointment }) => {
  const { id, name, age, diagnosis, lastAppointment } = patient;

  return (
    <Box p={3} borderWidth="1px" my={3} borderRadius="md">
      <Text fontSize="xl" fontWeight="bold">
        {name}
      </Text>
      <Text>Idade: {age}</Text>
      <Text>Diagnóstico: {diagnosis}</Text>
      <Text>Última Consulta: {lastAppointment || "Nunca consultado"}</Text>
      <Button
        colorScheme="teal"
        onClick={() => onScheduleAppointment(id)}
        mt={2}
      >
        Agendar Consulta
      </Button>
    </Box>
  );
};

export default Patient;
