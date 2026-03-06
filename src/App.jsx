import Hero from "./components/Hero";
import Sinopsis from "./components/Sinopsis";
import Ranma from "./components/Ranma";
import Episodios from "./components/Episodios";
import Plataformas from "./components/Plataformas";
import Footer from "./components/Footer";

import { ReactLenis } from 'lenis/react'


function App() {

  return (
    <>
      <ReactLenis root >
        <Hero />
        <Sinopsis />
        <Ranma />
        <Episodios />
        <Plataformas />
        <Footer />

      </ReactLenis>
    </>
  )
}

export default App
