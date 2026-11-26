import { useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard(){
   const loaction =useLocation;
   const[userdata,setUserdata] = useState("");
    function display(){
    setUserdata(loaction.state);
    console.log(userdata);

    return(

       <button type="submit"> button </button>

   }


    );
}
export default Dashboard;