import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Dashboard from "../../Components/Dashboard";
import LeftNav from "../../Components/StudentComponents/LeftNav";
import HomeContent from "../../Components/StudentComponents/HomeContent";
import TopNav from "../../Components/StudentComponents/TopNav";
import { useLocation } from "react-router-dom";
import CourseDescription from "../../Components/StudentComponents/CourseDescription";

const StudentHome = () => {
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
          <HomeContent />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default StudentHome;
