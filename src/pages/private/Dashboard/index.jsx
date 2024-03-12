import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Flex,
  Heading,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, ChatIcon, EmailIcon } from "@chakra-ui/icons";
import { useAuth } from '../../../contexts/AuthContext';
import profileimg from '../../../assets/img/profileimage.png';
import { firestore } from '../../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const {currentUser} = useAuth();
  console.log(currentUser);

  const navigate = useNavigate()
  const [patients, setPatients] = useState([]);

  const redirecionarPerimetria = (patient) => {
    navigate(`/loged-in/sheets/${patient.uid}`)
  }
  const redirecionarTreino = (patient) => {
    navigate(`/loged-in/ficha/${patient.uid}`)
  }

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        // const patientsRef = collection(firestore, 'users');
        const patientsCollection = await getDocs(collection(firestore, 'users'))
        const patientsData = patientsCollection.docs.map((doc) => doc.data());
        setPatients(patientsData);
        console.log(patientsData);
      } catch (error) {
        console.error("Erro ao buscar pacientes", error)
      }
    }
    fetchPatients();
  }, [])

  return (
    <Container maxW="100%" p="4" bg={'white'} borderRadius={'10px'}>
      {/* Seção de Perfil */}
      <Box bg="blue.200" color="white" p="8" mb="8" borderRadius={'10px'}>
        <Flex align="center">
          <Image src={profileimg} alt="Imagem de Perfil" boxSize="100px" borderRadius="full" mr="4" />
          <Box>
            <Heading as="h2" fontSize="xl">{currentUser?.name}</Heading>
            <p>Nome: {currentUser?.displayName}</p>
            <p>Email: {currentUser?.email}</p>
            <p>Especialidade: Personal Trainer</p>
            <p>Na plataforma desde {currentUser?.metadata.creationTime}</p>
          </Box>
        </Flex>
      </Box>

      {/* Tabela de CRUD */}
      <Box>
        <Heading as="h2" fontSize="2xl" mb="4" color={'blue.200'}>Lista de Pacientes</Heading>
        <Table variant="striped">

          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>

            {patients.map((patient) => (
              <Tr key={patient.uid}>
                <Td>{patient.name}</Td>
                <Td>{patient.email}</Td>
                <Td>
                  <Flex>
                    <IconButton onClick={() => redirecionarPerimetria(patient)} bg={'blue.200'} aria-label="Solicitação" icon={<AddIcon />} mr="2" />
                    <IconButton onClick={() => navigate('/loged-in/chat')} bg={'blue.200'} aria-label="Chat" icon={<ChatIcon />} mr="2" />
                    <IconButton onClick={() => redirecionarTreino(patient)} bg={'blue.200'} aria-label="Enviar Ficha" icon={<EmailIcon />} />
                  </Flex>
                </Td>
              </Tr>
            ))

            }
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
};

export default Dashboard;
