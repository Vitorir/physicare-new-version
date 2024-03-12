import { Container } from "@chakra-ui/react";
import { SearchBar } from "../../../components/SearchBar";
import SearcherBar from "../../../components/SearchBar/SearchBar";

function Search() {
  return (
    <>
      <Container bg={'white'} maxW={'100%'}>
        <SearchBar></SearchBar>
        <SearcherBar></SearcherBar>
        
      </Container>
    </>
  );
}

export default Search;
