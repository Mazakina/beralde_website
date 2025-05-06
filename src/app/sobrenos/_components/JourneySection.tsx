import { BiLeaf } from "react-icons/bi";
import JourneyPoint from "./JourneyPoint";
import { RiMedalLine } from "react-icons/ri";

export default function JourneySection() {
  return(
    <section className="w-full flex flex-col text-[#14532D]  items-center justify-center">
                <h3 className="font-bold text-5xl mt-14">Nossa Jornada</h3>
                <ul className="max-w-[1120px] my-12 flex flex-col">
                    <JourneyPoint 
                        title={"2006 - O Inicio"} 
                        description={"Com o crescimento da demanda, expandimos nossas operações para incluir uma frota de distribuição, permitindo-nos atender a uma área maior e mais clientes."} >
                        <BiLeaf/>
                    </JourneyPoint>
                    <JourneyPoint 
                        title={"2006 - O Inicio"} 
                        description={"Com o crescimento da demanda, expandimos nossas operações para incluir uma frota de distribuição, permitindo-nos atender a uma área maior e mais clientes."} >
                        <BiLeaf/>
                    </JourneyPoint>
                    <JourneyPoint 
                        title={"2006 - O Inicio"} 
                        description={"Com o crescimento da demanda, expandimos nossas operações para incluir uma frota de distribuição, permitindo-nos atender a uma área maior e mais clientes."} >
                        <BiLeaf/>
                    </JourneyPoint>
                    <JourneyPoint 
                        title={"2006 - O Inicio"} 
                        description={"Com o crescimento da demanda, expandimos nossas operações para incluir uma frota de distribuição, permitindo-nos atender a uma área maior e mais clientes."} 
                        last={true}>
                        <RiMedalLine/>
                    </JourneyPoint>
                </ul>
            </section>
  )
}