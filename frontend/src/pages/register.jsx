import { useNavigate } from "react-router-dom";
import { registerschema } from "../component/FormSchema/registerscheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function Register() {
     const naviagte = useNavigate();
     const {register,handleSubmit,formState:{errors}} = useForm({
     resolver :zodResolver(registerschema)

     });
    
    function OnSubmit1(data){
        console.log(data);
        alert("register successs  .....");
        naviagte("/",{
            state:data,
        })
}


    return ( 
     <div className="bg-blue-900 text-green-200 rounded-lg flex flex-col item-center justify-center text-center  mt-50 pt-2 p-1 mx-15 ">
      
        <h1>OkOK REGISTRATION  PAGE</h1>
     <form onSubmit={handleSubmit(OnSubmit1)} className="rounded-lg flex flex-col item-gap gap-2 " >
     <input type="text" placeholder="enter you name " required className="bg-white-200 rounded-lg border-2 border-black bg-white-300  mx-5" {...register("name")}/>
     <p>{errors.name?.message}</p>
     <input type="email" placeholder="enter you email" required className="bg-white-200 rounded-lg border-2 border-black bg-white-300 mx-5" {...register("email")}/>
     <p>{errors.email?.message}</p>
     <input type="password" placeholder="enter you password " className="bg-white-200 rounded-lg border-2 border-black bg-white-300 mx-5" required  {...register("password")}/>
     <p>{errors.password?.message}</p>
     <input type="number" placeholder="enter you age " required className="bg-white-200 rounded-lg border-2 border-black bg-white-300 mx-5" {...register("age")}/>
     <p>{errors.age?.message}</p>
     <button type="submit" className="bg-red-500 text-white-500 rounded-lg px-3 mx-20">submit</button>
     </form>
     
  </div>
     );
}

export default Register;
