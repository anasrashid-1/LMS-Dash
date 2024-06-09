import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Icon,
  useToast,
  Select // Import Select component
} from "@chakra-ui/react";
import { FaEdit, FaPlus } from "react-icons/fa";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [newCourse, setNewCourse] = useState({
    name: "",
    img: "",
    description: "",
    teacherName: "",
    type: "",
    lessons: [{ id: 1, title: "", duration: "" }],
  });

  useEffect(() => {
    axios
      .get("https://lms-json-restapi.onrender.com/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleLessonChange = (index, e) => {
    const { name, value } = e.target;
    const updatedLessons = [...newCourse.lessons];
    updatedLessons[index][name] = value;
    setNewCourse({ ...newCourse, lessons: updatedLessons });
  };

  const addLessonField = () => {
    setNewCourse({
      ...newCourse,
      lessons: [...newCourse.lessons, { id: newCourse.lessons.length + 1, title: "", duration: "" }]
    });
  };

  const handleSubmit = () => {
    axios.post("https://lms-json-restapi.onrender.com/courses", newCourse)
      .then((response) => {
        setCourses([...courses, response.data]);
        onClose();
        toast({
          title: "Course added.",
          description: "The course has been added successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("There was an error adding the course!", error);
        toast({
          title: "Error",
          description: "There was an error adding the course.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const deleteCourse = (courseId) => {
    axios.delete(`https://lms-json-restapi.onrender.com/courses/${courseId}`)
      .then(() => {
        setCourses(courses.filter(course => course.id !== courseId));
        toast({
          title: "Course deleted.",
          description: "The course has been deleted successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("There was an error deleting the course!", error);
        toast({
          title: "Error",
          description: "There was an error deleting the course.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Box p={"13px"}>
      <Flex justifyContent={"center"} flexWrap="wrap" mt={5}>
        <Box
          minWidth="300px"
          maxWidth={"350px"}
          bg={'gray.300'}
          borderRadius="12px"
          p="20px"
          m='10px'
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={onOpen}
          _hover={{ bg: "gray.400" }}
        >
          <Icon as={FaPlus} boxSize="40px" color="teal.500" />
          <Text mt="10px" fontSize="xl" color="teal.500">Add Course</Text>
        </Box>
        {courses.map((course) => (
          <Box
            key={course.id}
            p="20px"
            bg="gray.100"
            borderRadius="12px"
            m="10px"
            flex="1"
            minWidth="300px"
            maxWidth={"350px"}
            _hover={{ bg: "green.200", cursor: "pointer" }}
          >
            <Flex flexDirection="column" height="100%">
              <Image src={course.img} borderRadius="12px" mb="10px" />
              <Text fontSize="xl" mb="10px">
                {course.name}
              </Text>
              <Text fontSize="md" mb="10px">
                {course.description}
              </Text>
              <Text fontSize="sm" color="gray.600" mb="10px">
                Instructor: {course.teacherName}
              </Text>
              <Flex flexDir={'row'} gap={'2'} mt={'auto'}>
                <Button colorScheme="orange" mt="auto" w={'20%'}> <FaEdit /> </Button>
                <Button colorScheme="red" mt="auto" w={'100%'} onClick={() => deleteCourse(course.id)}>Delete</Button>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Course</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb="4" isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" value={newCourse.name} onChange={handleInputChange} />
            </FormControl>
            <FormControl mb="4" isRequired>
              <FormLabel>Image URL</FormLabel>
              <Input name="img" value={newCourse.img} onChange={handleInputChange} />
            </FormControl>
            <FormControl mb="4" isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea name="description" value={newCourse.description} onChange={handleInputChange} />
            </FormControl>
            <FormControl mb="4" isRequired>
              <FormLabel>Teacher Name</FormLabel>
              <Input name="teacherName" value={newCourse.teacherName} onChange={handleInputChange} />
            </FormControl>
            <FormControl mb="4" isRequired>
              <FormLabel>Type</FormLabel>
              <Select name="type" value={newCourse.type} onChange={handleInputChange}>
                <option value="Live">Live</option>
                <option value="Upcoming">Upcoming</option>
              </Select>
            </FormControl>
            <FormControl mb="4" isRequired>
              <FormLabel>Lessons</FormLabel>
              {newCourse.lessons.map((lesson, index) => (
                <Box key={index} mb="4">
                  <Input
                    placeholder="Lesson Title"
                    name="title"
                    value={lesson.title}
                    onChange={(e) => handleLessonChange(index, e)}
                    mb="2"
                    isRequired
                  />
                  <Input
                    placeholder="Lesson Duration"
                    name="duration"
                    value={lesson.duration}
                    onChange={(e) => handleLessonChange(index, e)}
                    isRequired
                  />
                </Box>
              ))}
              <Button onClick={addLessonField}>Add Lesson</Button>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Courses;
