import Image from 'next/image'
import "./form.css"
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div>
            <h1 className='text-center font-bold mt-5 text-3xl'>Enter Your Details</h1>
        </div>

        <div className='flex justify-center mt-5'>
            <Image className='w-[250px] h-[200px]' src={"/person-removebg-preview.png"} width={133} height={133} alt=''/>
        </div>

        <div className='flex flex-col'>
            
                <input className='justify-center w-[400px] ml-[490px] p-2 hover:cursor-pointer' type="text" placeholder='Enter Your Name'/><br />
                <input className='justify-center w-[400px] ml-[490px] p-2 hover:cursor-pointer' type="email" placeholder='Enter Your Email'/><br />
                <input className='justify-center w-[400px] ml-[490px] p-2 hover:cursor-pointer' type="password" placeholder='Card Number'/><br />
                <input className='justify-center w-[400px] ml-[490px] p-2 hover:cursor-pointer' type="text" placeholder='Address' /><br />
           
        </div>

        <div className='flex justify-center mt-8'>
            <Link href={"/thanks"}>
            
            <button className='text-center rounded-lg p-3 bg-blue-800 text-white hover:bg-blue-900'>
                Place Your order
            </button>
            </Link>
        </div>


    </div>
  )
}

export default page