import z from "zod";
export const registerschema = z.object({
   name : z.string().min(3,"name must be mire than three "),
   email: z.string().email("enter a valid email   "),
   password:z.string().min(8,"entered password invalid"),
   age:z.coerce.number().min(18,"age should be 18  above "),

})