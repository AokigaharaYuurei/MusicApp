import logo from '../public/logo.svg';
import Image from 'next/image';


export const Logo = () =>{
    return(
        <div>
            <Image src={logo} alt='logo'/>
        </div>
    )
}

export const Title = ({children}) =>{
    return <span>{children}</span>
}

export const Artist = ({children}) =>{
    return <span>{children}</span>
}

export const Duration = ({children}) =>{
    return <span>{children}</span>
}