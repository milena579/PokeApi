import { ROUTES } from "../app/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string
}

export const Menu: React.FC<IMenu> = ({op1, op2}) => {
    return(
        <div className="flex w-full text-red-600 bg-amber-300 h-15 justify-around items-center font-bold">
            <Link href={ROUTES.pokemons} className=" hover:text-blue-900 "><h1>{op1}</h1></Link>
            <Link href={ROUTES.time} className=" hover:text-blue-900 "><h1>{op2}</h1></Link>
        </div>
    
    )
}