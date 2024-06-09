import { Box, Button, Text, Flex, Divider, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";

const CourseContent = ({ courseId }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const storedEnrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedEnrolledCourses);
  }, []);

  const course = enrolledCourses.find(course => String(course.id) === courseId);
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const buttonColor = useColorModeValue("teal", "teal.300");
  const buttonTextColor = useColorModeValue("white", "gray.800");

  const markCompleted = (lessonId) => {
    // Handle marking lesson as completed here
    console.log(`Lesson ${lessonId} marked as completed.`);
  };

  if (!course) {
    return <Box>No course found for ID {courseId}</Box>;
  }

  return (
    <Box p="4" bg={bgColor} borderRadius="lg">
      <Text fontSize={["xl", "2xl"]} fontWeight="bold" mb="4" color={textColor}>{course.name}</Text>
      <Text fontSize="lg" fontWeight="bold" mb="2" color={textColor}>Teacher: {course.teacherName}</Text>
      <Text fontSize="md" mb="6" color={textColor}>{course.description}</Text>

      <Flex flexDirection="column">
        {course.lessons.map((lesson, index) => (
          <Flex key={lesson.id} alignItems="center" mb="4">
            <Text flex="1" color={textColor}>
              <b>Lesson {index + 1}:</b> {lesson.title} <br />
              <b>Duration:</b> {lesson.duration}
            </Text>
            <Button colorScheme={buttonColor} size="sm" color={buttonTextColor} onClick={() => markCompleted(lesson.id)}>Mark as Completed</Button>
          </Flex>
        ))}
      </Flex>

      <Divider my="6" borderColor={useColorModeValue("gray.300", "gray.600")} />

      <Text fontSize="md" color={textColor}>
        <b>Additional Information:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum arcu auctor, commodo eros eu, volutpat mi. Suspendisse potenti. Sed sit amet felis a ipsum pretium elementum. Aliquam sit amet leo metus. Proin luctus purus ut nisi consectetur, sed efficitur sapien finibus. Integer at sem ac ligula convallis maximus. Aenean vitae mauris sapien.
      </Text>
    </Box>
  );
};

export default CourseContent;
