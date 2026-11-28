import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Project from "./pages/project";
import Task from "./pages/task";


import Team from "./pages/team";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/admin/settings";
import Calander from "./pages/calander";
import Client from "./pages/client";
import Register from "./pages/register";



import AdminDashboard from "./pages/admin/adminDashboard";

import Admin from "./pages/admin/adminlayout";
import AdminDetails from "./pages/admin/AdminDetails";



function App() {
  
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/login"  element={<Login/>} />
  <Route path="/" element = {<Register/>} />
  <Route path="/project" element ={<Project/>} />
  <Route path ="/task"  element = {<Task/>} />

  <Route path ="/team"  element = {<Team/>} />
  <Route path ="/client"  element = {<Client/>} />
  <Route path ="/dashboard"  element = {<Dashboard/>} />
  <Route path ="/calander"  element = {<Calander/>} />

  <Route path ="/settings"  element = {<Settings/>} />

     <Route path="/admin" element={<Admin/>}>
  
        <Route path="admindashboard" element={<AdminDashboard/>}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="admindetails" element={<AdminDetails/>} />

         
  
    </Route>
  </Routes>
  
  </BrowserRouter>

  
  
 


  );
  

  
}

export default App;