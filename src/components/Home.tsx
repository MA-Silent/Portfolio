import { useRef } from "react"

export default function Home({id}: {id:string}) {

    const ref = useRef(null)

    return (
        <section className="h-screen justify-center items-center flex" id={id}>
            <div className="absolute top-[47%] flex justify-center font-bold text-xl flex-col">

                <div className="text-center text-white/50 text-2xl">
                    I am <span className="text-green-700/70">Ben Ruitenbeek</span>
                </div>

                <div className="text-4xl text-center flex">
                    A <span className="pl-4 text-indigo-500" ref={ref}>Software Developer</span>
                </div>

            </div>
        </section>
    )
}
