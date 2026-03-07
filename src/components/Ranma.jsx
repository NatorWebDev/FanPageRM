import { useEffect, useRef, useState } from "react";
import { PiHandGrabbingLight } from "react-icons/pi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable, ScrollTrigger } from "gsap/all";


export default function Ranma() {

    const grabber = useRef()
    const bounds = useRef()
    const courtain = useRef()
    gsap.registerPlugin(Draggable,ScrollTrigger)
    

    useGSAP(() => {
        Draggable.create(grabber.current, {
            type: "x",
            bounds: bounds.current,
            onDrag: () => {
                courtain.current.style.clipPath = `inset(0 0 0 ${grabber.current.getBoundingClientRect().left + 4}px )`;
                gsap.killTweensOf('.grabButton')
            }
        })

        gsap.from('.textoRanma', {
            duration: 1,
            opacity: 0,
            scrollTrigger:{
                trigger: '.textoRanma',
                start: 'bottom bottom',
                toggleActions: 'restart none none none'

            },
            clipPath: 'inset(0% 0% 100% 0%)'

        })
        gsap.to('.grabButton', {
            duration: 1,
            scrollTrigger:{
                trigger: '.grabButton',
                start: 'top bottom',
            },
            scale:"1.1",
            yoyo:true,
            ease:'power1.inOut',
            repeat: -1,

        })
    })

    return (
        <section id="ranma" className="w-full h-[90vh] bg-cover bg-center relative overflow-hidden" ref={bounds}>

            <div className="absolute w-full h-full z-40 clip flex justify-center items-center" ref={courtain}>
                <div className="absolute w-full h-full z-43 bg-primario/30"></div>
                <img src="clip2.png" alt="Ranma" className="w-full h-full z-42 object-contain absolute select-none" 
                style={{backgroundImage : 'url("dojo.jpg")',backgroundSize:'cover'}}/>
                <img src="chibi2.png" alt="chibi" className="absolute z-43 left-1/2 -translate-x-1/2 w-50 object-contain bottom-8" 
                    
                />
                <div className="textoRanma absolute w-1/3 z-43 text-black  font-medium pb-20">
                    <h2 className="text-4xl text-center pb-4 text-black ">Ranma Saotome</h2>
                    <p className="text-xl">Ranma Saotome es un experto en artes marciales cuyo rasgo más distintivo es la maldición que lo transforma en mujer al contacto con el agua fría. Es un joven orgulloso, competitivo y a veces algo arrogante, pero con un sentido del honor muy arraigado y una habilidad técnica impresionante para el combate.</p>
                </div>
            </div>

            <div className="absolute w-full h-full z-30 flex justify-center items-center">
                <div className="absolute w-full h-full z-33 bg-black/20"></div>
                <img src="clip1.png" alt="Ranma" className="w-full h-full z-32 object-contain absolute select-none" 
                    style={{backgroundImage : 'url("dojo.jpg")',backgroundSize:'cover'}}
                />
                <img src="chibi1.png" alt="chibi" className="absolute left-1/2 z-34 -translate-x-1/2 w-50 object-contain bottom-10" />
                <div className="textoRanma absolute w-1/3 z-43 sombra font-medium pb-20 text-primario">
                    <h2 className="text-4xl text-center pb-4 sombra">Ranma Saotome</h2>
                    <p className="text-xl sombra">Ranma Saotome es un experto en artes marciales cuyo rasgo más distintivo es la maldición que lo transforma en mujer al contacto con el agua fría. Es un joven orgulloso, competitivo y a veces algo arrogante, pero con un sentido del honor muy arraigado y una habilidad técnica impresionante para el combate.</p>
                </div>
            </div>


            <div ref={grabber} className="w-1 h-full bg-blue-500 absolute left-[65%] z-50 flex items-center justify-center">
                <div className="grabButton w-8 h-8 absolute bg-blue-500 rounded-full flex items-center justify-center">
                    <PiHandGrabbingLight className="text-white text-3xl font-bold pb-1" />
                </div>
            </div>
        </section>
    )
}
