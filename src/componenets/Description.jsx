import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create Ai Image</h1>
        <p className='text-gray-500 mb-8'>Turn your imaginations into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row'>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing to Ai Powered Text to Image Generator</h2>
                <p className='text-gray-600 mb-4'>Words to wonders. Get ready to see your written ideas become incredible images. Fast, creative, and incredibly simple.</p>
                <p className='text-gray-600'>Bring your imagination to life with our cutting-edge text-to-image generator. Simply type your wildest concepts, detailed scenes, or abstract ideas, and watch as our advanced AI instantly transforms your words into stunning, unique visuals</p>


            </div>



        </div>
      
    </div>
  )
}

export default Description
