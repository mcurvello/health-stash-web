// src/components/PatientList.js
import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const PatientList = ({ patients }) => {
  return (
    <Box>
      <Text fontSize="2xl">Lista de Pacientes</Text>
      {patients.map((patient) => (
        <Box key={patient.id} p={3} borderWidth="1px" my={2}>
          <Text>{patient.name}</Text>
          <Button colorScheme="teal">Agendar Consulta</Button>
        </Box>
      ))}
    </Box>
  );
};

export default PatientList;
