import React from "react";
import {
  Box,
  HStack,
  VStack,
  CloseButton,
  Text,
  Image,
} from "@chakra-ui/react";

import VideoFileImage from "../../assets/video-file.png";

type Props = {
  filename: string;
  extension?: string;
  onRemove: (filename: string) => void;
};

const SbFileItem = (props: Props) => {
  return (
    <Box mb={5}>
      <HStack justify="center">
        <Box mr={3}>
          <Image boxSize="55px" src={VideoFileImage} alt="bix" />
        </Box>
        <VStack flex={1}>
          <HStack justify="space-between" width="100%">
            <Text>
              {props.filename}
              {props.extension}
            </Text>
            <CloseButton onClick={() => props.onRemove(props.filename)} />
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default SbFileItem;
