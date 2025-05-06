"use client"

import { interFont } from "@/ui/fonts";
import Image from "next/image";
import LeftTop from "@/public/square/LT.png";
import LeftBottom from "@/public/square/LB.png";
import RightTop from "@/public/square/RT.png";
import RightBottom from "@/public/square/RB.png";

export default function AboutUs() {
    return(
        <div className="md:w-fit w-full bg-white flex flex-col lg:grid  lg:grid-rows-1 lg:grid-cols-2 h-fit p-2  lg:p-20">
            <div className="grid mt-8 px-4 md:scale-100 mx-auto md:ml-auto h-fit md:h-[480px] grid-cols-4 w-screen  md:w-[560px] grid-rows-4 gap-4">
                <Image 
                    src={LeftTop} 
                    alt={"Imagem dividida de homem plantando uma muda no solo"} 
                    className="col-span-3 rounded-2xl row-span-2   object-cover w-full h-full transition duration-300 brightness-90 hover:brightness-110"
                />
                <Image 
                    src={RightTop} 
                    alt={"Imagem dividida de homem plantando uma muda no solo"} 
                    className="col-span-1 rounded-2xl row-span-2  object-cover w-full h-full transition   duration-300 brightness-90 hover:brightness-110"
                />
                <Image 
                    src={LeftBottom} 
                    alt={"Imagem dividida de homem plantando uma muda no solo"} 
                    className="col-span-1 rounded-2xl row-span-2  object-cover w-full h-full transition duration-300 brightness-90 hover:brightness-110"
                />
                <Image 
                    src={RightBottom} 
                    alt={"Imagem dividida de homem plantando uma muda no solo"} 
                    className="col-span-3 rounded-2xl row-span-2  object-cover w-full h-full transition duration-300 brightness-90 hover:brightness-110"
                />
            </div>
            <div className="flex p-4 flex-col mt-0 md:mt-14 gap-4 text-black">
                <h3 className={" text-3xl md:text-4xl font-semibold "+ interFont}>Com nossos parceiros</h3>
                <p className="text-2xl">A <span className="text-baseblue font-bold">Beralde verduras</span> garante uma dedicação constante para que receba os melhores produtos.</p>
                <h3 className={"text-3xl md:text-4xl font-semibold "+ interFont}>Apoiada por <span className="text-baseblue font-bold">décadas</span> de experiência</h3>
                <p className="text-2xl">Desde 2006, fornecemos verduras frescas para empresas em todo o Estado de São Paulo, com mais de 90 anos de tradição no campo.</p>
            </div>
        </div>
    )
}