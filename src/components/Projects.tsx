import { Fragment, useEffect, useRef, useState } from "react";
import { type project } from "../util/constants"
import { X, User, Users } from "lucide-react";

const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        entry.target.classList.toggle("visible", entry.isIntersecting);
    }

}, { root: null, rootMargin: "0px", threshold: 0.1 });

export default function Projects({ projectArray, id }: { projectArray: Array<project>, id: string }) {

    const reference = useRef<HTMLElement>(null);
    const [openPopup, setOpenPopup] = useState<number>();

    useEffect(() => {
        observer.observe(reference.current!)
    }, [])

    function handleClick(id: number): undefined {
        setOpenPopup(id);
    }

    return (
        <section className="h-screen snap-center grid gap-12 items-center place-items-center overflow-auto max-sm:grid-cols-2 group" id={id} style={(window.innerWidth >= 768) ? { gridTemplateColumns: `repeat(${Math.min((projectArray.length == 4) ? 2 : 3, projectArray.length)}, minmax(0, 1fr))` } : {}} ref={reference}>
            {projectArray.map((project, idx) => {
                const icon = (project.group) ? <div className="text-amber-400"><Users /></div> : <div className="text-sky-400"><User /></div>
                return (
                    <Fragment key={idx}>
                        <button className="cursor-pointer md:opacity-80 md:hover:opacity-100 duration-200 ease-in-out" onClick={() => handleClick(idx)}>
                            <div className="bg-gray-600 p-2 scale-0 transition-all duration-600 group-[.visible]:scale-100">
                                <div className="md:absolute bg-neutral-600/60 w-full py-1 -inset-x-0 justify-between flex flex-row px-3">
                                    <div className="">{project.title}</div>
                                    {icon}
                                </div>
                                <img src={project.image} alt="Project Image" className="md:w-2xs md: md:pb-2" />
                            </div>
                        </button>

                        <section className={` transition-all duration-200 fixed left-1/2 top-1/2 -translate-1/2 w-1/2 ${openPopup == idx ? "visible opacity-100" : "invisible opacity-0 -translate-y-full"} flex flex-col gap-2 justify-between bg-gray-600/80 rounded p-2 z-30`}>
                            <div className="flex justify-between w-full">
                                <h2 className="flex flex-row gap-2">{project.title} {icon}</h2>
                                <button onClick={() => setOpenPopup(undefined)} className="cursor-pointer"><X className="size-8 mf:stroke-zinc-500 md:hover:stroke-white transition-colors ease-in-out" /></button>
                            </div>
                            <div>
                                {project.description ? project.description : "No Description available for this project at this moment"}
                            </div>
                        </section>
                    </Fragment>
                )
            })}
        </section>
    )
}

