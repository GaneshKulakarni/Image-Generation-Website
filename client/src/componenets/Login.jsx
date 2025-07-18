import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../contexts/AppContext';
import { motion } from "framer-motion"
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
    const [state, setState] = useState('Login');
    const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (state === 'Login') {
                const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.getItem('token', data.token)
                    setShowLogin(false)
                }
                else {
                    toast.error(data.message)
                }
            }
            else {
                const { data } = await axios.post(backendUrl + '/api/user/register', {
                   name, email, password
                })
                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.getItem('token', data.token)
                    setShowLogin(false)
                }
                else {
                    toast.error(data.message)
                }

            }
        } catch (error) {
            toast.error(error.message)

        }
    }


    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    })
    return (
        <div className='fixed top-0 left-0  right-0 bottom-0 z-10 backdrop-blur-md bg-black/30 flex justify-center items-center'>
            <motion.form onSubmit={onSubmitHandler}
                initial={{ opacity: 0.2, y: 50 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='relative bg-white p-10 rounded-xl  text-slate-800 max-w-md shadow-xl'>
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
                <p className='text-sm'>Welcom back! please sign in to continue</p>

                {state !== 'Login' && <div className='border px-6 py-2 flex items-center gap-1 rounded-full mt-5'>
                    <img src={assets.profile_icon} width={30} height={30} alt="" />
                    <input onChange={e => setName(e.target.value)} value={name} type='text' className='outline-none text-sm' placeholder='Full Name' required />
                </div>}
                <div className='border  px-6 py-2 flex items-center gap-5 rounded-full mt-5'>
                    <img src={assets.email_icon} alt="" />
                    <input onChange={e => setEmail(e.target.value)} value={email} type='email' className='outline-none text-sm' placeholder='Email' required />
                </div>
                <div className='border px-6 py-2 flex items-center gap-5 rounded-full mt-5'>
                    <img src={assets.lock_icon} alt="" />
                    <input onChange={e => setPassword(e.target.value)} value={password} type='password' className='outline-none text-sm' placeholder='Password' required />
                </div>

                <p className='text-sm text-blue-600 my-4 cursor-pointer '>Forgot Password</p>
                <button className='bg-blue-500 w-full text-white py-2 rounded-full'>{state === 'Login' ? 'login ' : 'create account'}</button>

                {state === 'Login' ? <p className='mt-5 text-center'>Don't have any account?<span className='text-blue-600 cursor-pointer' onClick={() => setState('Sing up')}>Sing up</span></p>
                    :
                    <p className='mt-5 text-center'>Already have any account?<span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>Login</span></p>
                }

                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' />
            </motion.form>


        </div>
    )
}

export default Login
