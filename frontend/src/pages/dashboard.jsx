import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Dashboard(){
   const loaction = useLocation();
   const[userdata,setUserdata] = useState("");
    // function displaydata(){
    // setUserdata(loaction.state);
    // console.log(userdata)
    // }
    const [check,setCheck] = useState(0);
    useEffect(()=>{
        setUserdata(loaction.state);
        console.log(userdata)
    },[check]);


    return(
       <> 
       
        <button onClick={()=>setCheck(check+1)}> button </button>

        </>
        


    );
}
export default Dashboard;