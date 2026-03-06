import { SiNetflix } from "react-icons/si";

export default function Plataformas() {
  return (
    <section id="plataformas" className='relative z-10 h-56 w-full bg-black/80 flex justify-center items-center'>
        <h2 className="text-2xl text-white absolute left-1/2 -translate-x-1/2 top-8">Míralo en</h2>
        <a className="text-red-800 bg-black rounded-xl" href="https://www.netflix.com/ve/title/81171925">
            <SiNetflix className=" text-7xl p-2 "/>
        </a>
    </section>
  )
}
