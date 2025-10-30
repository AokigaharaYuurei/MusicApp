import Image from "next/image";
import { Title } from "../shared/ui";
import turtle from "../public/turtle.svg";

export const AllVillians = () =>{
    return(
        <div>
            <div className="px-11 py-25"><Title children="Все злодеи"/></div>
            <div className="grid grid-cols-3 gap-3 gap-x-30 mt-7 px-15 my-10">
                <Image src={turtle} alt="черепашки"/>
                <Image src={turtle} alt="черепашки"/>
                <Image src={turtle} alt="черепашки"/>
                <Image src={turtle} alt="черепашки"/>
                <Image src={turtle} alt="черепашки"/>
                <Image src={turtle} alt="черепашки"/>
            </div>
        </div>
    )
}