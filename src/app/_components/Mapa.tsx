import { MdLocationPin } from "react-icons/md";

export default function Mapa() {
  return (
    <div className="w-full bg-[#ffffff00] flex">
      <div
        className=" 
      h-fit 
      w-fit 
      max-w-4/5
      lg:max-w-fit
      xl:max-w-4/5
      mx-auto
      my-10
      pb-10
      md:pb-0
      rounded-2xl
      bg-[#ffffff]  
      md:h-[28rem] 
      gap-10 
      flex 
      md:flex-row 
      flex-col-reverse 
      justify-center 
      items-center "
      >
        <div className="w-full mt-10 md:p-0  max-w-md aspect-square rounded-3xl overflow-hidden ">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1EKl-ZWqmen4bCmr7APp3v9mN64124jE&ehbc=2E312F&noprof=1"
            className="w-full rounded-2xl h-full border-0  md:-mt-12 "
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="md:max-w-2/5 max-w-4/5 py-7 h-fit md:h-[28rem] flex  flex-col">
          <h2 className="text-4xl flex items-center gap-4 mb-6  font-bold text-baseblue ">
            <MdLocationPin className=" text-4xl" />
            Presença que Alimenta
          </h2>
          <p className="text-black mb-12 text-lg">
            De uma história familiar à distribuição em larga escala, entregamos
            hortaliças frescas para dezenas de cidades.
          </p>
          <div className="text-md mb-6 text-black list-disc  space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="flex  font-bold items-center max-w-full gap-2 text-nowrap text-black">
                Distribuindo em{" "}
              </p>
              <p className="font-bold text-baseblue">
                Toda a Grande São Paulo e litoral:
              </p>
            </div>
            <p className="pt-3">
              São Paulo, Guarulhos, São Caetano do Sul, São Bernardo, Santo
              André, Taboão da Serra, Cubatao , São Vicente, Praia Grande,
              santos , mongagua , itanhaen , suzano , Aruja, POA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
// This component renders a Google Map embedded in an iframe with specific dimensions and styles.
