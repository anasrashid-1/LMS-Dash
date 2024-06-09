import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import {useLocation } from "react-router-dom";
import LeftNav from "../../Components/TeacherComponents/LeftNav";
import Courses from "../../Components/TeacherComponents/Courses";
import TopNav from "../../Components/TeacherComponents/TopNav";

const TeacherHome = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  return (
    <Box>
      {/* Nav for small Screens */}
      <Box display={["block", "none"]}>
       <TopNav/>
      </Box>
      <Grid height={"100vh"} templateColumns="repeat(5, 1fr)">
        {/* for left navigation */}
        <GridItem
          colSpan={1}
          bg="gray.300"
          display={["none", "block"]}
          overflowY={"auto"}
        >
          <LeftNav/>
        </GridItem>

        {/* for main content */}
        <GridItem colSpan={[5, 4]} bg="gray.200" overflowY={"auto"}>
            <Courses/>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TeacherHome;
