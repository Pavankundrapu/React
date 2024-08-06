import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button,Input,Logo} from './index'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register,handleSubmit} = useForm()
  const [error,setError] = useState('')

  const login = async(data) =>
    { 
      setError('')
      try {
       const session = await authService.login(data)
       if(session)
       {
         const userData = await authService.getCurrentUser()
         if(userData) dispatch(authLogin(userData));
         navigate('/')
       } 
      } catch (error) {
        setError(error.message)
      }
    }
  return (
    <div className='flex items-center justify-center w-full'>
         <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                    </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)}  className="mt-8" >
         <div className='space-y-5'>
          <Input
           label="Email"
           type="email"
           placeholder="Enter your email"
           {...register("email",{
            required:true,
            pattern : {
              value:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
              message:"Please enter a valid email"
            }
           })}
          />
          <Input
           label="Password"
           placeholder="Enter your password"
           type = "password"
           {...register("password",{
            required:true,
            pattern : {
              value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              message:"Please enter a valid password"
            },
            validate : value => value.length > 7
           })}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
         </div>
        </form>
    </div>                
    </div>
  )
}

//here we use regex to validate the email and password.
//we need to follow do ...register for each input field.if not we will not get the value of the input field.
//here we call handlesubmit with the login function.as handlesubmit is of react hook form which manages the states and handling underhood and we do it based upon our function so we call hadleSublmit(login).

export default Login