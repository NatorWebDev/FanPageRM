import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable,InertiaPlugin } from "gsap/all";
import { useRef, useState } from "react"
import { FaPlay } from "react-icons/fa";
import { episodios } from "../utils/episodes";



export default function Episodios() {

    gsap.registerPlugin(Draggable)
    gsap.registerPlugin(InertiaPlugin)
    const carrousel = useRef(null)
    const bound = useRef(null)

    useGSAP(() => {
        Draggable.create(carrousel.current, {
            type: 'x',
            bounds: { minX: - (carrousel.current.getBoundingClientRect().width) + bound.current.getBoundingClientRect().width /2, maxX: 0 },
            inertia: true,
        })
    })


    return (
        <section id="episodios" ref={bound} className="h-128 w-full relative z-10 bg-black/40 flex flex-col items-center overflow-hidden">
            <h2 className="text-3xl text-white mt-8">Episodios</h2>
            <div id="carrusel" className="h-[80%] absolute top-10 left-8 items-center flex-nowrap flex gap-8 w-fit" ref={carrousel}>
                {episodios.map((episodio, key) => (
                    <div className="shrink-0 w-60 h-40 relative  rounded-2xl overflow-hidden font-sans font-bold inline-block" loading='lazy' key={key} onClick={()=>{}}>
                        <img src={episodio.miniatura} alt="miniatura" className="absolute w-full h-full object-cover" />
                        <div className="absolute w-full h-full bg-[#00000099] cursor-pointer hover:bg-[#00000055] transition-all duration-100 text-white flex justify-center items-center group">
                            <a target="_blank" href={episodio.url} className="inline-block w-full h-full absolute z-20"></a>
                            <FaPlay className="opacity-60 text-3xl group-hover:scale-0 transition-all duration-200" />

                            <div className="absolute w-full h-[40%] left-0 top-0 -translate-y-full bg-black/30 group-hover:translate-y-0  transition-all duration-100">
                                <div className="absolute left-4 top-4">Capítulo #{episodio.numero} T{episodio.temporada}</div>
                                <div className="absolute left-4 top-10 w-3/4 opacity-50 text-[.7rem]">{episodio.titulo}</div>
                            </div>

                            <div className="absolute w-full h-[20%] left-0 bottom-0 translate-y-full bg-black/30 flex items-center group-hover:translate-y-0 transition-all duration-100">
                                <div className="absolute left-4 ">Ver Ahora</div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}
