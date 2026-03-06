import { useLenis } from "lenis/react"


export default function Nav() {
    let lenis = useLenis()

    

    return (
        <nav id="nav" className="fixed z-50 left-1/2 top-0 -translate-x-1/2 px-20 bg-primario/50 flex gap-8 list-none py-4 rounded-b-[50px] cursor-pointer [&_li]:hover:text-terciario [&_li]:transition-all [&_li]:duration-100 -translate-y-full">
            <li><a href="#" onClick={()=>{lenis.scrollTo('#home')}}>Home</a></li>
            <li><a href="#" onClick={()=>{lenis.scrollTo('#sinopsis')}}>Sinopsis</a></li>
            <li><a href="#" onClick={()=>{lenis.scrollTo('#ranma')}}>Ranma</a></li>
            <li><a href="#" onClick={()=>{lenis.scrollTo('#episodios')}}>Episodios</a></li>
            <li><a href="#" onClick={()=>{lenis.scrollTo('#plataformas')}}>Plataformas</a></li>
        </nav>
    )
}
