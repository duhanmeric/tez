import { useState } from "react";
import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { SbButton, SbContainer, SbFileItem, SbFileUpload } from "components";
import { useUploadFile } from "hooks";
import api from "api";
import { AxiosError } from "axios";

const Upload = () => {
  const {
    files,
    inputRef,
    data,
    openFilePicker,
    onFileChange,
    removeFile,
    checkIfFileExist,
    resetFile,
  } = useUploadFile();

  const [apiResponse, setApiResponse] = useState<any>("");
  const [error, setError] = useState<AxiosError["message"]>("");
  const [loading, setLoading] = useState(false);

  const makeRequest = async () => {
    checkIfFileExist();
    if (files.length > 0) {
      try {
        setLoading(true);

        const res = await api().post("/upload-file", data, {
          headers: {
            enctype: "multipart/form-data",
          },
        });

        console.log(res);
      } catch (error) {
        const err = error as AxiosError;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Center minHeight="100vh">
      <Flex direction="column" w={[300, 400, 600]}>
        <Text fontSize="4xl" fontWeight="semibold" textAlign="center">
          Select your files
        </Text>
        <SbContainer my={5}>
          <VStack height="100%" px={5} justify="space-between">
            <Box width="100%" height="100%" mt={1} flex={1} overflowY="auto">
              {files.length > 0 ? (
                files.map((file) => (
                  <Box key={file.name}>
                    <SbFileItem onRemove={removeFile} filename={file.name} />
                  </Box>
                ))
              ) : (
                <Center height="100%">
                  <VStack>
                    <Text>Your file basket is empty 🏀</Text>
                  </VStack>
                </Center>
              )}
            </Box>
            <SbFileUpload
              inputRef={inputRef}
              label="Browse"
              onChange={onFileChange}
              onClick={openFilePicker}
            />
          </VStack>
        </SbContainer>
        <HStack justify="space-between">
          <SbButton title="Reset" variant="outline" onClick={resetFile} />
          <SbButton title="Upload" variant="solid" onClick={makeRequest} />
        </HStack>
      </Flex>
    </Center>
  );
};

export default Upload;
