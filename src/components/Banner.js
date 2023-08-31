import React from 'react'
import Aboutus from './Aboutus'

 function Banner() {
  return (
    <div  style={{ backgroundImage: "url(./f.jpg)" }} className=' h-screen'> 
        <navbar className="flex items-center w-full bg-transparent py-8 px-20 shadow-md">
      <div>
        <p className="text-4xl font-bold cursor-pointer text-white">BootaBazaar</p>
      </div>
      <div className="flex flex-1 items-center justify-center gap-7" >
        <p className=" hover: border-spacing-4 hover:border-lime-500  cursor-pointer font-semibold text-white">
          Home
        </p>
        <p className="   cursor-pointer font-semibold text-white">
          About Us
        </p>
        <p className="   cursor-pointer font-semibold text-white">
          Advice
        </p>
        <p className="   cursor-pointer font-semibold text-white">
          Blogs
        </p>
        <p className="   cursor-pointer font-semibold text-white">
          Shop
        </p>
        <p className="   cursor-pointer font-semibold text-white">
          Cart
        </p>
        <p className="   cursor-pointer font-semibold text-white">
          Hire
        </p>
      </div>
      <div>
        <img src="./2.jpg" className=" h-12 rounded-full" />
      </div>
    </navbar>
    <div>
        <p className=' text-white text-5xl font-bold ml-20 mt-10'>Find Trusted Local<br></br> Gardening<br></br> Professional, Right<br></br> Away</p>
    </div>

    <div className='bg-white w-4/12 mt-10 ml-20 flex border-spacing-5 rounded-full p-1'>
    <input placeholder='Search anything here ....' className=' hover:outline-none bg-transparent py-3 w-9/12 rounded-full'  />
    <button type='button' className=' ml-5 bg-lime-700 text-white hover:bg-lime-800 font-semibold p-3 w-28 rounded-full'>Search</button>
    </div>

    <div className='flex'>
    <p className=' text-white text-lg font-semibold ml-20 mt-10'>Popular : </p>
    <button type='button' className=' hover:bg-white hover:text-black ml-5 mt-10 text-sm  text-white  w-52 border-2 rounded-full border-white '>Landscape Staging</button>
    <button type='button' className=' hover:bg-white hover:text-black ml-5 mt-10 text-sm  text-white  w-52 border-2 rounded-full border-white '>Lawn Renovation</button>
    <button type='button' className=' hover:bg-white hover:text-black ml-5 mt-10 text-sm  text-white  w-52 border-2 rounded-full border-white '>Garden Design and Planting</button>
    </div>
 <div>
  <button type='button' className=' bg-lime-700 p-4 hover:bg-lime-800 text-white font-bold rounded-2xl mt-10 w-2/12 ml-20'> Hire a Gardener</button>
  <button type='button' className=' bg-lime-700 p-4 hover:bg-lime-800 text-white font-bold rounded-2xl mt-10 w-2/12 ml-10'> Explore Marketplace</button>
 </div>
    </div>
  )
}

export default Banner
