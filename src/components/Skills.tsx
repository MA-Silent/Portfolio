import { useEffect, useRef } from "react"
import type { skill } from "../util/constants"

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
}
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    entry.target.classList.toggle("visible", entry.isIntersecting);
    entry.target.classList.toggle("not-visible", !entry.isIntersecting);
  }
}, options)

export default function Skills({ array, id }: { array: Array<skill>, id: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    observer.observe(ref.current!);
  }, [])

  return (
    <section ref={ref} className="h-screen snap-center grid gap-5 items-center place-items-center overflow-auto group" id={id} style={{ gridTemplateColumns: `repeat(${(window.innerWidth > 768) ? Math.min(6, array.length) : Math.min(2, array.length)}, minmax(0, 1fr))` }} >
      {array.map((skill, idx) => {
        return (
          <div className="p-4 bg-gray-600 text-center flex flex-col items-center justify-center rounded-2xl gap-2 mt-12 group-[.visible]:translate-x-0 -translate-x-[100vw] transition-all duration-400 group-[.not-visible]:transition-[none] ease-out" style={{transitionDelay: `${idx*100}ms`}} key={idx}>
            {skill.imageSrc ? <img src={skill.imageSrc} alt="skillImage" className="size-32" /> : null}
            {skill.title}
          </div>
        )
      })}
    </section>
  )
}