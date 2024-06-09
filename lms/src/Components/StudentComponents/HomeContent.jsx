import { Box, Text, Flex, Image, Button, Link, useToast } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaUserGraduate, FaBook, FaUserClock } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeContent = () => {
    const [courses, setCourses] = useState([]);
    
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [upcomingCoursesCount, setUpcomingCoursesCount] = useState(0);
    const toast = useToast();

    const handleEnroll = (course) => {
        setEnrolledCourses((prev) => {
            const updatedCourses = [...prev, course];
            localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses));
            return updatedCourses;
        });
        toast({
            title: "Course Enrolled",
            description: `${course.name} has been successfully enrolled.`,
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    };

    useEffect(() => {
        axios.get('http://localhost:3000/courses')
            .then(response => {
                setCourses(response.data);
                setUpcomingCoursesCount(response.data.filter(course => course.type === 'Upcoming').length);

                const storedEnrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
                setEnrolledCourses(storedEnrolledCourses);
            })
            .catch(error => {
                console.error("There was an error fetching the courses!", error);
            });
    }, []);

    const isEnrolled = (courseId) => {
        return enrolledCourses.some(course => course.id === courseId);
    };

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
                                {enrolledCourses.length}
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

            <Flex justifyContent={'center'} flexWrap="wrap" mt={5}>
                {courses.map(course => (
                    <Box key={course.id} p="20px" bg="gray.100" borderRadius="12px" m="10px" flex="1" minWidth="300px" maxWidth={'350px'} _hover={{ bg: "green.200", cursor: "pointer" }}>
                        <Link as={RouterLink} to={`/student/course/${course.id}`} _hover={{}}>
                            <Flex flexDirection="column" height="100%">
                                <Image src={course.img} borderRadius="12px" mb="10px" />
                                <Text fontSize="xl" mb="10px">{course.name}</Text>
                                <Text fontSize="md" mb="10px">{course.description}</Text>
                                <Text fontSize="sm" color="gray.600" mb="10px">Instructor: {course.teacherName}</Text>
                                {course.type === 'Live' ? (
                                    isEnrolled(course.id) ? (
                                        <Button colorScheme="teal" mt="auto" isDisabled>Enrolled</Button>
                                    ) : (
                                        <Button colorScheme="teal" mt="auto" onClick={(e) => {
                                            e.preventDefault();
                                            handleEnroll(course);
                                        }}>Enroll Now</Button>
                                    )
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
