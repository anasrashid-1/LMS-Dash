import React from 'react'
import { Routes, Route} from "react-router-dom";
import Main from '../pages/Main';
import StudentHome from '../pages/Student/StudentHome';
import CourseDescription from '../Components/StudentComponents/CourseDescription';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/student/home" element={<StudentHome/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
