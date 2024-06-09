import {
  Box,
  Image,
  Text,
  Button,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useToast,
} from "@chakra-ui/react";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { FaClock } from "react-icons/fa";

const CourseDescription = ({ courseId }) => {
  const [courseData, setCourseData] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
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

  const isEnrolled = (courseId) => {
    console.log(" isEnrolled course id :  ",courseId);
    return enrolledCourses.some((course) => course.id === courseId);
  };

  useEffect(() => {
    axios
      .get(`https://lms-json-restapi.onrender.com/courses?id=${courseId}`)
      .then((response) => {
        setCourseData(response.data[0]);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });

      const storedEnrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
      setEnrolledCourses(storedEnrolledCourses);
  }, [courseId]);

  return (
    <Box p="20px">
      {courseData && (
        <>
          <Flex
            flexDirection={["column", "column", "row"]}
            alignItems={["center", "flex-start"]}
            justifyContent="space-between"
            bg="white"
            borderRadius="12px"
            boxShadow="lg"
            p="20px"
          >
            <Box flex="1" mr={[0, "4"]}>
              <Image
                src={courseData.img}
                alt={courseData.name}
                borderRadius="md"
                mb="4"
                border="2px solid #e2e8f0"
              />
            </Box>

            <Flex flexDirection="column" height="100%">
              <Text fontSize="2xl" mb="10px" fontWeight="bold" color="teal.600">
                {courseData.name}
              </Text>
              <Text fontWeight="bold" mb="10px" fontSize="lg" color="gray.700">
                Teacher:
              </Text>
              <Text fontSize="md" color="gray.600">
                {courseData.teacherName}
              </Text>
              <Text color="gray.600" mb="10px" mt="4">
                {courseData.description}
              </Text>

                <br />
                
             
              {courseData.type === "Live" ? (
                isEnrolled(courseData.id) ? (
                  <Button colorScheme="teal" mt="auto" isDisabled>
                    Enrolled
                  </Button>
                ) : (
                  <Button
                    colorScheme="teal"
                    mt="auto"
                    onClick={(e) => {
                      e.preventDefault();
                      handleEnroll(courseData);
                    }}
                  >
                    Enroll Now
                  </Button>
                )
              ) : (
                <Button colorScheme="teal" mt="auto" isDisabled>
                  Upcoming
                </Button>
              )}
            </Flex>
          </Flex>

          <Box mt="8">
            <Text fontWeight="bold" mb="3" fontSize="xl" color="gray.700">
              Lessons:
            </Text>
            <Box pl="15px">
              <ul>
                {courseData.lessons.map((lesson) => (
                  <li key={lesson.id} style={{ marginBottom: "10px" }}>
                    <Flex alignItems="center">
                      <FaClock color="teal.500" />
                      <Text ml="2" fontSize="md" color="gray.600">
                        {lesson.title} - {lesson.duration}
                      </Text>
                    </Flex>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>

          <Box mt="8">
            <Text fontWeight="bold" mb="3" fontSize="xl" color="gray.700">
              FAQs:
            </Text>
            <Accordion allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="lg"
                    color="teal.600"
                  >
                    What is the duration of the course?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} color="gray.600" fontSize="md">
                  The course duration is approximately 20 hours, spread over 4
                  weeks.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="lg"
                    color="teal.600"
                  >
                    What materials do I need?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} color="gray.600" fontSize="md">
                  You will need a computer with internet access, and optionally
                  a notebook for taking notes.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="lg"
                    color="teal.600"
                  >
                    Can I get a certificate after completion?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} color="gray.600" fontSize="md">
                  Yes, a certificate of completion will be provided after you
                  finish the course.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CourseDescription;
