import type { project } from "../util/constants"


export default function Projects({ projectArray, id }: { projectArray: Array<project>, id: string }) {
    return (
        <section className="h-screen snap-center grid gap-12 items-center place-items-center overflow-auto max-sm:grid-cols-2 " id={id} style={(window.innerWidth >= 768) ? { gridTemplateColumns: `repeat(${Math.min((projectArray.length == 4) ? 2 : 3, projectArray.length)}, minmax(0, 1fr))` } : {}}>
            {projectArray.map((project, idx) => {
                return (
                    <a href={project.link} key={idx}>
                        <div className="rounded-3xl bg-gray-600 p-5">
                            <div className="md:flex md:flex-col ">
                                <div className="font-jetbrains-mono font-bold bg-clip-text bg-gradient-to-b text-transparent  to-[#239eab] from-[#74deee]">{project.title}</div>
                                <img src={project.image} alt="Project Image" className="md:w-xs md:pb-2" />
                            </div>
                        </div>
                    </a>
                )
            })}
        </section>
    )
}