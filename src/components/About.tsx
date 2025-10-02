import { useEffect, useRef } from "react"
import { AboutText } from "../util/constants"
import { twMerge } from "tailwind-merge";

const options : IntersectionObserverInit = {root:null, rootMargin:"0px", threshold: 0.1};

const observer = new IntersectionObserver((entries)=>{
    for (const entry of entries){
        entry.target.classList.toggle("visible", entry.isIntersecting);
        entry.target.classList.toggle("not-visible", !entry.isIntersecting);
    }
}, options)

export default function About({ id }: { id: string }) {

    const ref = useRef<HTMLElement>(null);

    useEffect(()=>{
        observer.observe(ref.current!);
    },[])

    return (
        <section className="h-screen items-end flex snap-start md:snap-center group" id={id} ref={ref}>
            <div className="flex flex-col md:flex-row rounded p-5 gap-5 h-screen overflow-auto md:pb-2">
                <AboutStack />
            </div>
        </section>
    )
}


function AboutBlock({ children, title, iconSrc, className }: React.PropsWithChildren & { title: string, iconSrc: string, className?: string }) {
    return (
        <div className={twMerge("h-40 bg-slate-600 w-full rounded p-2 overflow-auto flex flex-col group-[.visible]:translate-x-0 -translate-x-full transition-all duration-500 ease-in-out group-[.visible]:opacity-100 opacity-0 group-[.not-visible]:transition-[none]", className)} >
            <div className="flex justify-between">
                <h2 className="text-green-500 text-xl">{title}</h2>
                <img src={iconSrc} alt="icon" className="h-8 w-auto" />
            </div>
            <div className="h-full pr-8">
                {children}
            </div>
        </div>
    )
}

function PersonAbout() {
    return (
        <section className="flex flex-1 flex-col snap-center md:snap-align-none md:h-full justify-center items-center gap-5">
            <img src="pfp.png" alt="profilePicture" className="size-80 rounded-full object-cover object-top" />
            {
                AboutText.split("\n\n").map((paragraph) =>{
                    return <p key={paragraph}>{paragraph}</p>
                })    
            }
        </section>
    )

}

function AboutStack() {
    if (window.innerWidth <= 768) {
        return (
            <>
                <section className="flex flex-col gap-5 flex-1">
                    <AboutBlock title="Arch Linux" iconSrc="logos/archlogo.svg"><p>I use Arch Linux because I appreciate its minimal default setup, which allows me to keep my system clean and efficient. When I need additional software, I can reliably find it through the AUR or the official repositories, giving me both flexibility and control over my environment.</p></AboutBlock>
                    <AboutBlock className="delay-100" title="Typescript" iconSrc="logos/tslogo.svg"><p>My preferred programming language is TypeScript, which I use most often because of its strong type system and advanced IntelliSense. It makes my code feel more structured and helps me write cleaner, more reliable projects.</p></AboutBlock>
                    <AboutBlock className="delay-200" title="React" iconSrc="logos/reactlogo.png"><p>I enjoy working with React because it provides a clear and flexible way to build interactive applications. Its component-based approach makes organizing projects easier and gives me the chance to learn modern front-end practices.</p></AboutBlock>
                    <AboutBlock className="delay-300" title="Vite" iconSrc="logos/vitelogo.svg"><p>I like using Vite because it makes setting up projects simple and gives me a fast development environment. It reduces unnecessary setup work and lets me focus more on building and experimenting with new ideas.</p></AboutBlock>
                    <AboutBlock className="delay-400" title="Node Package Manager" iconSrc="logos/npmlogo.svg"><p>I use npm mainly because of its huge library of packages that work well with TypeScript and React. It makes development smoother and gives me the flexibility to explore different tools and features in my projects.</p></AboutBlock>
                </section>
                <PersonAbout />
            </>
        )
    } else {
        return (
            <section className="grid grid-cols-2 gap-5 overflow-auto mt-12">
                <section className="flex flex-col gap-5 flex-1">
                    <AboutBlock title="Arch Linux" iconSrc="logos/archlogo.svg"><p>I use Arch Linux because I appreciate its minimal default setup, which allows me to keep my system clean and efficient. When I need additional software, I can reliably find it through the AUR or the official repositories, giving me both flexibility and control over my environment.</p></AboutBlock>
                    <AboutBlock className="delay-100" title="Typescript" iconSrc="logos/tslogo.svg"><p>My preferred programming language is TypeScript, which I use most often because of its strong type system and advanced IntelliSense. It makes my code feel more structured and helps me write cleaner, more reliable projects.</p></AboutBlock>
                    <AboutBlock className="delay-200" title="React" iconSrc="logos/reactlogo.png"><p>I enjoy working with React because it provides a clear and flexible way to build interactive applications. Its component-based approach makes organizing projects easier and gives me the chance to learn modern front-end practices.</p></AboutBlock>
                    <AboutBlock className="delay-300" title="Vite" iconSrc="logos/vitelogo.svg"><p>I like using Vite because it makes setting up projects simple and gives me a fast development environment. It reduces unnecessary setup work and lets me focus more on building and experimenting with new ideas.</p></AboutBlock>
                    <AboutBlock className="delay-400" title="Node Package Manager" iconSrc="logos/npmlogo.svg"><p>I use npm mainly because of its huge library of packages that work well with TypeScript and React. It makes development smoother and gives me the flexibility to explore different tools and features in my projects.</p></AboutBlock>
                </section>
                <PersonAbout />
            </section>
        )
    }
}