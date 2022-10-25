import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { SbButton, SbContainer, SbFileUpload } from "components";
import React from "react";

function UploadScreen() {
  return (
    <Center minHeight="100vh">
      <Flex direction="column" w={[300, 400, 600]}>
        <Text fontSize="4xl" fontWeight="semibold" textAlign="center">
          Select your files
        </Text>
        <SbContainer my={5}>
          <VStack height="100%" px={5} justify="space-between">
            <Box width="100%" height="100%" mt={1} flex={1} overflowY="auto">
              <Center height="100%">
                <VStack>
                  <Text>Your file basket is empty</Text>
                </VStack>
              </Center>
            </Box>
            <SbFileUpload label="browse" />
          </VStack>
        </SbContainer>
        <HStack justify="space-between">
          <SbButton title="Reset" variant="outline" />
          <SbButton title="Upload" variant="solid" />
        </HStack>
      </Flex>
    </Center>
  );
}

export default UploadScreen;
