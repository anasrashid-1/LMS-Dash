import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Link,
  HStack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaHome,
  FaGraduationCap,
  FaTicketAlt ,
  FaChalkboardTeacher,
  FaBook ,
} from "react-icons/fa";

import { BiSupport } from "react-icons/bi";

import React from "react";

const LeftNav = () => {
  return (
    <Box p={"2"}>
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
        <Avatar bg="tomato" size={"xl"} src="https://bit.ly/sage-adebayo" />
        <Text as="b">Teacher Name </Text>
        <Text>Teacher</Text>
        <Button width={"80%"} colorScheme="teal">
          View Profile
        </Button>
      </Flex>

      <Divider mt={"2"} />

      {/* Nav Links */}
      <Flex direction={"column"} p={"4"} gap={"6"}>
        <Link
          as={RouterLink}
          to="/teacher/home"
          _hover={{ textDecoration: "none", color: "teal" }}
        >
          <HStack spacing={"4"} alignItems={"center"}>
            <Icon as={FaHome} boxSize={6} />
            <Text>Dashboard</Text>
          </HStack>
        </Link>

        <Link
          as={RouterLink}
          to="/teacher/home"
          _hover={{ textDecoration: "none", color: "teal" }}
        >
          <HStack spacing={"4"} alignItems={"center"}>
            <Icon as={FaGraduationCap} boxSize={6} />
            <Text>All Courses</Text>
          </HStack>
        </Link>

        <Link
          as={RouterLink}
          to="/teacher/home"
          _hover={{ textDecoration: "none", color: "teal" }}
        >
          <HStack spacing={"4"} alignItems={"center"}>
            <Icon as={FaChalkboardTeacher} boxSize={6} />
            <Text>Batches</Text>
          </HStack>
        </Link>

        <Link
          as={RouterLink}
          to="/teacher/home"
          _hover={{ textDecoration: "none", color: "teal" }}
        >
          <HStack spacing={"4"} alignItems={"center"}>
            <Icon as={FaBook} boxSize={6} />
            <Text>Resources</Text>
          </HStack>
        </Link>

        <Link
          as={RouterLink}
          to="/teacher/home"
          _hover={{ textDecoration: "none", color: "teal" }}
        >
          <HStack spacing={"4"} alignItems={"center"}>
            <Icon as={FaTicketAlt } boxSize={6} />
            <Text>Tickets</Text>
          </HStack>
        </Link>

        <Link
          as={RouterLink}
          to="/teacher/home"
          _hover={{ textDecoration: "none", color: "teal" }}
        >
          <HStack spacing={"4"} alignItems={"center"}>
            <Icon as={BiSupport} boxSize={6} />
            <Text>Support</Text>
          </HStack>
        </Link>
      </Flex>
    </Box>
  );
};

export default LeftNav;
