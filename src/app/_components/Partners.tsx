"use client";
import Image from "next/image";
import PartnerOne from "@/public/parceiros/01.png";
import PartnerTwo from "@/public/parceiros/02.png";
import PartnerThree from "@/public/parceiros/03.png";
import PartnerFour from "@/public/parceiros/04.png";   
import { useState } from "react";
import { motion } from "framer-motion";

    export default function Partners() {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedImage, setSelectedImage] = useState<string | null>(null);

        const openModal = (imageSrc: string) => {
            setSelectedImage(imageSrc);
            setIsModalOpen(true);
        };

        const closeModal = () => {
            setSelectedImage(null);
            setIsModalOpen(false);
        };

        return (
            <div className="flex bg-white text-black flex-col items-center justify-center w-full ">
                <motion.h2 
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="px-6 text-5xl my-8 text-center">Você está em boa companhia!</motion.h2>
                <motion.span 
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl px-4 text-center font-light max-w-[960px]">
                Parceiros em todo o estado confiam na Beralde para levar frescor e eficiência aos seus negócios.
                </motion.span>
                <div className="md:grid md:grid-cols-2 grid grid-cols-2 gap-4 mx-4  my-15 pb-10 justify-between">
                    {[PartnerOne, PartnerTwo, PartnerThree, PartnerFour].map((partner, index) => (
                        <div 
                            key={index} 
                            className="relative overflow-hidden rounded-md cursor-pointer"
                            onClick={() => openModal(partner.src)}
                        >
                            <Image
                                src={partner.src}
                                alt={`Partner ${index + 1}`}
                                height={400}
                                width={900}
                                className="transition-all duration-300 h-70 hover:scale-105 object-cover "
                            />
                        </div>
                    ))}
                </div>

                {isModalOpen && selectedImage && (
                    <div 
                    onClick={closeModal}
                    className="fixed px-4 cursor-pointer inset-0 bg-[#0005] bg-opacity-50 flex items-center justify-center z-50">
                        <div className="relative border-6 bg-white border-white rounded-lg overflow-hidden">
                            <Image
                                src={selectedImage}
                                alt="Selected Partner"
                                width={720}
                                height={498}
                                className="rounded-lg"
                            />
                            <button
                                onClick={closeModal}
                                className="absolute font-bolds top-2 right-2 bg-white text-black rounded-[50%] h-9 w-9 p-2"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
}