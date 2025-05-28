"use client";
import Image from "next/image";
import hero from "@/public/hero.jpg";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full flex items-center justify-center h-[90vh] relative">
      <Image
        src={hero}
        alt={""}
        layout="fill"
        className={`object-cover transition-all duration-700 absolute w-full ${
          isHovered ? "brightness-90" : "brightness-50"
        } `}
        style={{ objectPosition: "center 50%" }}
      />
      <motion.div className="z-10 relative max-w-4/5">
        <motion.h1
          className={`z-10 text-4xl text-white sm:text-5xl md:text-6xl mb-8`}
          initial={{ opacity: 0, bottom: "-100px", position: "relative" }}
          animate={{ opacity: 1, bottom: "0px", position: "relative" }}
          transition={{ opacity: { duration: 0.5 }, bottom: { duration: 0.5 } }}
        >
          As <span className="font-bold">Melhores verduras</span> para seu
          negócio
        </motion.h1>
        <motion.p
          className={`mb-4 text-white text-lg sm:text-xl md:text-2xl`}
          initial={{ opacity: 0, bottom: "-100px", position: "relative" }}
          animate={{ opacity: 1, bottom: "0px", position: "relative" }}
          transition={{ opacity: { duration: 0.6 }, bottom: { duration: 0.6 } }}
        >
          Distribuímos as melhores hortaliças da região, do campo direto para
          você!
        </motion.p>
        <motion.p
          className={`text-lg text-white sm:text-xl md:mb-18 mb-12 md:text-2xl`}
          initial={{ opacity: 0, bottom: "-100px", position: "relative" }}
          animate={{ opacity: 1, bottom: "0px", position: "relative" }}
          transition={{ opacity: { duration: 0.7 }, bottom: { duration: 0.7 } }}
        >
          Trabalhamos com o mesmo cuidado que dedicamos à nossa própria mesa.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, left: "-100px", position: "relative" }}
          animate={{ opacity: 1, left: "0px", position: "relative" }}
          transition={{ opacity: { duration: 0.8 }, left: { duration: 0.8 } }}
        >
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=5511941113536&text=Ol%C3%A1%21+tenho+interesse+em+conhecer+melhor+as+op%C3%A7%C3%B5es+de+verduras+da+sua+distribuidora.+Poderia+me+ajudar%3F+&type=phone_number&app_absent=0"
            }
            target="_blank"
            onClick={() => setIsHovered(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="
                        mb-4
                        text-white hover:text-c-orange-500 
                        bg-c-orange-500 hover:bg-white  
                        text-2xl font-bold p-4 rounded  
                        transition-all cursor-pointer"
          >
            Contate-nos
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
