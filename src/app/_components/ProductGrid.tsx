import GridItem from "./GridItem";
import temperos from "@/public/grid/temperos.png";
import alface from "@/public/grid/Alface.png";
import couve from "@/public/grid/Couve.png";
import tomate from "@/public/grid/Tomate.jpeg";
import beralde from "@/public/beralde.png";
import outros from "@/public/grid/outros.png";

export default function ProductGrid(){
    return (
        <div className="grid w-full gap-0 h-[760px] md:grid-rows-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-[1fr]">
            <GridItem alt={""} href={"./produtos"} src={couve.src} title={"Convencionais"} />
            <GridItem alt={""} href={"./produtos"} src={temperos.src} title={"Temperos"} />
            <GridItem alt={""} href={"./produtos"} src={beralde.src} title={"Nossos Produtos"} />
            <GridItem alt={""} href={"./produtos"} src={alface.src} title={"Hidropônicos"} />
            <GridItem alt={""} href={"./produtos"} src={tomate.src} title={"Pre higienizados"} />
            <GridItem alt={""} href={"./produtos"} src={outros.src} title={"Outros"} />
        </div>
    )
}