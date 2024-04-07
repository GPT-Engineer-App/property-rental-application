import React from "react";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, IconButton, useDisclosure, VStack } from "@chakra-ui/react";
import { FaUser, FaBuilding, FaCog, FaHome, FaBars } from "react-icons/fa";

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex align="center" justify="space-between" py={4} px={8} display={{ base: "flex", md: "none" }}>
        <IconButton icon={<FaBars />} variant="ghost" onClick={onOpen} aria-label="Open Navigation" />
      </Flex>

      <Box display={{ base: "none", md: "block" }} width="200px">
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
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
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
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Navigation;
