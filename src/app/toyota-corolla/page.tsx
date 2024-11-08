import Image from "next/image"
import "./toyota.css"
import Link from "next/link"


const page = () => {
  return (
    <div>
        <h1 className='text-center underline font-bold text-3xl'>Toyota Corolla 2024 Price in Pakistan, Images, Reviews & <br /> Specs</h1> 

    <div className="flex justify-center items-center mt-10">

        <Image className="w-72 h-52" src={"/toyota.png"} width={133} height={100} alt=""/>
    </div>

    <div className="flex justify-center gap-4 mt-8">
        <button className="bg-blue-800 text-white border-2 p-2 rounded-lg text-sm hover:bg-white hover:border-blue-800 hover:text-blue-800">Book a test drive</button>
        <button className="bg-white text-blue-800 border-2 p-2 rounded-lg border-blue-800 text-sm hover:bg-blue-800 hover:text-white">Request Bank Finance</button>
        <button className="bg-white text-blue-800 border-2 p-2 rounded-lg border-blue-800 text-sm hover:bg-blue-800 hover:text-white">Visit Place</button>
        <button className="bg-white text-blue-800 border-2 p-2 rounded-lg border-blue-800 text-sm hover:bg-blue-800 hover:text-white">Car Inspection</button>
    </div>

    <div>
      <h1 className="text-center mt-6 text-2xl">Vehicle Description</h1>
    </div>

    <div className="flex justify-center gap-3 mt-4">
      <p className="font-bold text-sm">Number of Doors: <span className="font-normal">4</span></p>
      <p className="font-bold text-sm">Engine: <span className="font-normal">1800 cc</span></p>
      <p className="font-bold text-sm">Condition: <span className="font-normal">8.5 / 10</span></p>
      <p className="font-bold text-sm">Driven: <span className="font-normal">9,500 KM</span></p>
      <p className="font-bold text-sm">Suspension Type: <span className="font-normal">Soft Suspension</span></p>
    </div>

    <div className="flex ml-[315px] gap-3 mt-3">
      <p className="font-bold text-sm">Avg: <span className="font-normal">13 Km per ltr</span></p>
      <p className="font-bold text-sm">Transmission: <span className="font-normal">Automatic</span></p>
      <p className="font-bold text-sm">Fuel Type: <span className="font-normal">Hi Octane</span></p>
    </div>

    <div>
      <p className="text-center text-green-700 text-2xl mt-5">PKR 65,00,00</p>
    </div>

    <div className="text-center mt-5 text-white">
      <Link href={"/form"}>
          <button className="bg-blue-800 p-3 rounded-lg hover:bg-blue-900">Make Payment</button>
      </Link>
    </div>

    </div>
  )
}

export default page