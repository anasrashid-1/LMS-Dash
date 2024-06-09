import React from 'react'
import { Routes, Route} from "react-router-dom";
import Main from '../pages/Main';
import StudentHome from '../pages/Student/StudentHome';


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/student/home" element={<StudentHome/>} />
        <Route path="/student/course/:id" element={<StudentHome/>} />
        <Route path="/student/courses/enrolled" element={<StudentHome/>} />
        <Route path="/student/coursecontent/:id" element={<StudentHome/>} />
        
      </Routes>
    </div>
  )
}

export default AllRoutes
