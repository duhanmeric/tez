import { useEffect, useState } from "react";
import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { SbButton, SbContainer, SbFileItem, SbFileUpload } from "components";
import { useUploadFile } from "hooks";
import EmptyBox from "@/assets/empty-box.png";
import api from "api";
import { Axios, AxiosError } from "axios";

const Upload = () => {
  const {
    files,
    inputRef,
    fileResponse,
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

        const res = await api().post("/", data, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        });

        setApiResponse(res.data);

        const link = document.createElement("a");
        link.href = `http://127.0.0.1:5000/download/${res.data}`;
        link.click();
      } catch (error) {
        const err = error as AxiosError;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const deleteRequestedFile = async () => {
    try {
      const res = await api().delete(`/delete-zip/${apiResponse}`, {
        data: { zipId: apiResponse },
      });
      console.log(res.data);
    } catch (error) {
      const err = error as AxiosError;
    }
  };

  useEffect(() => {
    if (apiResponse) {
      deleteRequestedFile();
    }
  }, [apiResponse]);
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
};

export default Upload;
