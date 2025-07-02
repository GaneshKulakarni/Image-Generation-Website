import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  return (
    <div className='absolute top-10 left-0  right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <form className='relative bg-white p-10 rounded-xl text-slate-500'>
            <h1 className='text-center text-2xl text-neutral-700 font-medium'>Sign Up</h1>
            <p className='text-sm'>Welcom back! please sign in to continue</p>
            <div className='border px-6 py-2 flex items-center gap-1 rounded-full mt-5'>
                <img src={assets.profile_icon} width={30} height={30} alt="" />
                <input type='text' className='outline-none text-sm' placeholder='Full Name' required />
            </div>
            <div className='border px-6 py-2 flex items-center gap-5 rounded-full mt-5'>
                <img src={assets.email_icon} alt="" />
                <input type='email' className='outline-none text-sm' placeholder='Email' required />
            </div>
            <div className='border px-6 py-2 flex items-center gap-5 rounded-full mt-5'>
                <img src={assets.lock_icon} alt="" />
                <input type='password' className='outline-none text-sm' placeholder='Password' required />
            </div>

            <p className='text-sm text-blue-600 my-4 cursor-pointer '>Forgot Password</p>
            <button className='bg-blue-500 w-full text-white py-2 rounded-full'>Create Account</button>
        </form>

      
    </div>
  )
}

export default Login
