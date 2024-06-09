import {
    Box,
    Flex,
    Avatar,
    Text,
    Button,
    Link,
    HStack,
    Icon,
    Divider
  } from "@chakra-ui/react";
  import { Link as RouterLink } from "react-router-dom";
  import { FaHome, FaGraduationCap, FaTasks, FaChalkboardTeacher, FaPhone } from "react-icons/fa";
  
  import React from "react";
  
  const LeftNav = () => {
    return (
      <Box p={"2"} >
        {/* Profile Card */}
        <Flex
          direction={"column"}
          p={"4"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"2"}
          borderRadius={"md"}
          boxShadow={"lg"}
        >
          <Avatar bg="tomato" size={"xl"} src="https://bit.ly/dan-abramov" />
          <Text as="b">Student Name </Text>
          <Text>Student</Text>
          <Button width={"80%"} colorScheme="teal">
            View Profile
          </Button>
        </Flex>
        
        <Divider mt={"2"} />
  
        {/* Nav Links */}
        <Flex
          direction={"column"}
          p={"4"}
          gap={"6"}
        
         
        >
          <Link as={RouterLink} to="/student/home" _hover={{ textDecoration: "none", color: "teal" }}>
            <HStack spacing={'4'} alignItems={"center"}>
              <Icon as={FaHome} boxSize={6} />
              <Text>Dashboard</Text>
            </HStack>
          </Link>
  
          <Link as={RouterLink} to="/student/home" _hover={{ textDecoration: "none", color: "teal" }}>
            <HStack spacing={'4'} alignItems={"center"}>
              <Icon as={FaGraduationCap} boxSize={6} />
              <Text>All Courses</Text>
            </HStack>
          </Link>

          <Link as={RouterLink} to="/student/courses/enrolled" _hover={{ textDecoration: "none", color: "teal" }}>
            <HStack spacing={'4'} alignItems={"center"}>
              <Icon as={FaChalkboardTeacher} boxSize={6} />
              <Text>Enrolled Courses</Text>
            </HStack>
          </Link>
  
          <Link as={RouterLink} to="/assignments/" _hover={{ textDecoration: "none", color: "teal" }}>
            <HStack spacing={'4'} alignItems={"center"}>
              <Icon as={FaTasks} boxSize={6} />
              <Text>My Assignments</Text>
            </HStack>
          </Link>
  
          
  
          <Link href="#" _hover={{ textDecoration: "none", color: "teal" }}>
            <HStack spacing={'4'} alignItems={"center"}>
              <Icon as={FaPhone} boxSize={6} />
              <Text>Contact Us</Text>
            </HStack>
          </Link>
        </Flex>
      </Box>
    );
  };
  
  export default LeftNav;
  