import GridItem from "./GridItem";
import temperos from "@/public/grid/temperos.png";
import alface from "@/public/grid/Alface.png";
import couve from "@/public/grid/Couve.png";
import tomate from "@/public/grid/Tomate.jpeg";
import beralde from "@/public/grid/beralde.png";
import outros from "@/public/grid/outros.png";
import Link from "next/link";
import Image from "next/image";
export default function ProductGrid(){
    return (
        <div className="grid w-full gap-0 h-[760px] md:grid-rows-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-[1fr]">
            <GridItem alt={""} href={"./produtos?type=convencionais"} src={couve.src} title={"Convencionais"} />
            <GridItem alt={""} href={"./produtos?type=temperos"} src={temperos.src} title={"Temperos"} />
            <GridItem alt={""} href={"./produtos?type=hidroponicos"} src={alface.src} title={"Hidropônicos"} />
            <GridItem alt={""} href={"./produtos?type=pre_higienizados"} src={tomate.src} title={"Pre higienizados"} />
            <GridItem alt={""} href={"./produtos"} src={outros.src} title={"Outros"} />
            <Link href={"./produtos"} className="z-2 relative brightness-90 hover:brightness-100 group col-span-1 group flex items-center justify-center overflow-hidden bg-amber-400">
                <Image alt={"logo da beralde"} src={beralde}  className="absolute object-cover top-0 group-hover:scale-107 transition-all duration-500 left-0" fill/>
            </Link>
        </div>
    )
}