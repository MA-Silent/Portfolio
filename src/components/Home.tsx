import { useEffect, useRef, useState } from "react"
//@ts-ignore
// import * as THREE from 'three'
//@ts-ignore
// import BIRDS from 'vanta/dist/vanta.net.min'

const descriptions = [
    "dynamic React developer",
    "versatile TypeScript developer",
    "nimble Node.js developer",
    "sleek Tailwind CSS designer",
    "adaptive Fullstack developer",
    "creative Problem solver",
    "curious lifelong learner"
]

export default function Home({ id }: { id: string }) {

    const ref = useRef<HTMLSpanElement>(null)
    const descIndex = useRef(0);
    const letterIndex = useRef(0);

    useEffect(() => {

        function writeWord() {
            if (ref.current === null) return;
            const word = descriptions[descIndex.current];

            ref.current.innerText = word.slice(0, letterIndex.current);

            if (letterIndex.current === word.length) {
                setTimeout(writeWord, 1000)
                letterIndex.current = 0;
                descIndex.current = (descIndex.current + 1) % descriptions.length;
            } else {
                setTimeout(writeWord, 100);
            }

            letterIndex.current++;
        }

        writeWord();
    }, [])

    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const myRef = useRef<HTMLElement>(null);
    // useEffect(() => {
    //     if (!vantaEffect) {
    //         setVantaEffect(BIRDS({
    //             el: myRef.current,
    //             mouseControls: false,
    //             touchControls: false,
    //             gyroControls: false,
    //             minHeight: 200.00,
    //             minWidth: 200.00,
    //             scale: 1.00,
    //             scaleMobile: 1.00,
    //             color: 0x2fff00,
    //             THREE: THREE
    //         }))
    //     }

    //     return () => {
    //         if (vantaEffect) vantaEffect.destroy()
    //     }

    // }, [])

    return (
        <section className="h-screen justify-center items-center flex snap-center" id={id} ref={myRef}>
            <div className="absolute top-[47%] flex justify-center font-bold text-xl flex-col">

                <div className="text-center text-white/50 text-2xl">
                    I am <span className="text-emerald-500/90">Ben Ruitenbeek</span>
                </div>

                <div className="text-4xl text-center flex">
                    Im a <span className="pl-4 text-transparent bg-clip-text bg-gradient-to-b from-[#b8e9d4] via-[#f4985a] to-[#12243f] after:content-['|'] after:animate-blink" ref={ref}></span>
                </div>

            </div>
        </section>
    )
}
