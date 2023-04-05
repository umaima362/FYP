import React, { useState , useNavigate } from 'react'
import Login from './Login';
import { Outlet } from 'react-router-dom';


const Protectedroutes = () => {

  return localStorage.getItem("token") ? <Outlet/> : <Login/>
}

export default Protectedroutes
