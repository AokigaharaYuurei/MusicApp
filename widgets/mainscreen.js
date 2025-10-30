import Image from "next/image";
import main from "../public/Main.svg";

export const MainScreen = () => {
    return(
        <div className="flex justify-center w-full py-14">
            <Image src={main} alt="main" />
        </div>
    )
}