"use client"
import { ProductsProps } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdOutlineImageNotSupported } from "react-icons/md";
interface ProductProps {
    product:ProductsProps
    handleProductClick: (product: ProductsProps) => void;
}

export default function Product({product,handleProductClick}: ProductProps) {
    const {name,image_path} = product;
    const image_path2 = image_path? image_path : "";
    return (
        <motion.div 
            onClick={() => {
                handleProductClick(product);
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.05, }}
        className="
            group
            flex sm:w-[270px] md:w-[280px] w-[100%] md:h-[360px] sm:h-[240px] overflow-hidden 
            max-w-[380px]
            rounded flex-col items-center
            mx-auto 
            cursor-pointer border-2
            bg-[#fffffff5]
            border-gray-300 
            hover:border-green-300
            shadow-sm

            mt-1
            ">
            {
            image_path && (
                <Image  alt={name} src={`${image_path2}?v=${process.env.NEXT_PUBLIC_IMAGE_VERSION}`}  
                className="
                group-hover:scale-105 
                object-contain 
                group-hover:brightness-105 
                transition-all 
                my-auto 
                w-[80%] h-[80%] 
                max-w-[270px] 
                min-w-40 min-h-40 
                sm:w-50 sm:h-50
                md:w-70 md:h-70" 
                height={160} width={160}/>
                )
            }
            {
                !image_path && (
                    <MdOutlineImageNotSupported className="text-gray-300 m-auto w-40 h-40"/>
                )
            }
            <div className="h-[2px] group-hover:bg-green-300 mt-auto transition-all bg-gray-300 w-4/5 group-hover:w-full px-4"/>
            <h5 className="my-2 group-hover:font-medium max-w-4/5 ">{name}</h5>
        </motion.div>
    )
}