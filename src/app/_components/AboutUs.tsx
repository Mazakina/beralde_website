"use client"

import { interFont } from "@/ui/fonts";
import LeftTop from "@/public/square/LT.png";
import LeftBottom from "@/public/square/LB.png";
import RightTop from "@/public/square/RT.png";
import RightBottom from "@/public/square/RB.png";
import { MotionImage } from "@/lib/MotionNextComponents";
import { motion } from "framer-motion";

export default function AboutUs() {
    return(
        <div className="md:w-fit w-full bg-white flex flex-col lg:grid  lg:grid-rows-1 lg:grid-cols-2 h-fit p-2  lg:py-20 lg:px-10">
            <motion.div 
                className="grid mt-8 pl-2 pr-8  mx-auto md:ml-auto h-fit md:h-[480px] grid-cols-4 w-screen  md:w-[560px] grid-rows-4 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                <MotionImage 
                    variants={{
                        hidden: { opacity: 0, scale: 0.6 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.5, ease: "backIn" }}
                    src={LeftTop} 
                    alt={"Imagem dividida de homem plantando uma muda no solo"} 
                    className="col-span-3 rounded-2xl row-span-2   object-cover w-full h-full transition duration-300 brightness-90 hover:brightness-110"
                />
                <MotionImage 
                    variants={{
                        hidden: { opacity: 0, scale: 0.6 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.5, ease: "backIn" }}
                    src={RightTop} 
                    alt={"Imagem dividida de homem plantando uma muda no solo"} 
                    className="col-span-1 rounded-2xl row-span-2  object-cover w-full h-full transition   duration-300 brightness-90 hover:brightness-110"
                />
                <MotionImage                    
                    variants={{
                        hidden: { opacity: 0, scale: 0.6 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.5, ease: "backIn" }}
                    src={LeftBottom} 
                    alt={"Imagem dividida de homem plantando uma muda no solo"} 
                    className="col-span-1 rounded-2xl row-span-2  object-cover w-full h-full transition duration-300 brightness-90 hover:brightness-110"
                />
                <MotionImage 
                    variants={{
                        hidden: { opacity: 0, scale: 0.6 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.5, ease: "backIn" }}
                    src={RightBottom} 
                    alt={"Imagem dividida de homem plantando uma muda no solo"} 
                    className="col-span-3 rounded-2xl row-span-2  object-cover w-full h-full transition duration-300 brightness-90 hover:brightness-110"
                />
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, },
                    visible: { opacity: 1,  },
                }}
                transition={{ duration: 0.5 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex p-4 flex-col mt-0 md:mt-14 gap-4 text-black">
                <motion.h3 
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={" text-3xl md:text-4xl font-semibold "+ interFont}>Com nossos parceiros</motion.h3>
                <p className="text-2xl">A <span className="text-baseblue font-bold">Beralde verduras</span> garante uma dedicação constante para que receba os melhores produtos.<br/><br /> Direto de Ibiúna - uma das regiões agrícolas mais respeitadas de São Paulo.</p>
                <motion.h3 
                variants={{
                    hidden: { opacity: 0, x: -100, },
                    visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={"text-3xl md:text-4xl font-semibold "+ interFont}>Apoiada por <span className="text-baseblue font-bold">décadas</span> de experiência</motion.h3>
                <p className="text-2xl">Desde 2006, fornecemos verduras frescas para empresas na Grande São Paulo, com mais de 15 anos de tradição no campo.</p>
            </motion.div>
        </div>
    )
}