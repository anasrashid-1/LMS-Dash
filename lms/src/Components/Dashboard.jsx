// src/Dashboard.js

import React from 'react';
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Link,
  Stack,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const courses = [
    { id: 1, title: 'Introduction to SQL', description: 'Learn the basics of SQL.' },
    { id: 2, title: 'Advanced SQL Queries', description: 'Master advanced SQL concepts.' },
    { id: 3, title: 'Database Management', description: 'Understand database management principles.' },
  ];

  const NavigationContent = () => (
    <>
      <DrawerHeader>Navigation</DrawerHeader>
      <DrawerBody>
        <List spacing={3}>
          <ListItem><Link href="#">Dashboard</Link></ListItem>
          <ListItem><Link href="#">Courses</Link></ListItem>
          <ListItem><Link href="#">Profile</Link></ListItem>
          <ListItem><Link href="#">Settings</Link></ListItem>
        </List>
      </DrawerBody>
    </>
  );

  return (
    <Flex height="100vh" direction={{ base: 'column', md: 'row' }}>
      {/* Mobile Navigation Button */}
      <Box display={{ base: 'block', md: 'none' }} p={4}>
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="outline"
        />
      </Box>

      {/* Navigation for Medium and Larger Screens */}
      <Box
        as="nav"
        width={{ base: 'full', md: '20%' }}
        p={4}
        bg="blue.600"
        color="white"
        display={{ base: 'none', md: 'block' }}
      >
        <Heading size="md" mb={6}>Navigation</Heading>
        <List spacing={3}>
          <ListItem><Link href="#">Dashboard</Link></ListItem>
          <ListItem><Link href="#">Courses</Link></ListItem>
          <ListItem><Link href="#">Profile</Link></ListItem>
          <ListItem><Link href="#">Settings</Link></ListItem>
        </List>
      </Box>

      {/* Drawer for Mobile Navigation */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <NavigationContent />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* Main Content */}
      <Box flex="1" p={6}>
        <Heading size="lg" mb={6}>Courses</Heading>
        <Stack spacing={4}>
          {courses.map(course => (
            <Box
              key={course.id}
              p={4}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
            >
              <Heading fontSize="xl">{course.title}</Heading>
              <Text mt={2}>{course.description}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

export default Dashboard;
