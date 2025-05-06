/* eslint-disable @next/next/no-img-element */
import logo from "@/public/beralde.png";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="
        flex flex-col-reverse 
        z-10 bg-baseblue 
        relative 
        mx-auto  sm:mx-auto my-24 
        rounded-lg min-w-3/5 
        text-white md:flex-row 
        items-center 
        justify-center md:justify-start w-fit ">
            <div className="flex px-2 m-4 mb-8  md:m-15 flex-col mr-auto w-[320px]">
                <h4 className="text-3xl font-bold mb-7">Faça Parte da Nossa História</h4>
                <p className="font-bold text-base mb-4 md:mb-24">Junte-se a nós na missão de fornecer os melhores produtos agrícolas para sua mesa.</p>
                <Link
                href={"https://w.app/beralde"} 
                target="_blank"
                className="
                transition-all duration-200
                p-4 rounded-md 
                cursor-pointer font-bold
                flex items-center justify-center border-2 
                bg-c-mainOrange hover:bg-white
                text-xl
                border-c-mainOrange hover:border-baseblue
                hover:text-baseblue
                "
                ><p>Entre em contato</p></Link>
            </div>
            <div className="md:absolute mt-6 md:mt-0 scale-90 md:scale-100 h-full flex items-center md:-right-25 justify-center">
                <img 
                className="hover:brightness-110 h-full md:scale-120  transition-all duration-200 "
                alt="logo beralde" 
                src={logo.src} 
                />
            </div>
        </div>

    )
}