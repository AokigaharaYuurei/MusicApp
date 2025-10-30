'use client'

import Image from "next/image";
import turtle from "../public/turtle.svg";
import { Title } from "../shared/ui";
import { Button } from "../shared/ui";
import { useState } from "react";

const positive = {title:"Выбрать"};
const negative = {title:"Выбрано"};

export const BeTurtle2 = () => {
     const[buton, setButton] = useState(positive);
    return(
        <div className="py-4 px-9">
            <div className="flex justify-between bg-[#111111] rounded-[20px] px-11 items-center">
            <div>
                <span className="text-[#51BA55] font-[Inter] text-[64px] font-bold">Шаг 2</span>
                <p className="text-[#C0C0C0] font-[Inter] font-light text-[40px]">Выбери оружие</p>
                <div>
                <div className="py-12"><Button children={buton.title} func={() => setButton(buton === positive ? negative : positive)}/></div>
            </div>
            </div>
            <div>
                <Image src={turtle} alt="черепашки" className="rounded-4xl w-[370px] py-10"/>
            </div>
            
        </div>
        </div>
        
    )
}