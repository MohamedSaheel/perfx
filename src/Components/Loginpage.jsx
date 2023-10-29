import React, { useState } from "react";
import logo from "../Components/Images/loginlogo.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import {Link} from "react-router-dom"
import { emailValidator,passValidator } from "./Validator";


 const Loginpage = () => {

    const [ errorMessage, setErrorMessage ] = useState("")
    const [ successMessage, setSuccessMessage ] = useState("")


    const [ value, setValue ] = useState({email:"", password:""})

    const handleChange = (e) =>{
      setValue({...value, [e.target.name] : e.target.value})
    }

    const formSubmit=(e)=>{
      e.preventDefault()
      
      setSuccessMessage('')
      if(!emailValidator(value.email))
      return setErrorMessage("Please enter a valid email")

      if(!passValidator(value.password))
      return setErrorMessage("Password should have 8 character with lowercase, uppercase numbers & special characters")
      setSuccessMessage("Login Successfully")
      setErrorMessage('')
     
    }

    const [ open, setOpen ] = useState(false)

    const toggle = () =>{
      setOpen(!open)
    }
   
  return (
    <div className="container-fluid grid lg:grid-cols-2 sm:grid-cols-1">
      <div className="loginimage flex items-center justify-center bg-[#E5EEFA]">
        <img src={logo} alt="Login page logo" />
      </div>

      <div className="flex flex-col px-6 py-8 items-center justify-center md:h-screen lg:py-0">
        <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#21272A] md:text-2xl">
              Log In
            </h1>
            {errorMessage.length > 0 && (<div style={{color:"red"}}>{errorMessage}</div>)}
            {successMessage.length > 0 && (<div style={{color:"green"}}>{successMessage}</div>)}
            <form className="space-y-4 md:space-y-6"onSubmit={formSubmit}>
              <div>
                <label className="block mb-2 text-xs font-medium text-gray-900">
                  Email Address
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="email"
                  className="bg-[#F2F4F8] border border-b-1 outline-none shadow text-gray-900 sm:text-sm block w-full p-2 mb-5 rounded-lg"
                />
                <label className="block mb-2 text-xs font-medium text-gray-900">
                  Password
                </label>
         
               <div className="flex bg-[#F2F4F8] border border-b-1 shadow text-gray-900 sm:text-sm p-2 rounded-lg">
                <input
                onChange={handleChange}
                name="password"
                  type={(open === false)? 'password' : 'text'}    
                  className="w-full outline-none bg-[#F2F4F8]"
                />

                {
                  (open === false)?  <AiOutlineEye className="text-2xl" onClick={toggle}/> :  <AiOutlineEyeInvisible className="text-2xl" onClick={toggle}/>
                }
                </div>
                <div className="flex justify-end my-3">
                <a href="www.google.com" className="text-sm font-medium text-primary-600 hover:underline text-[#017FBF]">Forgot password?</a></div>
                <div className="my-5">
                <button className="bg-[#017FBF] text-white hover:bg-primary-700 font-medium w-full text-sm px-5 py-2.5 rounded-lg" onClick={formSubmit}>
                  Log in
                </button></div>
             <Link to="/perfx/signup"><div className="my-5">
                <button className="bg-[#017FBF] text-white hover:bg-primary-700 font-medium w-full text-sm px-5 py-2.5 rounded-lg">
                  Sign Up
                </button></div></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
