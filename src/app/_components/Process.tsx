"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Process() {
    return (
        <section className="w-full  bg-c-bg h-fit md:h-[560px] flex flex-col relative text-black">
            <Image
                src="/sun.svg"
                alt="Icone de sol"
                className="absolute right-0 top-0 w-64 h-64"
                width={256}
                height={256}
            />
            <Image
                src="/planta.svg"
                alt="Icone de planta"
                className="z-10  absolute left-16 bottom-0 w-21 h-21"
                width={84}
                height={84}
            />
            <h2 className="font-bold z-10 text-black pt-8 text-[40px] w-fit text-nowrap mx-auto my-auto">Nosso Processo</h2>
            <motion.div
                className="grid mt-10 my-auto grid-cols-1 md:grid-cols-3 pb-20 w-full px-20 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.5,
                        },
                    },
                }}
            >
                <motion.div className=" max-w-[350px] relative mx-auto text-center">
                    <motion.img
                        src="/leaf2.svg"
                        alt="Icone de uma folha"
                        className="w-24 h-24 mx-auto mb-8"
                        initial={{opacity: 0, scale: 0.3 }}
                        whileInView={{opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay:0.3 }}
                        viewport={{ once: true }}
                    />
                     <img
                        src="/arrow-one.svg"
                        alt="Icone de sol"
                        className="absolute hidden lg:flex left-[80%] top-5  w-[217px] h-[65px]"
                    />
                   <motion.h3
                        className="font-semibold mb-3 text-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay:0.5 }}
                        viewport={{ once: true }}
                    >🌱 Cultivo Sustentável </motion.h3>
                    <motion.span
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ duration: 0.8, delay:0.5 }}
                       viewport={{ once: true }}
                    >Nossas verduras são cultivadas em solo fértil por agricultores experientes, que acompanham todo o ciclo – do plantio à colheita. Colhidas no  <span className="font-semibold">ponto ideal</span> de maturação, garantindo sabor e frescor.</motion.span>
                </motion.div>
                <motion.div className=" max-w-[350px] relative mt-12 mx-auto text-center">
                    <motion.img
                        src="/colheita.svg"
                        alt="Icone de colheita"
                        className="w-24 h-24 mx-auto mb-8"
                        initial={{opacity: 0, scale: 0.3 }}
                        whileInView={{opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay:0.3 }}
                        viewport={{ once: true }}
                    />
                    <img
                        src="/arrow-two.svg"
                        alt="Icone de sol"
                        className="absolute hidden lg:flex left-[80%] top-0  w-[200px] h-[51px]"
                    />
                    <motion.h3
                        className="font-semibold mb-3 text-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay:0.5 }}
                        viewport={{ once: true }}
                    >
                        🧼 Processo Cuidadoso
                    </motion.h3>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay:0.5 }}
                        viewport={{ once: true }}
                    >
                        Limpas, centrifugadas e sem conservantes, nossas verduras passam por uma seleção rigorosa e são embaladas em materiais biodegradáveis.
                    </motion.span>
                </motion.div>
                <motion.div className="mt-12 md:mt-0 max-w-[350px] mx-auto text-center">
                    <motion.img
                        src="/shipped2.svg"
                        alt="Icone de caminhão de entrega"
                        className="w-24 h-24 mx-auto mb-8"
                        initial={{opacity: 0, scale: 0.3 }}
                        whileInView={{opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay:0.3 }}
                        viewport={{ once: true }}
                    />
                    <img
                        src="/arrow-three.svg"
                        alt="Icone de sol"
                        className="absolute hidden lg:flex left-[87%] top-15  w-[143px] h-[290px]"
                    />
                    <motion.h3
                        className="font-semibold mb-3 text-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay:0.5 }}
                        viewport={{ once: true }}
                    >
                        Entrega Garantida
                    </motion.h3>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay:0.5 }}
                        viewport={{ once: true }}
                    >
                        Levamos até você verduras frescas de qualidade, com transporte ágil e acompanhamento para garantir o melhor produto. Nossa equipe é treinada para manter altos padrões de qualidade em cada etapa.
                    </motion.span>
                </motion.div>

            </motion.div>
        </section>
    );
}