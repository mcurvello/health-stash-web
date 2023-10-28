import { Avatar, Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/logo.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      position="fixed"
      top={0}
      width="100%"
      flexDirection="row"
      paddingY={3}
      paddingX={[2, 6, 8, 8]}
      justifyContent="space-between"
      bgColor="#fff"
      zIndex={9}
    >
      <Box display="flex" width="100%" flexDirection="row" alignItems="center">
        <Image
          src={Logo}
          w={["30px", "30px", "40px", "40px"]}
          alt="Health Stash logo com medicamentos e uma imagem de coração atrás"
        />
        <Text
          color="#0083C5"
          fontWeight="bold"
          fontSize={["md", "xl", "2xl", "2xl"]}
        >
          Health Stash
        </Text>
      </Box>
      <Box
        display={{ base: "flex", md: "flex", xl: "none" }}
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-end"
      >
        <HamburgerIcon color="#0083C5" />
      </Box>
      <Box
        display={{ base: "none", md: "none", xl: "flex" }}
        width="100%"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Link
          marginRight={4}
          fontSize="md"
          color="#0083C5"
          to="sobre"
          smooth={true}
          duration={500}
        >
          <Button
            bgColor="transparent"
            color="#0083C5"
            onClick={() => navigate("/")}
          >
            Página Inicial
          </Button>
        </Link>

        <Link
          marginRight={4}
          fontSize="md"
          color="#0083C5"
          to="sobre"
          smooth={true}
          duration={500}
        >
          <Button
            bgColor="transparent"
            color="#0083C5"
            onClick={() => navigate("/pacientes")}
          >
            Pacientes
          </Button>
        </Link>
        <Link
          marginRight={4}
          fontSize="md"
          color="#0083C5"
          to="/medicos"
          smooth={true}
          duration={500}
        >
          <Button
            bgColor="transparent"
            color="#0083C5"
            onClick={() => navigate("/medicos")}
          >
            Médicos
          </Button>
        </Link>
        <Link
          marginRight={4}
          fontSize="md"
          color="#0083C5"
          to="sobre"
          smooth={true}
          duration={500}
        >
          <Button
            bgColor="transparent"
            color="#0083C5"
            onClick={() => navigate("/consultas")}
          >
            Consultas
          </Button>
        </Link>

        <Avatar size="sm" bgColor="#0083C5" color="#fff" />
      </Box>
    </Box>
  );
}
