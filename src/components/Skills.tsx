import type { skill } from "../util/constants"

export default function Skills({ array, id }: { array: Array<skill>, id: string }) {
  return (
    <section className="h-screen snap-center grid gap-5 items-center place-items-center overflow-auto" id={id} style={{ gridTemplateColumns: `repeat(${(window.innerWidth > 768) ? Math.min(6, array.length): Math.min(2, array.length)}, minmax(0, 1fr))` }}>
      {array.map((skill, idx) => {
        return (
          <div className="p-4 bg-gray-600 text-center flex flex-col items-center justify-center rounded-2xl gap-2 mt-12" key={idx}>
            {skill.image ? <img src={skill.image} alt="skillImage" className="size-32"/> : null}
            {skill.title}
          </div>
        )
      })}
    </section>
  )
}