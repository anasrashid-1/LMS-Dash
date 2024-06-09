import {
  Box,
  Button,
  Text,
  Flex,
  Divider,
  Progress,
  ProgressLabel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const CourseContent = ({ courseId }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const storedEnrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedEnrolledCourses);

    const storedCompletedLessons =
    JSON.parse(localStorage.getItem(`completedLessons_${courseId}`)) || [];
    setCompletedLessons(storedCompletedLessons);

    const foundCourse = storedEnrolledCourses.find(
      (course) => String(course.id) === courseId
    );
    setCourse(foundCourse);
  }, [courseId]);

  const markCompleted = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      const updatedCompletedLessons = [...completedLessons, lessonId];
      setCompletedLessons(updatedCompletedLessons);
      localStorage.setItem(
        `completedLessons_${courseId}`,
        JSON.stringify(updatedCompletedLessons)
      );
    }
  };

  const calculateCompletionPercentage = () => {
    if (!course || course.lessons.length === 0) return 0;
    return (completedLessons.length / course.lessons.length) * 100;
  };

  if (!course) {
    return <Box>No course found for ID {courseId}</Box>;
  }

  return (
    <Box>
      <Box position="sticky" top={'0'}  display="inline-block" width="100%" >
        <Progress
          value={calculateCompletionPercentage()}
          size="md"
          height={"40px"}
          colorScheme="green"
        >
          <ProgressLabel color={"black"} fontSize={'10px'} >{`${Math.round(
            calculateCompletionPercentage()
          )}% Completed`}</ProgressLabel>
        </Progress>
      </Box>
      <Box p="4" borderRadius="lg">
        <Text fontSize={["xl", "2xl"]} fontWeight="bold" mb="4">
          {course.name}
        </Text>
        <Text fontSize="lg" fontWeight="bold" mb="2">
          Teacher: {course.teacherName}
        </Text>
        <Text fontSize="md" mb="6">
          {course.description}
        </Text>

        <Flex flexDirection="column">
          {course.lessons.map((lesson, index) => (
            <Flex
              key={lesson.id}
              alignItems="center"
              mb="4"
              p="2"
              bg="gray.50"
              borderRadius="lg"
            >
              <Text flex="1">
                <b>Lesson {index + 1}:</b> {lesson.title} <br />
                <b>Duration:</b> {lesson.duration}
              </Text>
              <Button
                bg={completedLessons.includes(lesson.id) ? "gray.400" : "teal"}
                size="sm"
                color="white"
                onClick={() => markCompleted(lesson.id)}
                disabled={completedLessons.includes(lesson.id)}
              >
                {completedLessons.includes(lesson.id)
                  ? "Completed"
                  : "Mark as Completed"}
              </Button>
            </Flex>
          ))}
        </Flex>

        <Divider my="6" />

        <Text fontSize="md">
          <b>Additional Information:</b> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed dictum arcu auctor, commodo eros eu, volutpat mi.
          Suspendisse potenti. Sed sit amet felis a ipsum pretium elementum.
          Aliquam sit amet leo metus. Proin luctus purus ut nisi consectetur,
          sed efficitur sapien finibus. Integer at sem ac ligula convallis
          maximus. Aenean vitae mauris sapien.
        </Text>
        <br />
        <Text fontSize="md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, cupiditate. At architecto amet quasi vero esse sed illo, quaerat doloremque reprehenderit assumenda, nam a odit vel tempore accusantium id dolore.</Text>
      </Box>
      
    </Box>
  );
};

export default CourseContent;
