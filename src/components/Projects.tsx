import type { project } from "../util/constants"


export default function Projects({ projectArray, id }: { projectArray: Array<project>, id: string }) {
    return (
        <section className="h-screen snap-center grid gap-12 items-center place-items-center overflow-auto" id={id} style={{ gridTemplateColumns: `repeat(${Math.min(3, projectArray.length)}, minmax(0, 1fr))` }}>
            {projectArray.map((project, idx) => {
                return (
                    <a href={project.link} key={idx}>
                        <div className="rounded-3xl bg-gray-600 p-5">
                            <div className="md:flex md:flex-col ">
                                <img src={project.image} alt="Project Image" className="md:w-xs md:pb-2" />
                                <div>{project.title}</div>
                            </div>
                        </div>
                    </a>
                )
            })}
        </section>
    )
}