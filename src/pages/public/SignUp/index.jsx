import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/img/logo-no-background.svg";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../../config/firebase";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [specialty, setSpecialty] = useState("");
  const [cref, setCref] = useState("");
  const [isProfessional, setIsProfessional] = useState(false);
  const navigate = useNavigate();

  const options = ["Masculino", "Feminino", "Outros"];

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        email,
        password,
      );

      const userDocRef = doc(firestore, "users", userCredential.user.uid);
      const userRelationsRef = doc(
        firestore,
        "userConsults",
        userCredential.user.uid,
      );
      
      const userData = {
        uid: userCredential.user.uid,
        name,
        email,
        gender,
        // birthdate: new Date(birthdate),
        isProfessional,
        cref,
        specialty
      };
      
      await setDoc(userDocRef, userData);
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      await setDoc(userRelationsRef, {});
      navigate("/");
    } catch (error) {
      return;
    }
  }

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={10}
      p={8}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      bg={useColorModeValue("white", "blue.200")}
    >
      <Box display="flex" justifyContent="center">
        <Image
          borderRadius="full"
          boxSize="175px"
          src={logo}
          alt="Dan Abramov"
        />
      </Box>
      <Box>
        <form onSubmit={handleSubmit}>
          {error && (
            <Text color="red.500" mb={4} textAlign="center">
              {error}
            </Text>
          )}
          <FormControl id="name" mb={4}>
            <FormLabel>Nome Completo</FormLabel>
            <Input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl id="confirmPassword" mb={4}>
            <FormLabel>Confirme sua senha</FormLabel>
            <Input
              type="password"
              placeholder="Sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>

          {/* <FormControl id="gender" mb={4}>
            <FormLabel>Gênero</FormLabel>
            <Select
              placeholder="Selecione"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormControl> */}
          <FormControl mb={4}>
            <Checkbox
              id="isProfessional"
              isChecked={isProfessional}
              onChange={() => setIsProfessional(!isProfessional)}
              marginRight={5}
            >
              Profissional
            </Checkbox>
            <Checkbox>Paciente</Checkbox>
          </FormControl>

          {isProfessional && (
            <>
              <FormControl id="cref" mb={4}>
                <FormLabel>CREF</FormLabel>
                <Input
                  type="number"
                  placeholder="CREF"
                  value={cref}
                  onChange={(e) => setCref(e.target.value)}
                />
              </FormControl>
              <FormControl id="specialty" mb={4}>
                <FormLabel>Especialidade</FormLabel>
                <Select
                  placeholder="Sua especialidade"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                >
                  {/* Opções de especialidade aqui */}
                  <option value="Fisioterapia">Fisioterapia</option>
                  <option value="Condicionamento Físico">
                    Condicionamento Físico
                  </option>
                  <option value="Nutrição Esportiva">Nutrição Esportiva</option>
                  <option value="Treinamento de Força e Resistência">
                    Treinamento de Força e Resistência
                  </option>
                  <option value="Treinamento Funcional">
                    Treinamento Funcional
                  </option>
                  <option value="Educação Física Escolar">
                    Educação Física Escolar
                  </option>
                  <option value="Recreação e Lazer">Recreação e Lazer</option>
                  <option value="Treinamento Esportivo">
                    Treinamento Esportivo
                  </option>
                  <option value="Gestão Esportiva">Gestão Esportiva</option>
                  <option value="Psicologia do Esporte">
                    Psicologia do Esporte
                  </option>
                  <option value="Educação Física Adaptada">
                    Educação Física Adaptada
                  </option>
                </Select>
              </FormControl>
            </>
          )}
          <Stack direction="row" spacing={4} mt={8} justify="center">
            <Button
              type="submit"
              bg={"blue.200"}
              color={"white"}
              isLoading={loading}
              loadingText="Cadastrando..."
              onClick={handleSubmit}
            >
              Cadastrar
            </Button>
            <Link to="/auth/log-in">
              <Button colorScheme="blue" variant="outline">
                Login
              </Button>
            </Link>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default SignUp;
