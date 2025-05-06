"use client";
import Image from "next/image";
import PartnerOne from "@/public/parceiros/01.png";
import PartnerTwo from "@/public/parceiros/02.png";
import PartnerThree from "@/public/parceiros/03.png";
import PartnerFour from "@/public/parceiros/04.png";   
import { useState } from "react";

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
                <h2 className="px-6 text-5xl my-8 text-center">Você está em boa companhia!</h2>
                <span className="text-4xl px-4 text-center font-light max-w-[960px]">
                Parceiros em todo o estado confiam na Beralde para levar frescor e eficiência aos seus negócios.
                </span>
                <div className="md:flex px-4 lg:mx-auto md:flex-row grid grid-cols-2 gap-8 my-15 pb-10 justify-between">
                    {[PartnerOne, PartnerTwo, PartnerThree, PartnerFour].map((partner, index) => (
                        <Image
                            key={index}
                            src={partner.src}
                            alt={`Partner ${index + 1}`}
                            width={240}
                            height={166}
                            className="transition-transform duration-300 hover:scale-120 cursor-pointer"
                            onClick={() => openModal(partner.src)}
                        />
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
                                width={480}
                                height={332}
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