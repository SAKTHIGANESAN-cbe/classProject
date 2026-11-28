import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function Login(){
    
        
     const location = useLocation();  
     const navigate = useNavigate();   
     const[logindata,setLogindata] = useState({

     username :"",
     password :"" });

   function handlesubmit(e){
    e.preventDefault();
    const registerdata = location.state;
    console.log("login page ... ",logindata);
    if(logindata.username===registerdata?.name && logindata.password===registerdata?.password){
      console.log(" print success...")
      navigate("/dashboard",{
        state:logindata
      });
      
    }
    else{
    console.log("error")
    }
   }

    function handlechange(e) {
      e.preventDefault();
      setLogindata({
        ...logindata,
        [e.target.name]:e.target.value,
      });
    }
    
   
  return(
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 px-4">
      
  <form onSubmit={handlesubmit} className="bg-blue-900  rounded-lg flex flex-col items-center justify-center p-3 gap-2" >
     <h1>Login page</h1>
   
    <input type="text" placeholder="you name " required name ="username" className="w-full px-3 py-1.5 rounded-lg border-2 text-slate-900 bg-white"  onChange={handlechange}/>
    <input type="password" placeholder="you password " required name ="password" className="w-full px-3 py-1.5 rounded-lg border-2 text-slate-900 bg-white" onChange={handlechange} />
    <button type="submit"  className="flex item-center justify-center rounded-lg border-3 bg-red-800  m-2">submit</button>
    <div>   </div>

  </form>
      </div>
   );


}
export default Login;




