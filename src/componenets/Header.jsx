import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col items-center text-center justify-center'>
        <div className='text-stone-700 inline-flex text-center mt-20 gap-2 bg-gray-50 px-6 py-1 rounded-full border border-neutral-700 border-solid border-y-2'>
            <p>
                Best to image generator</p>
                <img src={assets.star_icon} alt="" />
        </div>
       <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-5 text-center'> Turn text to <span className='text-blue-600'>image</span>, in seconds.</h1>

       <p className='text-center max-w-xl mx-auto mt-5 '>Your imagination is the only limit. Effortlessly generate captivating images from any text prompt, and watch your concepts materialize before your eyes.</p>
       <button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'>Start Generation
        <img  className="h-5" src={assets.star_group} alt="" />
       </button>

       <div className='flex flex-wrap justify-center mt-7 gap-3'>
        {Array(6).fill('').map((item,index)=>(
            <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index%2 ==0 ? assets.sample_img_2 : assets.sample_img_1} alt=" " key ={index} width={70} />
        ))}
       </div>
       <p>Generate iages from imagefy</p>
    </div>
    
  )
}

export default Header
