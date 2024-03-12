"use client";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={"100%"} bg={"white"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Transformando saúde  <br />
            <Text as={"span"} color={"blue.400"}>
            em união
            </Text>
          </Heading>
          <Text color={"gray.500"}>
          Conectamos você aos melhores profissionais de educação física, tornando o seu bem-estar uma prioridade. Comece hoje a sua jornada para uma vida mais saudável e ativa
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"blue.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "blue.500",
              }}
            >
              Acessar Minha Conta
            </Button>
            <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
              Saiba Mais
            </Button>
            
          </Stack>
        </Stack>
      </Container>

      <Container maxW="100%" bg={"blue.400"}>
      {/* Restante do conteúdo existente */}

      {/* Seção 8: Benefícios do Nosso App */}
      <Box bg="blue.500" color="white" p="8">
        <Heading as="h2" fontSize="2xl" mb="8">
          Benefícios do Nosso App
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
          {/* Card: Benefício 1 */}
          <Box bg="white" p="6" borderRadius="lg" >
            <Heading as="h3" fontSize="xl" mb="4" color={'#4a4a4a'}>
              Encontre Profissionais Qualificados
            </Heading>
            <Text color={'gray'}>
              Nosso app conecta você a educadores físicos qualificados e certificados, prontos para ajudar.
            </Text>
          </Box>

          {/* Card: Benefício 2 */}
          <Box bg="white" p="6" borderRadius="lg" >
            <Heading as="h3" fontSize="xl" mb="4" color={'#4a4a4a'}>
              Alcance Seus Objetivos de Fitness
            </Heading>
            <Text color={'gray'}>
              Trabalhe com um profissional que vai personalizar seu treinamento para atingir suas metas.
            </Text>
          </Box>

          {/* Card: Benefício 3 */}
          <Box bg="white" p="6" borderRadius="lg" >
            <Heading as="h3" fontSize="xl" mb="4" color={'#4a4a4a'}>
              Conveniência e Flexibilidade
            </Heading>
            <Text color={'gray'}>
              Agende sessões de treinamento de acordo com sua agenda e preferência.
            </Text>
          </Box>
        </SimpleGrid>

        {/* Botões */}
        <Flex justify="center" mt="8">
          <Button colorScheme="white" variant="outline" size="lg" mr="4">
            Quero Ser um Profissional
          </Button>
          <Button colorScheme="white" size="lg">
            Baixe Agora
          </Button>
        </Flex>
      </Box>
    </Container>


      
    </>
  );
}
