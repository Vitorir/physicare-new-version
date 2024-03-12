import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

function Profile() {
  const { patientUid } = useParams();
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <Box bg="blue.200" color="white" p="8" mb="8" borderRadius={"10px"}>
      <Flex align="center">
        {/* <Image src={profileimg} alt="Imagem de Perfil" boxSize="100px" borderRadius="full" mr="4" /> */}
        <Box>
          <Heading as="h2" fontSize="xl">
            {currentUser?.name}
          </Heading>
          <p>Nome: {currentUser?.displayName}</p>
          <p>Email: {currentUser?.email}</p>
          <p>Especialidade: Personal Trainer</p>
          <p>Na plataforma desde {currentUser?.metadata.creationTime}</p>
        </Box>
      </Flex>
    </Box>
  );
}

export default Profile;
