import { useFormAction, useNavigate } from "react-router-dom";
import { registerschema } from "../component/FormSchema/registerscheme";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
     const naviagte = useNavigate();
     const {register,handleSubmit,formState:{errors}} = useFormAction({
     resolver :zodResolver(registerschema)

     })
function onSubmit1(data){
    console.log(data);
    alert("register successs  .. 🤣🤣");
    naviagte("/")
}


    return ( 

    <form onSubmit={handleSubmit(onSubmit1)} >
    <input type="text" placeholder="enter you name " required name ="username" {...register("name")}/>
     <p>{errors.name?.mesage}</p>
     <input type="email" placeholder="enter you email" required name ="email" {...register("email")}/>
     <p>{errors.email?.mesage}</p>
     <input type="password" placeholder="enter you password " required name ="password" {...register("password")}/>
     <p>{errors.password?.mesage}</p>
     <input type="number" placeholder="enter you number " required name ="number" {...register("number")}/>
     <p>{errors.number?.mesage}</p>
     <button type="submit">submit ....</button>
  </form>
     );
}

export default Register;