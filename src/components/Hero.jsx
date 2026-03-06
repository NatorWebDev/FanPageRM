
import gsap from "gsap";
import Nav from "./Nav";
import { BsStars } from "react-icons/bs";
import { WiStars } from "react-icons/wi";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Hero() {

  const title = useRef(null)

  
  useGSAP(() => {
    let tl = gsap.timeline()

    tl.to(title.current, {
      duration: 2,
      opacity: 1,
      delay:1,
      ease:"power1.in"
    })
    .to(title.current,{
      duration: 2,
      repeat: -1,
      rotateZ:'2%',
      ease: 'sine.inOut',
      yoyo:true
    })
    .to('.star',{
      duration:1,
      ease: "bounce",
      scale:1,
      stagger:.2
    },'<')
    .to('#nav',{
      duration:.5,
      ease: "bounce",
      y:'0'
    },'<')
    .to('.wave',{
      duration:2,
      translateX:0,
      ease:'expo.out'
    },'<')
    .to('.star',{
      duration:3,
      scale:1.1,
      yoyo:true,
      repeat: -1,
      delay: 1
    },'>')
    .to('.wave',{
      duration:3,
      yoyo:true,
      repeat: -1,
      translateY:'5%'
    },'<')
    
   
  }, [])

  const starStyle = "absolute text-terciario text-5xl starGaze"

  return (
    <section id="home" className="w-full h-screen relative text-xl text-white overflow-hidden">
      <Nav />
      <video src="bg.mp4" autoPlay loop muted playsInline className="object-cover w-full h-full fixed top-0 left-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <img src="title.png" ref={title} alt="titulo" className="absolute top-1/2 left-1/2 -translate-1/2 w-[40%] shadowTitle opacity-0" />
      <BsStars className={`${starStyle} left-40 top-40 star scale-0`} />
      <BsStars className={`${starStyle} right-20 top-20 star scale-0`} />
      <BsStars className={`${starStyle} right-[30%] top-40 star scale-0`} />
      <WiStars className="text-terciario text-5xl absolute top-30 left-[35%] star scale-0 starGaze" />
      <WiStars className="text-terciario text-9xl absolute bottom-30 left-[15%] star scale-0 starGaze" />
      <WiStars className="text-terciario text-9xl absolute bottom-35 right-[15%] star scale-0 starGaze" />
      <img src="water.png" alt="water" className="absolute -bottom-[12%] left-0  w-[40%] wave -translate-x-full" />
      <img src="water.png" alt="water" className="absolute -bottom-[12%] right-0  w-[40%] rotate-y-180 wave translate-x-full" />
    </section>

  )
}
