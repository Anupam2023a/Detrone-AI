const {z} = require("zod");

const loginSchema = z.object({
  email: z
  .string({ required_error: "Email is required" })
  .trim()
  .email({ message: "Invalid email address" })
  .min(5, { message: "Email must be at least 5 characters" })
  .max(255, { message: "Email must not be more than 255 characters" }),

  password: z
  .string({ required_error: "Password is required" })
  .trim()
  .min(8, { message: "Password must be at least 8 characters" })
  .max(255, { message: "Password must not be more than 255 characters" }),

})  



const signupSchema = //z.object
     loginSchema.extend({  // by removing z.object we are putting the loginSchema.extend so that the email and password will be provided in both signup and login without separate we make them one
    username : z
    .string({required_error : "Name is required"})
    .trim()
    .min( 3, {message :"Name must be atleast 3 of  characters"})
    .max( 255, {message :"Name must not be more than 255 characters"}),

phone: z
  .string({ required_error: "Phone number is required" })
  .trim()
  .min(10, { message: "Phone number must be at least 10 digits" })
  .max(15, { message: "Phone number must not be more than 15 digits" }),

});

module.exports = {signupSchema, loginSchema};