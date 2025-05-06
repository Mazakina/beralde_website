'use client'
import { interFont } from "@/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/public/beralde.png";

export default function MainHeader() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={` grid grid-cols-2 z-30 fixed shadow-2xl mt-3 mx-20 py-4 pl-8 pr-20 rounded-4xl text-baseblue gap-[32px] row-start-2 items-center transition-all duration-300 
                ${isVisible ? "w-[calc(100vw-160px)] bg-white" : "w-[300px] bg-baseblue delay-75 "}
                ${interFont}`}
                onMouseEnter={() => setIsVisible(true)}
                
        >
            <Link
                href={"./"}
                className={`
                text-2xl ml-1 flex justify-center items-center text-nowrap font-semibold text-center text-gray-800 sm:text-left mr-auto
                 ${isVisible ? "text-gray-800" : "text-white "}
                `}
            >
                <Image
                    className="mr-2 -my-3 hover:brightness-110 h-full transition-all duration-200"
                    alt="logo beralde"
                    height={55}
                    width={55}
                    src={logo.src}
                />
                Beralde Verduras
            </Link>
            <div
                className={`flex transition-all duration-200 justify-between ${isVisible ? "opacity-100 delay-150" : "opacity-0 "}`}
            >
                <Link
                    href={"./"}
                    className="
                        ml-4
                        relative text-lg after:absolute after:bottom-0 after:left-0 
                        after:w-0 after:h-1 after:bg-baseblue after:content-[''] 
                        after:transition-all after:duration-300 hover:after:w-full 
                        text-nowrap font-medium text-center sm:text-left
                    "
                >
                    Home
                </Link>
                <Link
                    href={"./produtos"}
                    className="
                        ml-4
                        relative text-lg after:absolute after:bottom-0 after:left-0 
                        after:w-0 after:h-1 after:bg-baseblue after:content-[''] 
                        after:transition-all after:duration-300 hover:after:w-full 
                        text-nowrap font-medium text-center sm:text-left
                    "
                >
                    Produtos
                </Link>
                <Link
                    href={"./sobrenos"}
                    className="
                        ml-4
                        relative text-lg after:absolute after:bottom-0 after:left-0 
                        after:w-0 after:h-1 after:bg-baseblue after:content-[''] 
                        after:transition-all after:duration-300 hover:after:w-full 
                        text-nowrap font-medium text-center sm:text-left
                    "
                >
                    Sobre nós
                </Link>
                <Link
                    href={"https://w.app/beralde"} target="_blank"
                    className="
                        ml-4
                        relative text-lg after:absolute after:bottom-0 after:left-0 
                        after:w-0 after:h-1 after:bg-baseblue after:content-[''] 
                        after:transition-all after:duration-300 hover:after:w-full 
                        text-nowrap font-medium text-center sm:text-left
                    "
                >
                    Vire um cliente
                </Link>
            </div>
        </header>
    );
}

export function MobileHeader() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <header
            className={`fixed top-0 left-0 w-full bg-white shadow-md z-40 flex items-center justify-between px-4 py-3 ${interFont}`}
        >
            <Link href={"./"} className="flex items-center text-lg font-semibold text-gray-800">
                <Image
                    className="mr-2"
                    alt="logo beralde"
                    height={40}
                    width={40}
                    src={logo.src}
                />
                Beralde
            </Link>
            <button
                className="text-gray-800 focus:outline-none"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
            {isDrawerOpen && (
                <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 flex flex-col p-4">
                    <button
                        className="self-end mb-4 text-gray-800 focus:outline-none"
                        onClick={() => setIsDrawerOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <Link href={"./"} className="mb-4 text-lg font-medium text-gray-800">
                        Vire um cliente
                    </Link>
                    <Link href={"./produtos"} className="mb-4 text-lg font-medium text-gray-800">
                        Produtos
                    </Link>
                    <Link href={"./sobrenos"} className="mb-4 text-lg font-medium text-gray-800">
                        Sobre nós
                    </Link>
                </div>
            )}
        </header>
    );
}