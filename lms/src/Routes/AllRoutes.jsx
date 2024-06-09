import React from 'react'
import { Routes, Route} from "react-router-dom";
import Main from '../pages/Main';
import StudentHome from '../pages/Student/StudentHome';
import TeacherHome from '../pages/Teacher/TeacherHome';


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />


        {/* Student Routes */}
        <Route path="/student/home" element={<StudentHome/>} />
        <Route path="/student/course/:id" element={<StudentHome/>} />
        <Route path="/student/courses/enrolled" element={<StudentHome/>} />
        <Route path="/student/coursecontent/:id" element={<StudentHome/>} />
        

         {/* Teacher Routes */}
         <Route path="/teacher/home" element={<TeacherHome/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
