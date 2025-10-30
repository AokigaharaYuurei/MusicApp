import pick from '../public/music.svg';
import like from '../public/heart.svg';
import { Title } from "../shared/ui";
import { Artist } from "../shared/ui";
import { Duration } from "../shared/ui";
import { Cover } from "../shared/ui";
import Image from 'next/image';
import sound from "../public/sound.svg";
import play from '../public/play.svg';
import next1 from '../public/next1.svg';
import next2 from '../public/next2.svg';

export const CurrentSong = () => {
    return (
      <div className='bg-[#FFFFFF] flex w-full justify-between rounded-[13px] py-2.5 px-4 items-center'>
        <div className='flex'>
          <Cover src={pick}/>
          <div className='flex-col'>
            <Title children="I am music" />
            <Artist children="PlayBoi Carti" />
          </div>
        </div>
        <div className='flex'>
            <Image src={next1} alt='-'/>
            <Image src={play} alt='-'/>
            <Image src={next2} alt='-'/>
        </div>
        <div className='flex'>
          <Image src={like} alt="like" />
          <Image src={sound} alt='-'/>
        </div>
      </div>
    );
}