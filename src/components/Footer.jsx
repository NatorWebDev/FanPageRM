

export default function Footer() {
    return (
        <footer className="text-white pr-[25%] pl-8 gap-8 h-37 w-full bg-[#222] flex relative z-10 items-center overflow-hidden">
            <img src="title.png" alt="logo" className="h-[60%] " />
            <p className="opacity-50"><i className="text-xl">© Rumiko Takahashi • Shogakukan • Netflix</i>
                <br />
                Ranma ½ (2024) y todos sus elementos son propiedad intelectual de sus autores originales.
                Este sitio es un proyecto independiente de la comunidad. 2026.
            </p>
            <img src="panda.png" alt="panda" className="absolute right-0 -top-10 w-1/7 object-contain"/>


        </footer>
    )
}
