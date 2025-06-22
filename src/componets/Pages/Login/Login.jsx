import React, { use } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
 const {register , handleSubmit, formState:{errors}} = useForm()
const {signIn}= use(AuthContext)
  const onSubmit = (data) => {
     console.log(data)
     signIn(data.email , data.password).then(res=>{
      console.log(res.user)
     }).catch(err=>{
      console.log(err)
     }     )
 
    };

  return (
    <div className="bg-white shadow-md rounded-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login to Your Account</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            {...register('email',{required:"email is required"})}
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="you@example.com"
            
          />
          {
            errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>
          }
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
              {...register('password',{required:"password is required"})}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="••••••••"
            
          />
          {
            errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>
          }
        </div>

        {/* Options */}
        {/* <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600" />
            Remember me
          </label>
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div> */}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          Login
        </button>
      </form>

      {/* Optional: Register link */}
      <p className="text-sm text-center mt-6 text-gray-600">
        Don’t have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline font-medium">
          Register now
        </a>
      </p>
    </div>
  );
};

export default Login;
