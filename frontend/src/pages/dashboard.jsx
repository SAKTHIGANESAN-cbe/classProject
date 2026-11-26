import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Dashboard(){
   const loaction = useLocation();
   const[userdata,setUserdata] = useState("");
    function displaydata(){
    setUserdata(loaction.state);
    console.log(userdata)
    }

    return(
       <> 
       
        <button onClick={displaydata}> button </button>

        </>
        


    );
}
export default Dashboard;