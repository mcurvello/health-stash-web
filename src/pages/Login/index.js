import {
  Box,
  Image,
  InputRightElement,
  Link as ChackraLink,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.png";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext";
import { LockIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const { onLogin, getUserData, isAuthenticated, userData, setUserType } =
    useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleLogin = (email, password, profile) => {
    onLogin(email, password, profile);
    getUserData(email, profile);
    isAuthenticated && navigate("/health");
    console.log(userData);
  };

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
      <Box
        w={["100%", "80%", "40%", "30%", "30%"]}
        h="100vh"
        color="white"
        display="flex"
        flexDir="column"
        justifyContent="center"
        fontSize="xl"
        p={4}
      >
        <Box display="flex" flexDir="column" alignItems="center">
          <Image
            src={Logo}
            w={["100px", "120px", "130px", "130px"]}
            marginBottom={4}
            alt="Health Stash logo com medicamentos e uma imagem de coração atrás"
          />
          <Text fontSize={["3xl", "4xl", "5xl", "5xl"]} marginBottom={8}>
            Health Stash
          </Text>
        </Box>

        <Box>
          <InputField
            placeholder="E-mail"
            value={email}
            onChange={(text) => setEmail(text)}
          />
          <InputField
            placeholder="Senha"
            value={password}
            onChange={(text) => setPassword(text)}
            secureTextEntry={secureTextEntry}
          >
            <InputRightElement
              h="100%"
              onClick={() => setSecureTextEntry(!secureTextEntry)}
            >
              <LockIcon color="#fff" />
            </InputRightElement>
          </InputField>
          <Select
            placeholder="Selecione o tipo de usuário"
            marginTop={1}
            marginBottom={8}
            borderColor="#fff"
            borderWidth={2}
            borderRadius={20}
            color="#fff"
            bg="transparent"
            _focus={{ borderColor: "#0083C5" }}
            _placeholder={{ color: "#fff" }}
            _hover={{ borderColor: "#0083C5" }}
            onChange={setProfile}
          >
            <option value="patient">Paciente</option>
            <option value="practitioner">Médico</option>
          </Select>
          <CustomButton onClick={() => handleLogin(email, password, profile)}>
            Entrar
          </CustomButton>

          <Text marginTop={8} fontSize={["sm", "md"]}>
            Não tem uma conta?{" "}
            <ChackraLink as={ReactRouterLink} fontWeight="bold" to="/register">
              Cadastre-se
            </ChackraLink>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
