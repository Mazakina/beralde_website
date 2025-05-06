"use client";

import { useState, useEffect, Suspense } from "react";
import Product from "./Product";
import { ProductsProps } from "@/types/types";
import { IoIosSearch } from "react-icons/io";
import { useSearchParams } from "next/navigation";

export function useInitialFilter() {
    const searchParams = useSearchParams();
    const initialFilter = searchParams.get("type") || "";
    return initialFilter.toLowerCase();
}

interface ProductDisplayProps {
    handleProductClick: (product: ProductsProps) => void;
}

function ProductDisplayContent({ handleProductClick }: ProductDisplayProps) {
    const [data, setData] = useState<ProductsProps[]>();
    const [error, setError] = useState<string | null>(null);
    const [type, setType] = useState<string>(useInitialFilter());
    const [filter, setFilter] = useState<string>("");

    const handleRadioClick = (value: string) => {
        if (type === value) {
            setType("any"); // Reset to "any" if the same radio is clicked
        } else {
            setType(value); // Set the new type
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/fetchSupabaseData"); // Correct API route
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                setData(result);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
                console.log(error);
            }
        };

        fetchData();
    }, []);

    if (typeof handleProductClick !== "function") {
        return null;
    }

    return (
        <div className="relative w-[95%] min-h-screen lg:w-[90%] border-none xl:w-4/5 mx-auto mb-auto pb-16 justify-center flex flex-col items-center">
            <h2 className="font-bold text-4xl mb-10 mt-14">Nossos Produtos</h2>

            <section
                id="filter"
                className="w-full md:flex bg-white border border-gray-300 rounded-md p-4 shadow-md"
            >
                <div className="mb-4 md:mb-2 mr-4 flex flex-1 items-center border border-gray-400 rounded focus-within:border-green-400">
                    <input
                        type="text"
                        placeholder="Pesquisar"
                        className="pl-2 pr-2 py-[1px] outline-none w-full"
                        onChange={(e) => {
                            setFilter(() => e.target.value.toLowerCase());
                        }}
                    />
                    <IoIosSearch className="text-gray-500 mr-2" />
                </div>
                <div className="flex flex-wrap gap-2">
                    {[
                        { id: "convencionais", label: "Convencionais" },
                        { id: "temperos", label: "Temperos" },
                        { id: "hidroponicos", label: "Hidropônicos" },
                        { id: "pre_higienizados", label: "Pre Higienizados" },
                    ].map(({ id, label }) => (
                        <div key={id} className="h-7">
                            <input
                                type="radio"
                                name="type"
                                id={id}
                                className="hidden peer"
                                checked={type === id}
                                readOnly
                                onClick={() => handleRadioClick(id)}
                            />
                            <label
                                htmlFor={id}
                                className="cursor-pointer text-xs px-4 py-[5px]
                                text-gray-500 border-gray-500 
                                rounded bg-transparent border 
                                hover:text-green-400 hover:border-green-400 
                                peer-checked:bg-green-400 peer-checked:text-white peer-checked:border-green-400
                                peer-checked:hover:border-green-400 peer-checked:hover:text-white select-none"
                            >
                                {label}
                            </label>
                        </div>
                    ))}
                </div>
            </section>
            <section
                className="w-full grid sm:grid-cols-2 md:grid-cols-3 my-auto mb-auto mt-6 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-10 pb-12 overflow-y-auto"
                onScroll={(e) => {
                    const target = e.target as HTMLDivElement;
                    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
                        console.log("Reached the end, load more products");
                    }
                }}
            >
                {data
                    ?.sort((a, b) => a.name.localeCompare(b.name))
                    .map(
                        (product: ProductsProps) =>
                            ((type === "any" &&
                                product.name.toLowerCase().includes(filter)) ||
                                (product.type === type &&
                                    product.name.toLowerCase().includes(filter))) && (
                                <Product
                                    product={product}
                                    handleProductClick={handleProductClick}
                                    key={product.id}
                                    {...product}
                                />
                            )
                    )}
            </section>
        </div>
    );
}

export default function ProductDisplay(props: ProductDisplayProps) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductDisplayContent {...props} />
        </Suspense>
    );
}
