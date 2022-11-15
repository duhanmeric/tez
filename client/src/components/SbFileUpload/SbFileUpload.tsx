import React, { FC } from "react";
import { Box, Input } from "@chakra-ui/react";
import SbButton from "components/SbButton/SbButton";

type SbFileInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
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
      borderStyle="solid"
      py={7}
    >
      <SbButton variant="link" title={props.label} onClick={props.onClick} />
      <Input
        multiple
        accept="video/*"
        ref={props.inputRef}
        style={{ display: "none" }}
        type="file"
        id="file-upload"
        onChange={props.onChange}
      />
    </Box>
  );
};

export default SbFileUpload;
