import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header";
import Home from "../Home";
import Patients from "../Patients";
import Appointments from "../Appointments";
import Practitioners from "../Practitioners";

export default function Health() {
  return (
    <Box
      w="100%"
      h="100%"
      bgGradient="linear-gradient(to bottom, #004460, #0083C5)"
      color="white"
      alignItems="center"
      justifyContent="center"
      display="flex"
      flexDir="column"
      textAlign="center"
      fontSize="xl"
      p={4}
    >
      <Header />
      <Home />
      <Patients />
      <Appointments />
      <Practitioners />
    </Box>
  );
}
