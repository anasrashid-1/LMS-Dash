import React, { useEffect, useState } from "react";
import { Box, Flex, Link, Image, Text, Button, Progress } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";

const CoursesEnrolled = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
        const storedEnrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
        setEnrolledCourses(storedEnrolledCourses);
    }, []);


    // calculating progress by courseId
    const calculateCompletionPercentage = (courseId) => {
        const storedCompletedLessons = JSON.parse(localStorage.getItem(`completedLessons_${courseId}`)) || [];
        const course = enrolledCourses.find(course => course.id === courseId);
        if (!course || course.lessons.length === 0) return 0;
        return (storedCompletedLessons.length / course.lessons.length) * 100;
    };

    return (
        <Box>
            {enrolledCourses.length > 0 ? (
                <Flex flexWrap="wrap" mt={5}>
                    {enrolledCourses.map(course => (
                        <Box key={course.id} p="20px" bg="gray.100" borderBottomRadius="12px" m="10px" flex="1" minWidth="300px" maxWidth={'350px'} _hover={{ bg: "green.200", cursor: "pointer" }}>
                            <Progress value={calculateCompletionPercentage(course.id)} size="sm" colorScheme="green" bg={'gray.200'} borderTopRadius="lg"  />
                            <Link as={RouterLink} to={`/student/course/${course.id}`} _hover={{}}>
                                <Flex flexDirection="column" height="100%">
                                    <Image src={course.img} borderBottomRadius="12px" mb="10px" />
                                    <Text fontSize="xl" mb="10px">{course.name}</Text>
                                    <Text fontSize="md" mb="10px">{course.description}</Text>
                                    <Text fontSize="sm" color="gray.600" mb="10px">Instructor: {course.teacherName}</Text>
                                    <Button as={RouterLink} to={`/student/coursecontent/${course.id}`} colorScheme="teal" mt="auto">Continue</Button>
                                </Flex>
                            </Link>
                        </Box>
                    ))}
                </Flex>
            ) : (
                <Flex textAlign="center" h={'99vh'} justifyContent={'center'} alignItems={'center'}>
                    <Box>
                        <Text fontSize="xl">You haven't enrolled in any courses yet.</Text>
                        <Text fontSize="lg">Enroll in a course and start learning!</Text>
                        <Button as={RouterLink} to="/student/home" colorScheme="teal" mt={5}>Enroll Now</Button>
                    </Box>
                </Flex>
            )}
        </Box>
    )
}

export default CoursesEnrolled;
