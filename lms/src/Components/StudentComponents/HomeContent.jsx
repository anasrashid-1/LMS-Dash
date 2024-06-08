import { Box, Text, Flex, Image, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaUserGraduate, FaBook, FaUserClock } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeContent = () => {
    const [courses, setCourses] = useState([]);
    const [enrolledCoursesCount, setEnrolledCoursesCount] = useState(0);
    const [upcomingCoursesCount, setUpcomingCoursesCount] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3000/courses')
            .then(response => {
                setCourses(response.data);
                setEnrolledCoursesCount(response.data.filter(course => course.type === 'Live').length);
                setUpcomingCoursesCount(response.data.filter(course => course.type === 'Upcoming').length);
            })
            .catch(error => {
                console.error("There was an error fetching the courses!", error);
            });
    }, []);

    return (
        <Box>
            <Box p="13px">
                <Image src={`${process.env.PUBLIC_URL}/elearning.jpg`} borderRadius="12px" />
            </Box>

            <Flex justifyContent="center" flexWrap="wrap">
                {/* Total Courses */}
                <Box
                    p="20px"
                    bg="blue.400"
                    textAlign="left"
                    borderRadius="12px"
                    m="10px"
                    flex="1"
                    display="flex"
                    alignItems="center"
                    _hover={{ bg: "blue.500", cursor: "pointer" }}
                >
                    <Flex flexDirection="row" ml="10px" gap={3} alignItems="center">
                        <Box borderRadius={100} bg="teal" p={3}>
                            <FaBook color="#fff" size={30} />
                        </Box>
                        <Box>
                            <Text fontSize={["sm", "lg"]} color="#fff">
                                Total Courses
                            </Text>
                            <Text fontSize={["sm", "lg"]} color="#fff">
                                {courses.length}
                            </Text>
                        </Box>
                    </Flex>
                </Box>

                {/* Courses Enrolled */}
                <Box
                    p="20px"
                    bg="green.400"
                    textAlign="left"
                    borderRadius="12px"
                    m="10px"
                    flex="1"
                    display="flex"
                    alignItems="center"
                    _hover={{ bg: "green.500", cursor: "pointer" }}
                >
                    <Flex flexDirection="row" ml="10px" gap={3} alignItems="center">
                        <Box borderRadius={100} bg="teal" p={3}>
                            <FaUserGraduate color="#fff" size={30} />
                        </Box>
                        <Box>
                            <Text fontSize={["sm", "lg"]} color="#fff">
                                Enrolled Courses
                            </Text>
                            <Text fontSize={["sm", "lg"]} color="#fff">
                                {enrolledCoursesCount}
                            </Text>
                        </Box>
                    </Flex>
                </Box>

                {/* Courses Not Enrolled */}
                <Box
                    p="20px"
                    bg="red.400"
                    borderRadius="12px"
                    m="10px"
                    flex="1"
                    display="flex"
                    alignItems="center"
                    _hover={{ bg: "red.500", cursor: "pointer" }}
                >
                    <Flex flexDirection="row" ml="10px" gap={3} alignItems="center">
                        <Box borderRadius={100} bg="teal" p={3}>
                            <FaUserClock color="#fff" size={30} />
                        </Box>
                        <Box>
                            <Text fontSize={["sm", "lg"]} color="#fff">
                                Upcoming Courses
                            </Text>
                            <Text fontSize={["sm", "lg"]} color="#fff">
                                {upcomingCoursesCount}
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>

            <Flex justifyContent="center" flexWrap="wrap" mt={5}>
                {courses.map(course => (
                    <Box key={course.id} p="20px" bg="gray.100" borderRadius="12px" m="10px" flex="1" minWidth="300px"   _hover={{ bg: "green.200", cursor: "pointer" }} >
                         <Link as={RouterLink} to={`/student/course/${course.id}`} _hover={{}}>
                         {console.log(course.id)}
                        <Flex flexDirection="column" height="100%">
                            <Image src={course.img} borderRadius="12px" mb="10px" />
                            <Text fontSize="xl" mb="10px">{course.name}</Text>
                            <Text fontSize="md" mb="10px">{course.description}</Text>
                            <Text fontSize="sm" color="gray.600" mb="10px">Instructor: {course.teacherName}</Text>
                            {course.type === 'Live' ? (
                                <Button colorScheme="teal" mt="auto">Enroll Now</Button>
                            ) : (
                                <Button colorScheme="teal" mt="auto" isDisabled>Upcoming</Button>
                            )}
                        </Flex>
                        </Link>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default HomeContent;
