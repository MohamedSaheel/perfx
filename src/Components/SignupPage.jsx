import React, {useState} from 'react'
import perfxlogo from "../Components/Images/loginlogo.png"
import {Link} from 'react-router-dom'
import { emailValidator, passValidator } from './Validator'



const SignupPage = () => {

    const [value, setValue ] = useState({email:"", password:"",confirmpassword:""})
    const [ errorMessage, setErrorMessage ] = useState("")
    const [ successMessage, setSuccessMessage ] = useState("")

    const handleChange = (e) =>{
      setValue({...value, [e.target.name] : e.target.value})
    }

    const formSubmit=(e)=>{
        e.preventDefault()
        setErrorMessage("")
        if(!emailValidator(value.email))
        return setErrorMessage("Please enter a email")
        if(!passValidator(value.password))
        return setErrorMessage("Password should have 8 character with lowercase, uppercase numbers & special characters")

        if(value.password !== value.confirmpassword){
          return setErrorMessage("please check confirm password")
        }
        else{
          setSuccessMessage("login successfully")
        }
      

    }
  return (
    <div className="">
        
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
   <Link className="flex justify-center text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="mt-5" src={perfxlogo} alt="logo" />
     </Link>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          {errorMessage.length > 0 && (<div style={{color:"red"}}>{errorMessage}</div>)}
          {successMessage.length > 0 && (<div style={{color:"green"}}>{successMessage}</div>)}
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={formSubmit}>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" placeholder='Enter your email' name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"  onChange={handleChange}/>
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" onChange={handleChange} />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirmpassword" name="confirmpassword" id="confirmpassword" placeholder="Confirm your password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} />
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-[#017FBF] hover:underline">Terms and Conditions</Link></label>
                      </div>
                  </div>
                  <button className="bg-[#017FBF] text-white hover:bg-primary-700 font-medium w-full text-sm px-5 py-2.5 rounded-lg"onClick={formSubmit}>
                  Sign Up
                </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to="/perfx/login" className="font-medium text-[#017FBF] hover:underline dark:text-primary-500">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default SignupPage