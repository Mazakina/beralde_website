import Image from "next/image";
import { RiMedalLine,RiLeafLine } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import historia from "@/public/historia.png";
import FullBg from "@/public/full-bg.png";
import Contact from "../_components/Contact";
import Footer from "@/components/Footer";

export default function AboutUs() {
    return(
        <div className="relative w-full flex flex-col items-center h-fit justify-center bg-white text-black">
            <Image 
            className="fixed scale-105 h-screen object-cover w-screen top-0 -left-1 z-3"
            src={FullBg}
            height={800}
            alt="background"
            />
            <div className=" z-10 h-[112px] w-full bg-white"/>
            <section className=" z-10 w-full relative h-[376px] flex flex-col items-center justify-center">
                <Image src={historia} alt="Imagem de fundo da sede da Beralde verduras" layout="fill"  className="absolute object-cover" />
                <h2 className="z-20 text-4xl md:text-5xl mb-8 text-white">Nossa História</h2>
                <span className="z-20 mx-4 text-center text-2xl md:text-4xl font-medium text-white">Cultivando qualidade e confiança desde 1999</span>
            </section>
            <div className=" z-10 h-[50px] w-full bg-white"/>
            {/* <JourneySection/> */}
            <section className=" my-10 z-10 flex flex-col items-center bg-[#dcfce7a3] h-fit md:h-[404px] w-full">
                <h3 className="font-bold text-4xl mt-8  text-[#14532D]">Nossos Valores</h3>
                <div className="flex p-4 flex-col md:flex-row w-full my-auto gap-4 items-center justify-around"> 
                    <div className="flex w-[315px] gap-2 flex-col items-center rounded-2xl p-5 text-[#14532D] bg-white">
                        <RiMedalLine className="w-11 h-11 text-[#389636]"/> 
                        <h5 className="text-center text-base font-medium">Qualidade</h5>
                        <span className="text-center text-sm">Comprometidos com os mais altos padrões em todos os nossos produtos.</span>
                    </div>
                    <div className="flex w-[315px] gap-2 flex-col items-center rounded-2xl p-5 text-[#14532D] bg-white">
                        <RiLeafLine className="w-11 h-11 text-[#389636]"/> 
                        <h5 className="text-center text-base font-medium">Sustentabilidade</h5>
                        <span className="text-center text-sm">Priorizamos práticas agrícolas que protegem o meio ambiente.</span>
                    </div>
                    <div className="flex w-[315px] gap-2 flex-col items-center rounded-2xl p-5 text-[#14532D] bg-white">
                        <FaPeopleGroup className="w-11 h-11 text-[#389636]"/> 
                        <h5 className="text-center text-base font-medium">Comunidade</h5>
                        <span className="text-center text-sm">Apoiamos nossos agricultores locais e as comunidades que servimos.</span>
                    </div>
                </div>
            </section>
            <div className="w-full relative bg-white z-10">
                <div 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[92vw] h-[73%] bg-[#00ff7325] z-0"
                />
                <Contact/>
                <Footer/>
                
            </div>
        </div>
    )
}