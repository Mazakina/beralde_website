import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { Url } from "url";

interface GridItemProps {
    src: StaticImageData|string;
    alt: string;
    href: Url|string;
    title: string;
}
export default function GridItem({src, alt="", title, href="./"}:GridItemProps){
    if(typeof src !== "string"){
        src = src.src;
    }
    return (
        <Link href={href} className="z-2 relative col-span-1 group flex items-center justify-center overflow-hidden bg-amber-400">
            <Image alt={alt} src={src}  className="absolute object-cover top-0 left-0" fill/>
            <div className="w-[calc(100%+2px)]  group-hover:top-[100%] transition-all duration-500 absolute top-0 left-0 h-full backdrop-brightness-25 "/>
            <h3 className="font-semibold absolute opacity-100 transition-all duration-500 group-hover:opacity-0 text-2xl">{title.toUpperCase()}</h3>
        </Link>
    )
}