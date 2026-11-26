import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Project from "./pages/project";
import Task from "./pages/task";


import Team from "./pages/team";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import Calander from "./pages/calander";
import Client from "./pages/client";
import { useState } from "react";


function App() {
  
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element = {<Login/>} />
  <Route path="/project" element ={<Project/>} />
  <Route path ="/task"  element = {<Task/>} />

  <Route path ="/team"  element = {<Team/>} />
  <Route path ="/client"  element = {<Client/>} />
  <Route path ="/dashboard"  element = {<Dashboard/>} />
  <Route path ="/calander"  element = {<Calander/>} />
  <Route path ="/settings"  element = {<Settings/>} />
     
  </Routes>
  
  </BrowserRouter>

  
  
 


  );
  

  
}

export default App;