import React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import { SbButton } from "components";

function App() {
  return (
    <ChakraProvider>
      <Box>hello tez</Box>
      <Text>deneme2</Text>
      <SbButton />
    </ChakraProvider>
  );
}

export default App;
