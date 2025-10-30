import logo from '../public/logo.svg';
import Image from 'next/image';

export const Logo = () =>{
    return(
        <div>
            <Image src={logo} alt='logo'/>
        </div>
    )
}

export const Link = ({children, link}) => {
    return <a href={link} className="font-[Inter] font-semibold text-[24px] transition duration-300 text-white hover:text-[#51BA55] hover:underline ease-in-out ">{children}</a>
}

export const Title = ({ children }) => {
  return (
    <h1 className="font-[Inter] text-[#C0C0C0] text-[64px]">
      {children}
    </h1>
  );
};

export const Button = ({ children, func }) => {
  return (
    <div className="bg-[#181818] px-[20px] py-1 w-fit rounded-full transition duration-700 ease-in-out hover:bg-[#51BA55] hover:border-[#51BA55]" onClick={func}>
        <button className="cursor-pointer">
          <p className="text-[#51BA55] hover:text-[#181818] text-sm font-[Inter] font-semibold">{children}</p>
        </button>
    </div>
  );
};