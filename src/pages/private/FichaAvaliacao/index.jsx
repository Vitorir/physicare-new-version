import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Radio,
  RadioGroup,
  Button,
  VStack,
  Heading,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Card,
} from '@chakra-ui/react';

const FichaDeAvaliacao = () => {
  const [formData, setFormData] = useState({
    nome: '',
    objetivos: '',
    idade: '',
    sexo: 'masculino',
    altura: '',
    peso: '',
    imc: '',
    frequenciaCardiaca: '',
    possuiDoencaCardiaca: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const calcularIMC = () => {
    const alturaMetros = parseFloat(formData.altura) / 100;
    const peso = parseFloat(formData.peso);
    const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    setFormData((prevData) => ({
      ...prevData,
      imc: imc,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione sua lógica para processar o formulário aqui
    console.log('Dados do formulário:', formData);
  };

  return (
    <ChakraProvider>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card width="80%" p={4}>
          <VStack align="start">
            <Heading as="h1" size="lg" mb={4}>
              Ficha de Avaliação
            </Heading>
            <form onSubmit={handleSubmit}>
            <form onSubmit={handleSubmit}>
            <FormControl id="nome" isRequired>
              <FormLabel>Nome:</FormLabel>
              <Input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="objetivos" mt={4} isRequired>
              <FormLabel>Objetivos:</FormLabel>
              <Textarea
                name="objetivos"
                value={formData.objetivos}
                onChange={handleChange}
              />
            </FormControl>

            <Stack direction="row" spacing={4}>
              <FormControl id="idade" isRequired>
                <FormLabel>Idade:</FormLabel>
                <NumberInput
                  name="idade"
                  value={formData.idade}
                  onChange={(value) =>
                    handleChange({
                      target: { name: 'idade', value: value },
                    })
                  }
                >
                  <NumberInputField />
                </NumberInput>
              </FormControl>

              <FormControl id="sexo" isRequired>
                <FormLabel>Sexo:</FormLabel>
                <RadioGroup
                  name="sexo"
                  value={formData.sexo}
                  onChange={handleChange}
                >
                  <Stack direction="row">
                    <Radio value="masculino">Masculino</Radio>
                    <Radio value="feminino">Feminino</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </Stack>

            <Stack direction="row" spacing={4} mt={4}>
              <FormControl id="altura" isRequired>
                <FormLabel>Altura (cm):</FormLabel>
                <NumberInput
                  name="altura"
                  value={formData.altura}
                  onChange={(value) =>
                    handleChange({
                      target: { name: 'altura', value: value },
                    })
                  }
                >
                  <NumberInputField />
                </NumberInput>
              </FormControl>

              <FormControl id="peso" isRequired>
                <FormLabel>Peso (kg):</FormLabel>
                <NumberInput
                  name="peso"
                  value={formData.peso}
                  onChange={(value) =>
                    handleChange({
                      target: { name: 'peso', value: value },
                    })
                  }
                >
                  <NumberInputField />
                </NumberInput>
              </FormControl>
            </Stack>

            <Button
              type="button"
              colorScheme="teal"
              mt={4}
              onClick={calcularIMC}
            >
              Calcular IMC
            </Button>

            <FormControl id="imc" mt={4}>
              <FormLabel>IMC:</FormLabel>
              <Input
                type="text"
                name="imc"
                value={formData.imc}
                readOnly
              />
            </FormControl>

            <FormControl id="frequenciaCardiaca" mt={4} isRequired>
              <FormLabel>Frequência Cardíaca:</FormLabel>
              <Input
                type="text"
                name="frequenciaCardiaca"
                value={formData.frequenciaCardiaca}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="possuiDoencaCardiaca" mt={4}>
              <Checkbox
                name="possuiDoencaCardiaca"
                isChecked={formData.possuiDoencaCardiaca}
                onChange={handleChange}
              >
                Possui doença cardíaca?
              </Checkbox>
            </FormControl>

            <Button type="submit" colorScheme="teal" mt={4}>
              Enviar
            </Button>
          </form>
            </form>
          </VStack>
        </Card>
      </Box>
    </ChakraProvider>
  );
};

export default FichaDeAvaliacao;
