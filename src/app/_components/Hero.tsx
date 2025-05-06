"use client"
import Image from "next/image";
import hero from "@/public/hero.jpeg";
import { useState } from "react";
export default function Hero(){
    const [isHovered, setIsHovered] = useState(false);
    return(
        <div className="w-full flex items-center justify-center h-[90vh] relative">
                <Image src={hero} alt={""} layout="fill" className={`object-cover transition-all duration-700 absolute w-full ${isHovered? "brightness-90": "brightness-50"} `} style={{ objectPosition: "center 50%" }} />
            <div className="z-10 relative max-w-4/5 ">
                <h1 className={`z-10 text-5xl md:text-6xl mb-8 transition-all duration-700 ${isHovered? "opacity-0": "opacity-100"}`}>As <span className="font-bold">Melhores verduras</span> para seu negócio</h1>
                <p className={`mb-4 text-xl md:text-2xl transition-all duration-700 ${isHovered? "opacity-0": "opacity-100"}`}>Distribuímos os melhores vegetais da região, do campo direto para você!</p>
                <p className={`md:mb-18 mb-6 text-xl md:text-2xl transition-all duration-700 ${isHovered? "opacity-0": "opacity-100"}`}>Trabalhamos com o mesmo cuidado que dedicamos à nossa própria mesa.</p>
                <button 
                onMouseEnter={()=>setIsHovered(true)}
                onMouseLeave={()=>setIsHovered(false)}
                className="
                mb-4
                text-white hover:text-c-orange-500 
                bg-c-orange-500 hover:bg-white  
                text-2xl font-bold p-4 rounded  
                transition-all cursor-pointer">
                    Faça seu Pedido
                </button>
            </div>
        </div>
    )
}