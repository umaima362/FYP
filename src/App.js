
import './App.css';
import Login from './AppComponents/Login';
import Signup1 from './AppComponents/Signup1';
import Home from './AppComponents/Home';
import Userimg from './AppComponents/Userimg';
import Multiform from './AppComponents/Multiform';
import Forgotpassword from './AppComponents/Forgotpassword';
import React , {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Donate from './AppComponents/Donate';
import Userprofile from './AppComponents/Userprofile';
import Setting from './AppComponents/Setting';
import Donee from './AppComponents/Donee';
import Googlemap from './AppComponents/Googlemap';
import Protectedroutes from './AppComponents/Protectedroutes';


function App() {
  return (
    <div>
    <Router>
         <Routes>
          <Route  exact path="/"  element={<Home/>}>
         </Route> 
          <Route  exact path="/Login"  element={<Login/>}>
         </Route> 
         <Route exact  path="/Signup1" element={<Signup1/>}>  
          </Route> 
          <Route exact  path="/Forgotpassword" element={<Forgotpassword/>}>  
          </Route>  
          <Route exact  path="/Home" element={<Home/>}>  
          </Route>
          <Route element={<Protectedroutes/> }>
          <Route exact  path="/Userprofile" element={<Userprofile/>}>  
          </Route>
          <Route exact  path="/Setting" element={<Setting/>}>  
          </Route>
          <Route exact  path="/Donate" element={<Donate/>}>  
          </Route>
          <Route exact  path="/Donee" element={<Donee/>}>  
          </Route>
          <Route exact  path="/Multiform" element={<Multiform/>}>  
          </Route>
          <Route exact  path="/Googlemap" element={<Googlemap/>}>  
          </Route>
          <Route exact  path="/Userimg" element={<Userimg/>}>  
          </Route>
          </Route>
          </Routes>
  </Router>
 
    </div>
  )
}

export default App
