import Image from "next/image"
import Link from "next/link"


const Featured = () => {
  return (
    <div>
        <div className="flex justify-between mt-12">
            <h1 className="text-2xl font-bold ml-40">Featured New Cars</h1>
            <p className="text-base text-blue-600 mr-40 hover:cursor-pointer">View All New Cars</p>
        </div>

        <div className="flex">
            <p className="m-7 ml-40 text-lg hover:underline hover:cursor-pointer hover:decoration-blue-500 hover:decoration-4 hover:underline-offset-8">Popular</p>
            <p className="m-7 text-lg hover:underline hover:cursor-pointer hover:decoration-blue-500 hover:decoration-4 hover:underline-offset-8">Upcoming</p>
            <p className="m-7 text-lg hover:underline hover:cursor-pointer hover:decoration-blue-500 hover:decoration-4 hover:underline-offset-8">Newly Launched</p>
        </div>

        <div className="flex">

            <div className="border-2 ml-40 h-72 w-60 bg-white">
                
                <Link href={"/toyota-corolla"}>
                <Image className="w-72" src={"/pic1-removebg-preview.png"} width={123} height={123} alt=""/>

                <p className="text-center text-blue-800 font-bold text-base">Toyota Corolla</p>
                <p className="text-center text-green-700">PKR 59.7 - 75.5lacs</p>
                <p className="text-center m-2 text-blue-700"><span className="text-orange-500 mr-1">★★★☆☆</span> 621 Reviews</p>
                </Link>

            </div>

            <div className="border-2 ml-6 h-72 w-60 bg-white" >
                <Link href={"/suzuki-alto"}>
                <Image className="w-72" src={"/pic2-removebg-preview.png"} width={123} height={123} alt=""/>

                <p className="text-center text-blue-800 font-bold text-base">Suzuki Alto</p>
                <p className="text-center text-green-700">PKR 23.3 - 35.5lacs</p>
                <p className="text-center m-2 text-blue-700"><span className="text-orange-500 mr-1">★★★☆☆</span> 199 Reviews</p>

                </Link>
            </div>

            <div className="border-2 ml-6 h-72 w-60 bg-white">
                <Link href={"/honda-city"}>
                <Image className="w-72" src={"/pic3-removebg-preview.png"} width={123} height={123} alt=""/>

                <p className="text-center text-blue-800 font-bold text-base">Honda City</p>
                <p className="text-center text-green-700">PKR 46.5 - 58.5lacs</p>
                <p className="text-center m-2 text-blue-700"><span className="text-orange-500 mr-1">★★★☆☆</span> 458 Reviews</p>
                </Link>
            </div>

            <div className="border-2 ml-6 h-72 w-60 bg-white">
                <Link href={"/honda-civic"}>
                <Image className="w-72" src={"/pic4-removebg-preview.png"} width={123} height={123} alt=""/>

                <p className="text-center text-blue-800 font-bold text-base hover:cursor-pointer">Honda Civic</p>
                <p className="text-center text-green-700">PKR 86.6 - 99.0lacs</p>
                <p className="text-center m-2 text-blue-700"><span className="text-orange-500 mr-1">★★★☆☆</span> 357 Reviews</p>
                </Link>
            </div>

        </div>
        
    </div>
  )
}

export default Featured