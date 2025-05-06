import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import logo from "@/public/beralde.png";
import Image from "next/image";

export default function Footer() {
    return(
        <footer className="flex  flex-col relative w-fit py-4 px-4 pb-14 z-10  bg-transparent min-w-[92vw] mx-auto text-black ">
            <div className="grid  items-center w-full  my-8 grid-cols-[1fr_240px_1fr]">
                <div className="col-span-1 h-[1px] ml-4 border-b border-b-gray-500 "/>
                <h4 className="col-span-1 mx-auto text-baseblue font-semibold text-2xl">Beralde Verduras</h4>
                <div className="col-span-1 h-[1px] mr-4 border-b border-b-gray-500 "/>
            </div>
            <div className="md:grid flex flex-col-reverse gap-4 w-full md:grid-cols-[1fr_200px_1fr]">
                <div className="flex flex-col mx-auto gap-2">
                    <h4 className="text-baseblue text-2xl font-bold">Entre em Contato</h4>
                    <p className="group flex items-center"><IoMdMail className="mr-2"/>Beraldeverduras@beralde.com.br</p>
                    <p className="group flex items-center"><FaPhone className="mr-2"/>(11) 94111-3536</p>
                    <p className="group flex items-center"><FaPhone className=" mr-2"/>(11) 96080-7100</p>
                    <Link 
                    href={"https://w.app/beralde"} 
                    target="_blank" 
                    className="py-2 px-6 mt-6 
                    font-bold text-white 
                    rounded-md w-fit 
                    border-2 border-c-green-300
                    transition-all duration-200
                    hover:bg-white
                    hover:text-c-green-300
                    bg-c-green-300"
                    >
                        What`s app
                    </Link>
                </div>
                <div className="flex flex-col  items-center justify-center mx-auto">
                    <Image 
                    className="hover:brightness-110 transition-all duration-200 hover:scale-105"
                    alt="logo beralde" 
                    src={logo.src} 
                    height={170} 
                    width={170}/>
                </div>
                <div className=" hidden md:flex flex-col mr-auto ml-16 gap-2">
                    <h4 className="text-baseblue text-2xl font-bold">Menu</h4>
                    <Link 
                        href="./" 
                        className="transition-all duration-200 hover:pl-3"
                    >
                        Home
                    </Link>
                    <Link 
                        href="./produtos"
                        className="transition-all duration-200 hover:pl-3"
                    >
                        Produtos
                    </Link>
                    <Link 
                        href="./sobrenos"
                        className="transition-all duration-200 hover:pl-3"
                    >
                        Sobre Nós
                    </Link>
                    <Link 
                        href="https://w.app/beralde"
                        target="_blank"
                        className="transition-all duration-200 hover:pl-3"
                    >
                        Contato
                    </Link>
                </div>
            </div>
            <div className="flex-1 mb-4 mt-16 mx-4 h-[1px] border-b border-b-gray-500  "/>
        </footer>
    )
}
