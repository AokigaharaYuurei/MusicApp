import Image from "next/image";
import pick from '../public/music.svg';
import like from '../public/heart.svg';
import { Title } from "../shared/ui";
import { Artist } from "../shared/ui";
import { Duration } from "../shared/ui";
import { Cover } from "../shared/ui";

export const Song = () =>{
    return(
        <div className="">
            <div className="bg-[#F1F1F1] rounded-[10px] flex justify-between items-center py-2.5 px-4 w-full">
                <div className="flex gap-3 w-full">
                    <Cover src={pick}/>
                    <div>
                        <div><Title children="I am music"/></div>
                        <div><Artist children="PlayBoi Carti"/></div>
                    </div>
                </div>
                <div className="flex">
                    <Image src={like} alt="like"/>
                    <Duration children="2:30"/>
                </div>
            </div>
        </div>
    )
}