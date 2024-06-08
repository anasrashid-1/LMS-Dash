import { Box, Grid, GridItem  } from '@chakra-ui/react'
import React from 'react'
import Dashboard from '../../Components/Dashboard'
import LeftNav from '../../Components/StudentComponents/LeftNav'

const StudentHome = () => {
  return (
    <Box>
      <Grid height={'100vh'}  templateColumns='repeat(5, 1fr)'>
        {/* for left navigation */}
        <GridItem colSpan={1} bg='gray.300' >
            <LeftNav/>
        </GridItem>
        
        {/* for main content */}
        <GridItem colSpan={4} bg='gray.200'>

        </GridItem>
      </Grid>
    </Box>
  )
}

export default StudentHome
