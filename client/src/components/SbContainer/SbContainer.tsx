import { Container } from "@chakra-ui/react";
import React, { FC, PropsWithChildren } from "react";

type SbContainerType = {};

const SbContainer: FC<PropsWithChildren<SbContainerType>> = (props) => {
  return (
    <Container
      boxShadow="md"
      p="6"
      rounded="md"
      mx={0}
      bg="white"
      border="1px"
      borderColor="gray.200"
      height={400}
      width="100%"
      maxWidth="unset"
    >
      {props.children}
    </Container>
  );
};

export default SbContainer;
