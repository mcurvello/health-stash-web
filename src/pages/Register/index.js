import { Box, Image, Text, HStack, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { getAuthToken, postPatient } from "../../services/api/api";
import { converterDataParaFormatoISO } from "../../utils/date";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const addPatient = async (
    firstName,
    lastName,
    gender,
    birthdate,
    address,
    phone,
    mail
  ) => {
    const accessToken = await getAuthToken();
    const patientData = JSON.stringify({
      resourceType: "Patient",
      active: true,
      name: [
        {
          use: "official",
          family: lastName,
          given: [firstName],
        },
      ],
      telecom: [
        {
          system: "phone",
          value: phone,
          use: "mobile",
          rank: 1,
        },
        {
          system: "email",
          value: mail,
        },
      ],
      gender: gender.toLowerCase() === "masculino" ? "male" : "female",
      birthDate: converterDataParaFormatoISO(birthdate),
      address: [
        {
          use: "home",
          type: "both",
          text: address,
        },
      ],
    });
    await postPatient(accessToken, patientData);
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
        w={["100%", "80%", "40%", "30%", "50%"]}
        h="100vh"
        color="white"
        display="flex"
        flexDir="column"
        justifyContent="center"
        fontSize="xl"
        p={4}
      >
        <HStack
          position="absolute"
          top={8}
          left={8}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={Logo}
            w={["70px", "90px", "100px", "100px"]}
            marginRight={4}
            alt="Health Stash logo com medicamentos e uma imagem de coração atrás"
          />
          <Text fontSize={["3xl", "4xl", "5xl", "5xl"]}>Health Stash</Text>
        </HStack>
        <Heading marginBottom={4}>Cadastro de pacientes</Heading>
        <Box>
          <InputField
            placeholder="Nome"
            value={firstName}
            onChange={(text) => setFirstName(text)}
          />
          <InputField
            placeholder="Sobrenome"
            value={lastName}
            onChange={(text) => setLastName(text)}
          />
          <InputField
            placeholder="Data de nascimento"
            value={birthdate}
            onChange={(text) => setBirthdate(text)}
          />
          <InputField
            placeholder="Gênero"
            value={gender}
            onChange={(text) => setGender(text)}
          />

          <InputField
            placeholder="Endereço"
            value={address}
            onChange={(text) => setAddress(text)}
          />
          <InputField
            placeholder="Telefone"
            value={phone}
            onChange={(text) => setPhone(text)}
          />
          <InputField
            placeholder="E-mail"
            value={email}
            onChange={(text) => setEmail(text)}
          />
          {/* <InputField
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
          </InputField> */}

          <CustomButton
            onClick={async () => {
              addPatient(
                firstName,
                lastName,
                gender,
                birthdate,
                address,
                phone,
                email
              );
              navigate("/");
            }}
          >
            Cadastrar
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
}
