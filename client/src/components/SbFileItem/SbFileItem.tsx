import {
  Box,
  CloseButton,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";

import VideoFileImage from "../../assets/video-file.png";

type SbFileItemProps = {
  filename: string;
  extension?: string;
  onRemove: (filename: string) => void;
};

const SbFileItem: FC<SbFileItemProps> = (props) => {
  return (
    <Box mb={5}>
      <HStack justify="center">
        <Box mr={3}>
          <Image boxSize="55px" src={VideoFileImage} alt="bix"></Image>
        </Box>
        <VStack flex={1}>
          <HStack justify="space-between" width="100%">
            <Text>
              {props.filename} {props.extension}
            </Text>
            <CloseButton onClick={() => props.onRemove(props.filename)} />
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default SbFileItem;
