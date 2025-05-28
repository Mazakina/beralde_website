"use client";

import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Url } from "url";
import { motion } from "framer-motion";
import { useState } from "react";
import { MotionLink } from "@/lib/MotionNextComponents";

interface GridItemProps {
  src: StaticImageData | string;
  alt: string;
  href: Url | string;
  title: string;
}

export default function GridItem({
  src,
  alt = "",
  title,
  href = "./",
}: GridItemProps) {
  if (typeof src !== "string") {
    src = src.src;
  }

  const [isHovering, setIsHovering] = useState(false);

  const overlayVariants = {
    hidden: { top: "0%" },
    visible: { top: "100%" },
  };

  const titleVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <MotionLink
      href={href}
      className="z-2 text-white relative col-span-1 group flex items-center justify-center overflow-hidden bg-amber-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image
        alt={alt}
        src={src}
        className="absolute object-cover top-0 left-0"
        fill
      />
      <motion.div
        id="overlay"
        className="w-[calc(100%+2px)] absolute top-0 left-0 h-full backdrop-brightness-25"
        variants={overlayVariants}
        initial="hidden"
        animate={isHovering ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      <motion.h3
        className="font-semibold absolute opacity-100 text-2xl"
        variants={titleVariants}
        animate={isHovering ? "hidden" : "visible"}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {title.toUpperCase()}
      </motion.h3>
    </MotionLink>
  );
}
