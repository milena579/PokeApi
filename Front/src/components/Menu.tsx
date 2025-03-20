import { ROUTES } from "../app/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string
}

export const Menu: React.FC<IMenu> = ({op1, op2}) => {
    return(
        <div className="flex w-full text-red-600 bg-amber-300 h-30">
            <Link href={ROUTES.time} className="">{op1}</Link>
            <Link href={ROUTES.time} className="">{op2}</Link>
        </div>
    
    )
}