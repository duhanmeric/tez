import { Box, Text } from "@chakra-ui/react";
import SbButton from "components/SbButton/SbButton";
import React, { FC } from "react";

type SbFileInputProps = {
  //   inputRef: React.RefObject<HTMLInputElement>;
  label: string;
};

const SbFileUpload: FC<SbFileInputProps> = (props) => {
  return (
    <Box
      textAlign="center"
      border={2}
      borderColor="gray.300"
      width="100%"
      rounded="md"
      borderStyle="dashed"
      py={7}
    >
      <Text lineHeight={2} color="gray.500">
        Drag your files here or
      </Text>
      <SbButton variant="link" title={props.label} />
      <input
        multiple
        accept="video/*"
        // ref={props.inputRef}
        style={{ display: "none" }}
        type="file"
        id="file-upload"
      />
    </Box>
  );
};

export default SbFileUpload;
