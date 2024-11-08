import Image from "next/image"

  
  const Header = () => {
    return (
      <div className="bg-blue-950 w-full h-32">
        <div className="flex">

        <Image className="h-14 ml-16 mt-8" src={"/logo-removebg-preview.png"} height={493} width={233} alt=""/>

        <select className="hover:cursor-pointer hover:text-orange-600 bg-blue-950 text-white mt-14 ml-7" name="cars" id="cars">
        <option className="p-0" value="car">Used Cars</option>
        </select>

        <select className="hover:cursor-pointer hover:text-orange-500 bg-blue-950 text-white mt-14 ml-7" name="cars" id="cars">
        <option className="p-0" value="car">New Cars</option>
        </select>

        <select className="hover:cursor-pointer hover:text-orange-500 bg-blue-950 text-white mt-14 ml-7" name="cars" id="cars">
        <option className="p-0" value="car">Bikes</option>
        </select>

        <select className="hover:cursor-pointer hover:text-orange-500 bg-blue-950 text-white mt-14 ml-7" name="cars" id="cars">
        <option className="p-0" value="car">Auto Store</option>
        </select>

        <button className="hover:cursor-pointer hover:text-orange-500 bg-blue-950 text-white mt-14 ml-10">Videos</button>
        <button className="hover:cursor-pointer hover:text-orange-500 bg-blue-950 text-white mt-14 ml-10">Forums</button>
        <button className="hover:cursor-pointer hover:text-orange-500 bg-blue-950 text-white mt-14 ml-10">Blog</button>
        
        <select className="hover:cursor-pointer hover:text-orange-500 bg-blue-950 text-white mt-14 ml-9" name="cars" id="cars">
        <option value="car">More</option>
        </select>

        <select className="hover:cursor-pointer rounded-lg hover:bg-red-800 bg-red-700 px-6 h-[50px] text-white mt-12 ml-9" name="cars" id="cars">
        <option className="p-0" value="car">Post an Ad</option>
        <option className="p-0" value="ad">ad</option>
        </select>

        </div>
      </div>
    )
  }
  
  export default Header

