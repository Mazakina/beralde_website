import { ProductsProps } from "@/types/types";
import Image from "next/image";

interface ProductProps {
    product:ProductsProps
    handleProductClick: (product: ProductsProps) => void;
}

export default function Product({product,handleProductClick}: ProductProps) {
    const {name,image_path} = product;
    const image_path2 = image_path? image_path : "";
    return (
        <div 
            onClick={() => {
                handleProductClick(product);
            }}
        className="
            group
            flex w-[200px] h-[240px] overflow-hidden 
            rounded flex-col items-center
            mx-auto 
            cursor-pointer border-2
            border-gray-300 
            hover:border-green-300
            shadow-sm
            transition-all
            duration-300
            hover:shadow-md
            hover:scale-103
            mt-1
            ">
            <Image  alt={name} src={image_path2}  
            className="group-hover:scale-105 object-contain group-hover:brightness-105 transition-all my-auto w-40 h-40" height={160} width={160}/>
            <div className="h-[2px] group-hover:bg-green-300 mt-auto transition-all bg-gray-300 w-4/5 group-hover:w-full px-4"/>
            <h5 className="my-2 group-hover:font-medium max-w-4/5 ">{name}</h5>
        </div>
    )
}