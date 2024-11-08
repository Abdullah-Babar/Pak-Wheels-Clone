import React from 'react'

const Hero = () => {
  return (
    <div>
        <h1 className='text-center text-gray-800 font-bold text-3xl mt-9'> Sell Your Car on PakWheels and Get the Best Price</h1>

        <div className='flex justify-center mt-11 '>

            <div className='mr-44 '>

            <h1 className='text-2xl text-blue-800 font-semibold'>Post your Ad on PakWheels</h1>

            <p className='mt-4'><span className='mr-1 text-green-700'>✔</span> Post your Ad for Free in 3 Easy Steps</p>
            <p className='mt-4'><span className='mr-1 text-green-700'>✔</span> Get Genuine offers from Verified Buyers</p>
            <p className='mt-4'><span className='mr-2 text-green-700'>✔</span>Sell your car Fast at the Best Price</p>

            <button className="mt-4 bg-red-700 hover hover:bg-red-900 text-white px-6 py-3 rounded-lg">
              Post Your Ad
            </button>
            </div>

            <div className="flex flex-col px-11 bg-rgb(238, 238, 238) mr-14">
            <div className="w-px h-20 bg-gray-600 mb-2"></div>
            <div className="text-gray-800 font-semibold mb-2 mr-14">OR</div>
            <div className="w-px h-20 bg-gray-600 mb-2" ></div>
          </div>

            <div>
                <h1 className='text-2xl text-blue-800 font-semibold'>Try PakWheels Sell It For Me</h1>

                <p className='mt-4'><span className='mr-1 text-green-700'>✔</span> Dedicated Sales Expert To Sell Your Car</p>
            <p className='mt-4'><span className='mr-1 text-green-700'>✔</span> We Bargain For You And Share The Best Offer</p>
            <p className='mt-4'><span className='mr-2 text-green-700'>✔</span> We Ensure Safe & Secure Transaction</p>

            <button className="mt-4 bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 rounded-lg">
              Register Your Car
            </button>
            </div>
        </div>
    </div>
  )
}

export default Hero