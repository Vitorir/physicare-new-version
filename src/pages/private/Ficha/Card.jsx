// Importando os módulos necessários do React e Chakra UI
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

// Definindo o componente Card
const Ficha = ({ aluno }) => {
  return (
    // Usando o componente Box do Chakra UI para criar a ficha
    <Box
      maxW="md" // Largura máxima da ficha
      borderWidth="1px" // Largura da borda
      borderRadius="lg" // Raio da borda
      overflow="hidden" // Lidar com overflow de conteúdo
      color={'white'}
    >
      {/* Cabeçalho da ficha */}
      <Box p="6">
        <Heading fontSize="xl">{aluno.nome}</Heading>
        <Text fontSize="md" color="white">
          Idade: {aluno.idade}
        </Text>
      </Box>

      {/* Corpo da ficha com informações específicas do aluno */}
      <Box p="6">
        <Text fontSize="md">
          <b>Objetivos:</b> {aluno.objetivos.join(', ')}
        </Text>
        <Text fontSize="md">
          <b>Frequência Fichaíaca de Repouso:</b> {aluno.frequenciaCardiaca} bpm
        </Text>
        {/* Adicione mais informações conforme necessário */}
      </Box>
    </Box>
  );
};

// Exportando o componente Ficha
export default Ficha;
