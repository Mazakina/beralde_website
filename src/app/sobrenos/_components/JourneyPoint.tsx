import React from "react";
import Dashed from "./Dashed";

interface JourneyPointProps {
    children: React.ReactElement<{ className?: string }>;
    title: string;
    description: string;
    last?: boolean;
}

export default function JourneyPoint({children,description,title, last}: JourneyPointProps) {
    return (
        <>
            <li className="flex">
                <div className="w-fit my-auto mr-4 h-fit flex flex-col p-4 rounded-full items-center bg-[#10ec6859]">
                    {React.cloneElement(children, { className: "w-11 h-11 text-[#389636]" })}
                </div>
                <div className="flex flex-col justify-between">
                    <h4 className="font-medium text-2xl">{title}</h4>
                    <p className="text-lg">{description}</p>              
                </div>
            </li>
            {last ? null : <Dashed />}
        </>
    )
}