import React, { FC } from "react";
import { Button } from "@chakra-ui/react";

type SbButtonProps = {
  onClick: () => void;
  title: string;
  variant: "link" | "outline" | "ghost" | "solid" | "unstyled";
};

const SbButton: FC<SbButtonProps> = (props) => {
  return (
    <Button
      variant={props.variant}
      colorScheme="messenger"
      onClick={props.onClick}
    >
      {props.title}
    </Button>
  );
};

export default SbButton;
