import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import TopNav from "../../Components/StudentComponents/TopNav";
import LeftNav from "../../Components/StudentComponents/LeftNav";
import HomeContent from "../../Components/StudentComponents/HomeContent";
import CourseDescription from "../../Components/StudentComponents/CourseDescription";
import CoursesEnrolled from "../../Components/StudentComponents/CoursesEnrolled";
import CourseContent from "../../Components/StudentComponents/CourseContent";

const StudentHome = () => {
  const { id } = useParams();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Box>
      {/* Nav for small Screens */}
      <Box display={["block", "none"]}>
        <TopNav />
      </Box>
      <Grid height={"100vh"} templateColumns="repeat(5, 1fr)">
        {/* for left navigation */}
        <GridItem
          colSpan={1}
          bg="gray.300"
          display={["none", "block"]}
          overflowY={"auto"}
        >
          <LeftNav />
        </GridItem>

        {/* for main content */}
        <GridItem colSpan={[5, 4]} bg="gray.200" overflowY={"auto"}>
          {(() => {
            switch (currentPath) {
              case `/student/course/${id}`:
                return <CourseDescription courseId={id} />;
              case "/student/courses/enrolled":
                return <CoursesEnrolled />;
              case `/student/coursecontent/${id}`:
                return <CourseContent courseId={id}/>
              default:
                return <HomeContent />;
            }
          })()}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default StudentHome;
