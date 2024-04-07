import React from "react";
import { Button, VStack } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Button colorScheme="blue">Profile</Button>
      <Button colorScheme="blue">Properties</Button>
      <Button colorScheme="blue">Settings</Button>
    </VStack>
  );
};

export default Navigation;
