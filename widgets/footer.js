import { Logo } from "../shared/ui";

export const Footer = () =>{
    return(
        <div className="bg-[#1D1D1D] py-10 flex text-white flex-col items-center justify-center ">
            <Logo/>
            <p className="font-[Inter] font-normal text-[20px] pt-6 font-light">© 2025 MUSIC. Все права защищены.</p>
        </div>
    )
}