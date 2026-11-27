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
     <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      
     <form onSubmit={handleSubmit(OnSubmit1)} className="w-full max-w-md bg-blue-900 text-white p-5 rounded-xl shadow-md flex flex-col gap-2" >
        <h1 className="text-lg font-semibold text-center mb-1" >OkOK REGISTRATION  PAGE</h1>

     <input type="text" placeholder="enter you name " required className="w-full px-3 py-1.5 text-sm text-slate-900 placeholder-slate-400 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400" {...register("name")}/>
     <p>{errors.name?.message}</p>
     <input type="email" placeholder="enter you email" required className="w-full px-3 py-1.5 text-sm text-slate-900 placeholder-slate-400 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400" {...register("email")}/>
     <p>{errors.email?.message}</p>
     <input type="password" placeholder="enter you password " className="w-full px-3 py-1.5 text-sm text-slate-900 placeholder-slate-400 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400" required  {...register("password")}/>
     <p>{errors.password?.message}</p>
     <input type="number" placeholder="enter you age " required className="w-full px-3 py-1.5 text-sm text-slate-900 placeholder-slate-400 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400" {...register("age")}/>
     <p>{errors.age?.message}</p>
     <button type="submit" className="w-full py-1.5 mt-1 bg-red-600 hover:bg-red-700 text-white  rounded-lg  ">submit</button>
     </form>
     
  </div>
     );
}

export default Register;
