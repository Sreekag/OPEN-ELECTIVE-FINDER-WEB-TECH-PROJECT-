
import './App.css';
import{
  BrowserRouter,
  Routes,
  Route
}from 'react-router-dom';

import React from 'react';



import StudentComponent from './studentcomponent';
import StudentFormComponent from './studentformcomp';
import StudentDetails from './getonestucomp';
import InsertCourse from './coursecomp';
import GetCourse from './getonecourse';
import CourseList from './getallcourse';
import InsertInstructor from './instructorcomp';
import GetAllInstructors from './getallins';
import InsertLogin from './logincomp';
import Signup from './signup';
import Home from './home';
import RemoteSensingPage from './rem';
import Elect from './elect';
import Auto from './auto';
import Admin from './admin';
import UpdateStudent from './updatestu';
import DeleteCourse from './delcourse';
import LogoutPage from './logout';
function App()
{ 
  return (
  
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<StudentComponent/>}/>
        <Route path='/add-student' element={<StudentFormComponent/>}/>
        <Route path='/id' element={<StudentDetails/>}/>
        <Route path='/cr' element={<InsertCourse/>}/>
        <Route path='/cr1' element={<GetCourse/>}/>
        <Route path='/crg' element={<CourseList/>}/>
        <Route path='/ins' element={<InsertInstructor/>}/>
        <Route path='/insg' element={<GetAllInstructors/>}/>
        <Route path='/inslog' element={<InsertLogin/>}/>
        <Route path='/sign' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/remi' element={<RemoteSensingPage/>}/>
        <Route path='/elect' element={<Elect/>}/>
        <Route path='/auto' element={<Auto/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/update' element={<UpdateStudent/>}/>
          <Route path='/del' element={<DeleteCourse/>}/>
          <Route path='/log' element={<LogoutPage/>}/>
      </Routes>
    </BrowserRouter>
  );

}
export default App;


