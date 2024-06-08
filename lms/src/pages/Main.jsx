import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Image,
  Center
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Main = () => {
  return (
    <Flex height={["90vh", "100vh"]} justifyContent="center" alignItems="center">
      <Box
        boxShadow="lg"
        width="90%"
        mx="auto"
        px={6}
        borderRadius="14px"
        border="2px solid rgb(23,160,132)"
        py={8}
      >
        <Flex flexDirection="column" alignItems="center">
          <Flex alignItems={'center'}>
            {/* <Image 
              src={`${process.env.PUBLIC_URL}/lmslogo.png`} 
              width={'30%'} 
              height={'30%'} 
              alt="LMS Logo" 
            /> */}
            <Text
              fontSize={"20px"}
              fontWeight={"bold"}
              fontStyle={"italic"}
              textAlign="center"
              mb={["6", "14"]}
            >
              Welcome to LMS!
            </Text>
          </Flex>

          <Flex
            justifyContent="center"
            alignItems="stretch"
            flexDirection={{ base: "column", md: "row" }}
            gap={8}
          >
            {/* Teacher Route */}
            <Box
              borderWidth="2px"
              borderRadius="lg"
              p={4}
              borderColor="gray.300"
              _hover={{ borderColor: "teal.500" }}
            >
              <Link as={RouterLink} to="/teacher/home">
                <Flex
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text textAlign="center" fontSize="lg" fontWeight={"bold"}>
                    Are you a Student?
                  </Text>
                  <Image 
                    src={`${process.env.PUBLIC_URL}/teacher.png`} 
                    alt="Teacher" 
                    w={["52%", "60%"]} 
                  />
                  
                </Flex>
              </Link>
            </Box>

            <Center w='' h=''>
              <Text fontWeight={"bold"}>
                or
              </Text>
            </Center>

            {/* Student Route */}
            <Box
              borderWidth="2px"
              borderRadius="lg"
              p={4}
              borderColor="gray.300"
              _hover={{ borderColor: "teal.500" }}
            >
              <Link as={RouterLink} to="/student/home">
                <Flex
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text textAlign="center" fontSize="lg" fontWeight={"bold"}>
                    Are you a Teacher?
                  </Text>
                  <Image 
                    src={`${process.env.PUBLIC_URL}/student.png`} 
                    alt="Student" 
                    w={["52%", "60%"]} 
                  />
                </Flex>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Main;
