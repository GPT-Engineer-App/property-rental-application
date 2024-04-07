import React from "react";
import { Button, Icon, VStack } from "@chakra-ui/react";
import { FaUser, FaBuilding, FaCog } from "react-icons/fa";

const Navigation = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Button colorScheme="blue" variant="ghost" justifyContent="flex-start">
        <Icon as={FaUser} marginRight={3} />
        Profile
      </Button>
      <Button colorScheme="blue" variant="ghost" justifyContent="flex-start">
        <Icon as={FaBuilding} marginRight={3} />
        Properties
      </Button>
      <Button colorScheme="blue" variant="ghost" justifyContent="flex-start">
        <Icon as={FaCog} marginRight={3} />
        Settings
      </Button>
    </VStack>
  );
};

export default Navigation;
