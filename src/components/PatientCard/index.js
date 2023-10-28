import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";
import { formatarDataParaBR } from "../../utils/date";

export default function PatientCard({ patient }) {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" bgColor="#fff">
      <Heading as="h2" size="md" color="#0083C5">
        {patient.resource.name[0]?.given[0]}{" "}
        {patient.resource.name[0]?.given[1]} {patient.resource.name[0]?.family}
      </Heading>
      <Box mt={3} textAlign="left" color="#000">
        <HStack>
          <Text fontSize="md" fontWeight="bold">
            Data de Nascimento:
          </Text>
          <Text fontSize="md">
            {formatarDataParaBR(patient.resource.birthDate)}
          </Text>
        </HStack>
        <HStack>
          <Text fontSize="md" fontWeight="bold">
            Gênero:
          </Text>
          <Text fontSize="md">
            {patient.resource.gender === "male" ? "Masculino" : "Feminino"}
          </Text>
        </HStack>
        <HStack>
          <Text fontSize="md" fontWeight="bold">
            Telefone:
          </Text>
          <Text fontSize="md">{patient.resource.telecom[0].value}</Text>
        </HStack>
      </Box>
      <Button
        bgColor="#0083C5"
        color="#fff"
        mt={4}
        _hover={{ bgColor: "#0070a0" }}
        _active={{ bgColor: "#00597f" }}
      >
        Agendar Consulta
      </Button>
    </Box>
  );
}
