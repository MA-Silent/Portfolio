export default function Header() {
    return (
        <header className="w-full h-fit sticky top-0 px-5 pt-1 z-10">
            <div className="bg-black/10 md:bg-sky-400/20 h-10 w-full rounded flex justify-between p-6 items-center">
                <h2 className="overflow-auto">
                    Ben's portfolio
                </h2>

                <nav className="flex gap-5">
                    <NavButton href="#home" children={"Home"} />
                    <NavButton href="#about" children={"About"} />
                    <NavButton href="#skills" children={"Skills"} />
                </nav>
            </div>
        </header>
    )
}

function NavButton({ children, href }: React.PropsWithChildren & { href: string }) {
    return (
        <a href={href} className="p-2 relative after:absolute after:inset-[auto_0_0_0] after:bg-lime-600 after:h-1 after:transition-transform hover:after:scale-100 after:scale-0">{children}</a>
    )
}