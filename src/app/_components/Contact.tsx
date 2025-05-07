/* eslint-disable @next/next/no-img-element */
"use client";
import { MotionLink } from "@/lib/MotionNextComponents";
import logo from "@/public/beralde.png";
import { motion } from "framer-motion";

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
            <div className="flex px-2 m-4 mb-8 md:m-15 flex-col mr-auto w-[320px]">
                <motion.h4
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{delay:0.4, duration: 0.8 }}
                    className="text-3xl font-bold mb-7"
                >
                    Faça Parte da Nossa História
                </motion.h4>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{delay:0.4, duration: 0.8 }}
                    className="font-bold text-base mb-4 md:mb-24"
                >
                    Junte-se a nós na missão de fornecer os melhores produtos agrícolas para sua mesa.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 300, damping: 20 }}
                    whileHover={{ scale: 1.1, }} 
                    whileTap={{ scale: 0.9 }}   
                >
                    <MotionLink
                        href={"https://w.app/beralde"}
                        target="_blank"
                        className="
                        p-4 rounded-md 
                        cursor-pointer font-bold
                        flex items-center justify-center border-2 
                        bg-c-mainOrange hover:bg-white
                        text-xl
                        border-c-mainOrange hover:border-baseblue
                        hover:text-baseblue
                        "
                    >
                        <p>Entre em contato</p>
                    </MotionLink>
                </motion.div>
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