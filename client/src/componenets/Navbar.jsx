import React, {useContext} from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'

const Navbar = () => {

   
const { user, setShowLogin,logout,credit } = useContext(AppContext);
     const navigate = useNavigate();
     console.log(credit);

  return (
    <div className='flex items-center justify-between py-4 '>
      <Link to='/'>
        <div >
          <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />
        </div>
      </Link>
      <div>
        {user ?
          <div className='flex items-center gap-2 sm:gap-3 '>
            <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full  hover:scale-105 transition-all  duration-700 ' >
              <img className='w-[16%]' src={assets.credit_star} alt="" />
              <p className='text-xs sm:text-sm font-medium text-black-800'>Credits left:{credit}</p>
            </button>

            <p className='text-black-600 max-sm:hidden pl-4'>Hi, {user.name}</p>
            <div className="relative group">
              <img src={assets.profile_icon} className='w-10 drop-shadow' />
              <div className="absolute hidden group-hover:block top-0 right-1 z-10 text-black rounded pt-12">
                <ul className='list-none bg-white rounded-md'>
                  <li onClick={logout} className='py-1 px-2 cursor-pointer'>Logout</li>
                </ul>
              </div>

            </div>
          </div>
          :
          <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
            <button onClick={()=>setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-4 text-sm rounded-[26px] hover:text-blue-500  transition-colors duration-200'>Login</button>
          </div>
        }
      </div>

    </div>
  )
}

export default Navbar
