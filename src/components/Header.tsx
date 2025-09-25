import { useState } from "react"

export default function Header() {
    const [checked, setChecked] = useState(false);

    return (
        <header className="w-full h-fit sticky top-0 px-5 pt-1 z-10">
            <div className="bg-black/10 md:bg-sky-400/20 h-10 w-full rounded flex justify-between p-6 items-center">
                <h2 className="overflow-auto">
                    Ben's portfolio
                </h2>
                    <nav className="flex gap-5 not-sm:hidden">
                        <NavButton href="#home" children={"Home"} />
                        <NavButton href="#about" children={"About"} />
                        <NavButton href="#skills" children={"Skills"} />
                        <NavButton href="#projects" children={"Projects"} />
                    </nav>
    
                    <div className="size-8 relative sm:hidden">
                        <input type="checkbox" id="check" className="absolute inset-0 opacity-0" onClick={() => setChecked((prev) => !prev)} />
                        <div className={`rounded transition-all bg-white h-1 absolute left-0 right-0 pointer-events-none ${checked ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}/>
                        <div className={`rounded transition-all bg-white h-1 absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none ${checked ? "opacity-0"  : ""}`}/>
                        <div className={`rounded transition-all bg-white h-1 absolute left-0 right-0 pointer-events-none ${checked ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-full -translate-y-full"}`}/>
                    </div>
            </div>
        </header>
    )
}

function NavButton({ children, href }: React.PropsWithChildren & { href: string }) {
    return (
        <a href={href} className="p-2 relative after:absolute after:inset-[auto_0_0_0] after:bg-lime-600 after:h-1 after:transition-transform hover:after:scale-100 after:scale-0">{children}</a>
    )
}