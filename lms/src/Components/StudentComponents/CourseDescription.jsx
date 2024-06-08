import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { React, useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import axios from "axios";

const CourseDescription = ({ courseId }) => {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/courses?id=${courseId}`)
      .then((response) => {
        setCourseData(response.data[0]);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  }, [courseId]);

  return (
    <Box p="20px">
      {courseData && (
        <>
          <Flex
            flexDirection={["column", "colums","row"]}
            alignItems={["center", "flex-start"]}
            justifyContent="space-between"
          >
            <Box flex="1" mr={[0, "4"]}>
              <Image
                src={courseData.img}
                alt={courseData.name}
                borderRadius="md"
                mb="4"
              />
            </Box>

            <Flex flexDirection={'column'} height={'100%'}c>
              <Text fontSize="2xl" mb="10px" fontWeight="bold">
                {courseData.name}
              </Text>
              <Text fontWeight="bold"mb="10px">
                Teacher:
              </Text>
              <Text>{courseData.teacherName}</Text>
              <Text color="gray.600" mb="10px">
                {courseData.description}
              </Text>
              
              
              {courseData.type === "Live" ? (
                <Button colorScheme="teal" mt="auto">
                  Enroll Now
                </Button>
              ) : (
                <Button colorScheme="teal" mt="auto" isDisabled>
                  Upcoming
                </Button>
              )}
            </Flex>
          </Flex>

          <Box mt="4">
            <Text fontWeight="bold" mb={'3'}>Lessons:</Text>
            <Box pl={'15px'}>
              <ul>
                {courseData.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <Text>
                      {lesson.title} - {lesson.duration}
                    </Text>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CourseDescription;
