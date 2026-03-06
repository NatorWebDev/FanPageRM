import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

export default function Sinopsis() {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {

    gsap.to('.cuadro', {
      scrollTrigger: {
        trigger:'#sinopsis',
        start: 'top center',
      },
      duration: .9,
      delay: (index) => { return (index / 6) },
      transform: (i)=>{
        switch(i){
          case 0:
            return 'rotate(-30deg)';
          case 1:
            return 'translate(30%,0) rotate(-20deg)';
          case 2:
            return 'translate(60%,0) rotate(-5deg)';
          case 3:
            return 'translate(110%,0) rotate(5deg)';
        }
      }
    })


  })

  return (
    <section id="sinopsis" className="h-100 bg-black/80 relative flex justify-around overflow-hidden">
      <div className="flex-1 h-full flex justify-center items-center">
        <img src="ranma.png" alt="ranma" className="cuadro shadow absolute h-full top-20 -rotate-120 z-50 translate-y-[200%]" />
        <img src="cuadros.png" alt="cuadros" className="cuadro h-[80%] -rotate-120 absolute top-25 z-40 translate-y-[200%] opacity-80 shadowFaded" />
        <img src="cuadros.png" alt="cuadros" className="cuadro h-[60%] -rotate-120 absolute top-30 z-40 translate-y-[200%] opacity-60 shadowFaded" />
        <img src="cuadros.png" alt="cuadros" className="cuadro h-[50%] -rotate-120 absolute top-35 z-40 translate-y-[200%] opacity-40 shadowFaded" />
      </div>
      <div className="flex-2 pl-40 flex items-center justify-center flex-col w-[40%]">
        <h2 className="text-secundario text-4xl pb-4">Sinopsis</h2>
        <p className="text-xl text-white w-[90%]">Ranma 1/2 narra las caóticas peripecias de Ranma Saotome, un joven experto en artes marciales que, tras caer en unos estanques malditos en China, sufre una peculiar metamorfosis: se convierte en mujer al contacto con el agua fría y recupera su aspecto masculino con el agua caliente. Esta condición complica enormemente su vida en Japón, donde debe lidiar con un compromiso matrimonial forzado con Akane Tendo, una chica de fuerte temperamento que detesta a los hombres, mientras ambos enfrentan a una interminable fila de rivales, pretendientes y situaciones absurdas derivadas de la misma maldición.</p>
      </div>

    </section>
  )
}