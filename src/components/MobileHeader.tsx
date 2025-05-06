'use client'
import { interFont } from "@/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/beralde.png";
import { useState } from "react";
import { motion } from "framer-motion";

export function MobileHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerVariants = {
    open: { x: 0, transition: { type: "tween", duration: 0.3 } },
    closed: { x: "100%", transition: { type: "tween", duration: 0.3 } },
  };
  return (
      <header
          className={`
             flex fixed top-0 left-0 w-full bg-white shadow-md z-40 items-center justify-between px-4 py-3 ${interFont}`}
      >
          <Link href={"./"} className="flex items-center text-2xl font-semibold text-gray-800">
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
          <motion.div
              className="fixed top-[56px] right-0 w-full h-[calc(100%-56px)] bg-white shadow-lg z-50 flex flex-col p-4"
              initial="closed"
              animate={isDrawerOpen ? "open" : "closed"}
              variants={drawerVariants}
          >
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
              <Link
                  onClick={() => setIsDrawerOpen(false)}
                  href={"./"} className="mb-4 text-lg font-medium text-gray-800">
                  Home
              </Link>
              <Link 
                  onClick={() => setIsDrawerOpen(false)}
                  href={"https://w.app/beralde"} target="_blank"  className="mb-4 text-lg font-medium text-gray-800">
                  Vire um cliente
              </Link>
              <Link
                  onClick={() => setIsDrawerOpen(false)}
                  href={"./produtos"} className="mb-4 text-lg font-medium text-gray-800">
                  Produtos
              </Link>
              <Link 
                  onClick={() => setIsDrawerOpen(false)}
                  href={"./sobrenos"} className="mb-4 text-lg font-medium text-gray-800">
                  Sobre nós
              </Link>
             
          </motion.div>
      </header>
  );
}