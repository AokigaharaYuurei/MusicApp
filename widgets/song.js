import Image from "next/image";
import pick from '../public/music.svg';
import like from '../public/heart.svg';
import { Title } from "../shared/ui";
import { Artist } from "../shared/ui";
import { Duration } from "../shared/ui";

export const Song = () =>{
    return(
        <div className="bg-[#FFF] flex">
            <div className="bg-[#F1F1F1] flex">
                <div className="flex">
                    <Image src={pick} alt="cover"/>
                    <div>
                        <div><Title children="I am music"/></div>
                        <div><Artist children="PlayBoi Carti"/></div>
                    </div>
                </div>
                <div className="flex">
                    <div><Image src={like} alt="like"/></div>
                    <div><p>2:30</p></div>
                </div>
            </div>
        </div>
    )
}