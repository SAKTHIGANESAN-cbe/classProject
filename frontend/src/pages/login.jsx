import { useState } from "react";
import { navigate } from "react-router-dom";

function Login(){
    
        
            
        
     const[formdata,setFormdata] = useState({

     username :"",
     password :"" });

   function handlesubmit (e){
    e.preventDefault();
    alert("login success");
    navigate("/dashboard",{
        state:formdata,
    });
   }

    function handlechange(e) {
      e.preventDefault();
      setFormdata({
        ...formdata,
        [e.target.name]:e.target.value,
      });
    }
    
   
  return(
  <form onSubmit={handlesubmit} >
    <input type="text" placeholder="you name " required name ="username" onChange={handlechange}/>
    <input type="password" placeholder="you password " required name ="password" onChange={handlechange} />
    <button type="submit" >submit</button>
    




  </form>
      
   );


}
export default Login;




