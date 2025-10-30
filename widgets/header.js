import { Link } from "../shared/ui";
import { Logo } from "../shared/ui";

const links = [
    {link: "#", children: 'Главная'},
    {link: "#", children: 'Черепахи'},
    {link: "#", children: 'Злодеи'},
    {link: "#", children: 'Эпизоды'},
]

export const Header = () =>{
    return(
        <div className='bg-[#111111] flex justify-between py-8 px-9 rounded-b-2xl'>
            <Logo/>
            <nav className="flex items-center gap-14">
                {links.map((item, i)=>{
                    return(
                        <Link key={i} href={item.link}>{item.children}</Link>
                    )
                })}
            </nav>
        </div>
    )
}