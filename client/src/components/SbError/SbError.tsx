import { Text } from "@chakra-ui/react";

type SbErrorProps = {
  message: string;
};

const SbError = (props: SbErrorProps) => {
  return (
    <Text
      my={2}
      textAlign="center"
      fontSize="md"
      fontWeight="semibold"
      color="red.500"
    >
      {props.message}
    </Text>
  );
};

export default SbError;
