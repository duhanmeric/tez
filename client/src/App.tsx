import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { UploadScreen } from "screens";

function App() {
  return (
    <ChakraProvider>
      <UploadScreen />
    </ChakraProvider>
  );
}

export default App;
