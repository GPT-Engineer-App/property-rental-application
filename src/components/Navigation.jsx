import React from "react";
import { Button, Icon, VStack } from "@chakra-ui/react";
import { FaUser, FaBuilding, FaCog, FaHome } from "react-icons/fa";

const Navigation = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Button colorScheme="blue" variant="ghost" justifyContent="flex-start">
        <Icon as={FaHome} marginRight={3} />
        Logo
      </Button>
      <Button colorScheme="blue" variant="ghost" justifyContent="flex-start" paddingLeft={8}>
        <Icon as={FaUser} marginRight={3} />
        Profile
      </Button>
      <Button colorScheme="blue" variant="ghost" justifyContent="flex-start" paddingLeft={8}>
        <Icon as={FaBuilding} marginRight={3} />
        Properties
      </Button>
      <Button colorScheme="blue" variant="ghost" justifyContent="flex-start" paddingLeft={8}>
        <Icon as={FaCog} marginRight={3} />
        Settings
      </Button>
    </VStack>
  );
};

export default Navigation;
