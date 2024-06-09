import { 
    Box, IconButton, Avatar, Flex, Text, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton 
  } from '@chakra-ui/react';
  import { HamburgerIcon } from '@chakra-ui/icons';
  import React from 'react';
import LeftNav from './LeftNav';
  
  const TopNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box bg="teal.500" p={4} color="white">
        <Flex alignItems="center" justifyContent="space-between">
          {/* Hamburger Icon for Drawer */}
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            bg={'teal.500'}

          />
         
          <Text fontSize="xl" fontWeight="bold">
            LMS
          </Text>
  
          {/* Avatar */}
          <Avatar src="https://bit.ly/sage-adebayo" />
        </Flex>
  
        {/* Drawer Component */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              <LeftNav/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    );
  };
  
  export default TopNav;
  