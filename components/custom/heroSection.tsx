import React from 'react'
import Image from 'next/image'

function HeroSection() {
    return (
        <section className=" w-[95vw] h-[70vh]  bg-[#0d1c1d] rounded-lg overflow-hidden flex flex-col md:flex-row items-center px-10 py-20 mt-10">
            {/* Left Side */}
            <div className="flex-1 text-left text-white space-y-6">
                <Image
                    src="https://capsule-render.vercel.app/api?type=speech&height=300&color=gradient&text=👋+Hey+Coders,&fontAlignY=37&desc=+Welcome+to+CODERSHUBINC&descAlign=50&descSize=40&animation=twinkling&fontColor=ffffff"
                    alt="Hello Coders"
                    width={1000}
                    height={300}
                    unoptimized
                />

                <div className="flex space-x-4 pt-6">
                    {/* Social Icons */}
                    <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
                    <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
                    <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" /></a>
                    <a href="#"><img src="/icons/whatsapp.svg" alt="Whatsapp" className="w-6 h-6" /></a>
                </div>
            </div>

            {/* Center Image */}
            {/* Center Image */}
            <div className="relative flex-1 flex justify-center items-end mt-10 md:mt-0 overflow-visible">
                <div className="relative w-[300px] h-[300px] flex justify-center items-end">
                    {/* Circle border */}
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-yellow-400 z-10"></div>

                    {/* Image */}
                    <Image
                        src="/devPic.png" // your latest uploaded image
                        alt="Hero"
                        width={400}
                        height={400}
                        className="relative z-20 object-contain -translate-y-[5px]"
                    // ^ this lifts the image upwards out of the circle
                    />
                </div>
            </div>


            {/* Right Side */}
            <div className="flex-1 text-white space-y-6 mt-10 md:mt-0 md:pl-10">
                <h2 className="text-3xl font-semibold">Nature is a miracle</h2>
                <p className="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor dunt ut
                </p>
                <a href="#" className="text-yellow-400 underline">www.yourSite.com</a>
            </div>
        </section>
    )
}

export default HeroSection