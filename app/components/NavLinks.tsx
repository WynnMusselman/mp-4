import {usePathname} from "next/navigation";

const links = [
    {
        name: "Home",
        href: "/dashboard",
        //icon: insertIconHere
    },
    {
        name: "RandomCat",
        href: "dashboard/cats",
        //icon: insertIcon
    }
]

export default function NavLinks(){
    //hook similar to useParams in React
    //gets the ENTIRE current path rather than extracting part of it
    const pathname = usePathname();

    return(
        <>
            {
                links.map((link) =>
                    <div key = {link.name}>
                        <a href = {link.href}></a>
                        <span>{link.name}</span>
                    </div>
                )
            }
        </>
    )

}