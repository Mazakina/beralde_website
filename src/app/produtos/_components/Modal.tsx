import { ProductMapper, ProductsProps } from "@/types/types";
import Image from "next/image";
import { CgCloseR } from "react-icons/cg";
import { MdOutlineImageNotSupported } from "react-icons/md";

interface ModalProps{
    product: ProductsProps;
    onClose: () => void;
}

export default function Modal({product, onClose}:ModalProps){

    const {name, description,subTypes,imagePath,available} =  ProductMapper.fromDatabase(product);
    
    return(
        <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-[#00000080] h-screen z-50">
            <div className="bg-white max-w-[720px] h-fit md:max-h-[416px] py-6 w-[90%] md:h-[90%] m-auto rounded-lg">
                <div className="flex items-center justify-between px-8">
                    <h1 className="text-2xl font-semibold  mr-auto text-left">{name} - {subTypes}</h1>
                    <button  className="h-full cursor-pointer"><CgCloseR className="text-4xl"/></button>
                </div>
                <div className="h-[2px]  mt-3 mb-2 transition-all bg-gray-300 w-full "/>
                <div className="grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 h-[80%] py-2 px-8">
                    <div className="col-span-1 row-span-1 w-full flex justify-center items-center h-full min-h-[160px] relative">
                        {imagePath?
                            <Image className="object-contain" src={imagePath} fill alt={""}/>:
                            <MdOutlineImageNotSupported className="text-gray-300 m-auto w-40 h-40"/>
                        }

                    </div>
                    <div className="flex flex-col ml-2 mr-auto items-start justify-around">
                        <span className="text-left" style={{ textAlign: "left" }}>{description}</span>
                        <span style={{ textAlign: "left" }}>Disponibilidade: 
                            <span className={available ? "text-c-green-300" : "text-red-500"}>
                            {available ? "Em estoque!" : "Indisponível."}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}