import Image from "next/image";

export default function Process() {
    return (
        <section className="w-full  bg-c-bg h-fit md:h-[560px] flex flex-col relative text-black">
            <Image
                src="/sun.svg"
                alt="Icone de sol"
                className="absolute right-0 top-0 w-64 h-64"
                width={256}
                height={256}
            />
            <Image
                src="/planta.svg"
                alt="Icone de planta"
                className="z-10  absolute left-16 bottom-0 w-21 h-21"
                width={84}
                height={84}
            />
            <h2 className="font-bold z-10 text-black pt-8 text-[40px] w-fit text-nowrap mx-auto my-auto">Nosso Processo</h2>
            <div className="grid mt-10 my-auto grid-cols-1 md:grid-cols-3 pb-12 w-full px-20 relative">
                <div className=" max-w-[350px] relative mx-auto text-center">
                    <img
                        src="/leaf2.svg"
                        alt="Icone de folha"
                        className="w-24 h-24 mx-auto mb-8 "
                    />
                     <img
                        src="/arrow-one.svg"
                        alt="Icone de sol"
                        className="absolute hidden sm:flex left-[80%] top-5  w-[217px] h-[65px]"
                    />
                    <h3 className="font-semibold mb-3 text-2xl">🌱 Cultivo Sustentável </h3>
                    <span>Nossas verduras são cultivadas em solo fértil por agricultores experientes, que acompanham todo o ciclo – do plantio à colheita. Colhidas no  <span className="font-semibold">ponto ideal</span> de maturação, garantindo sabor e frescor.</span>
                </div>
                <div className=" max-w-[350px] relative mt-12 mx-auto text-center">
                    <img
                        src="/colheita.svg"
                        alt="Icone de caminhão de entrega"
                        className="w-24 h-24 mx-auto mb-8 "
                    />
                    <img
                        src="/arrow-two.svg"
                        alt="Icone de sol"
                        className="absolute hidden sm:flex left-[80%] top-0  w-[200px] h-[51px]"
                    />
                    <h3 className="font-semibold  mb-3 text-2xl">🧼 Processo Cuidadoso</h3>
                    <span>Limpas, centrifugadas e sem conservantes, nossas verduras passam por uma seleção rigorosa e são embaladas em materiais biodegradáveis.</span>
                </div>
                <div className=" mt-12 md:mt-0 max-w-[350px] mx-auto text-center">
                    <img
                        src="/shipped2.svg"
                        alt="Icone de caminhão de entrega"
                        className="w-24 h-24 mx-auto mb-8 "
                    />
                    <img
                        src="/arrow-three.svg"
                        alt="Icone de sol"
                        className="absolute hidden sm:flex left-[87%] top-15  w-[143px] h-[290px]"
                    />
                    <h3 className="font-semibold mb-3 text-2xl">Entrega Garantida</h3>
                    <span>Levamos até você verduras frescas de qualidade, com transporte ágil e acompanhamento para garantir o melhor produto. Nossa equipe é treinada para manter altos padrões de qualidade em cada etapa.</span>
                </div>

            </div>
        </section>
    );
}