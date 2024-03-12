
import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Box,
  Icon,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { firestore } from "../../config/firebase"; // Certifique-se de importar db corretamente
import { collection, getDocs, query, where } from "firebase/firestore";

export const SearchBar = ({
  isLoading,
  input,
  // resultRenderer,
  // onResultSelect,
  resultListMaxHeight = "60vh",
  placeholder = "",
  searchResults = [],
  noResultFoundText = "No results found.",
}) => {
  const { iconPosition = "left" } = input || {};

  const [showResults, setShowResults] = useState(false);
  const [value, setValue] = useState('');

  const onResultSelect = () => {
    
  }

  

  const onBlur = () => {
    setTimeout(() => {
      setShowResults(false);
    }, 170);
  };

  const onSearchChange = async (event) => {
    const searchTerm = event.target.value;

    // Realiza a consulta no Firestore
    if (searchTerm.trim() !== "") {
      const q = query(
        collection(firestore, "users"),
        where("nome", ">=", searchTerm),
        where("nome", "<=", searchTerm + "\uf8ff")
      );

      console.log(q);
      const querySnapshot = await getDocs(q);

      console.log(`querySnapshot: ${querySnapshot}`);

      const results = [];
      querySnapshot.forEach((doc) => {
        results.push(doc.data());
        console.log(doc.data());
      });

      // Atualiza os resultados da pesquisa
      setShowResults(results);
    } else {
      // Limpa os resultados quando a barra de pesquisa está vazia
      setShowResults([]);
    }

    // Atualiza o valor da barra de pesquisa
    // Certifique-se de declarar o estado `value` usando const [value, setValue] = useState(''); no início do seu componente
    setValue(searchTerm);
  };

  return (
    <Box position="relative" w="100%">
      <InputGroup mb="10px">
        {iconPosition === "left" && (
          <InputLeftElement
            pointerEvents="none"
            children={
              isLoading ? <Spinner size="sm" /> : <Icon as={FaSearch} />
            }
          />
        )}

        <Input
          borderColor="rgba(34,36,38,.15)"
          borderRadius="full"
          placeholder={placeholder}
          value={value}
          onChange={onSearchChange}
          onFocus={() => setShowResults(true)}
          onBlur={onBlur}
        />

        {iconPosition === "right" && (
          <InputGroup.Append>
            <InputGroup.Text>
              {isLoading ? <Spinner size="sm" /> : <Icon as={FaSearch} />}
            </InputGroup.Text>
          </InputGroup.Append>
        )}
      </InputGroup>
      {showResults && (
        <Box
          // END: be15d9bcejpp
          bgColor="white"
          maxHeight={resultListMaxHeight}
          overflowY="auto"
          borderRadius="0.3em"
          boxShadow="0 2px 4px 0 rgb(34 36 38 / 12%), 0 2px 10px 0 rgb(34 36 38 / 15%);"
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {showResults.length > 0 ? (
            showResults.map((result, index) => (
              <Box
                key={result.id || result._id || result.key || index}
                borderBottom="1px solid rgba(34,36,38,.1)"
                cursor="pointer"
                _hover={{
                  bgColor: "#f9fafb",
                }}
                onClick={() => onResultSelect(result)}
              >
                <Flex alignItems="center">
                  <Box p="0.8em" margin="0" color="black">
                    {/* {resultRenderer(result)} */}
                  </Box>
                </Flex>
              </Box>
            ))
          ) : (
            <Box borderBottom="1px solid rgba(34,36,38,.1)">
              <Flex alignItems="center">
                <Box p="0.8em" margin="0" color="black">
                  <Text>{noResultFoundText}</Text>
                </Box>
              </Flex>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
