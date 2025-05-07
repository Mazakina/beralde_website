"use client";

import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { Url } from "url";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface GridItemProps {
    src: StaticImageData | string;
    alt: string;
    href: Url | string;
    title: string;
}

export default function GridItem({ src, alt = "", title, href = "./" }: GridItemProps) {
    if (typeof src !== "string") {
        src = src.src;
    }

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Link
            href={href}
            className="z-2 relative col-span-1 group flex items-center justify-center overflow-hidden bg-amber-400"
        >
            <Image alt={alt} src={src} className="absolute object-cover top-0 left-0" fill />
            <div className="w-[calc(100%+2px)] group-hover:top-[100%] transition-all duration-500 absolute top-0 left-0 h-full backdrop-brightness-25" />
            <motion.h3
                ref={ref}
                className="font-semibold absolute opacity-100 text-2xl"
                initial={{ x: "-100%", opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {title.toUpperCase()}
            </motion.h3>
        </Link>
    );
}