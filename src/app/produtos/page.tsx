"use client"
import ProductDisplay from "./_components/ProductDisplay";
import { useState } from "react";
import { ProductsProps } from "@/types/types";
import Modal from "./_components/Modal";
import Image from "next/image";
import FullBg from "@/public/full-bg.png";

export default function Produtos(){
    const [selectedProduct, setSelectedProduct] = useState<ProductsProps|null>(null);
    const [isModalOpen, setIsModalOpen] = useState(true);

    function handleProductClick(product:ProductsProps){
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    function closeModal() {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return(
        <section className="flex flex-col relative w-full h-fit mt-24 mb-15
        bg-white border-b-12 border-b-[#62B33F]  text-black">
            <Image 
            className="fixed scale-105  object-cover h-screen w-screen top-0 -left-1 z-3"
            src={FullBg}
            height={800}
            alt="background"
            />


            <div
            className="z-10 relative bg-white w-full flex justify-center items-center text-center"
            >
            <Image
                src="/sun.svg"
                alt="Icone de sol"
                className="absolute right-0 top-0 w-64 h-64"
                width={256}
                height={256}
            />
                <ProductDisplay handleProductClick={handleProductClick}/>
                {isModalOpen && selectedProduct && (
                    <Modal product={selectedProduct} onClose={closeModal} />
                )}
            </div>
        </section>
    )
}