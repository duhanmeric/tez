import React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import { SbButton, SbContainer } from "components";

function App() {
  return (
    <ChakraProvider>
      <SbContainer></SbContainer>
      <SbButton title="Reset" variant="outline" />
    </ChakraProvider>
  );
}

export default App;
