type use = "img" | "name";

export default function Skills({ array, id, type }: { array: Array<string>, id: string, type: use }) {
  return (
    <section className="h-screen snap-center grid gap-5 items-center place-items-center overflow-auto" id={id} style={{ gridTemplateColumns: `repeat(${Math.min(3, array.length)}, minmax(0, 1fr))`}}>
      {array.map((name, idx) => {
        return (type == 'name') ?
          <div className="md:p-24 p-8 bg-gray-600 text-center flex items-center justify-center rounded-2xl" key={idx}>
            {name}
          </div>
          : 
          <div className="md:p-24 p-8 bg-gray-600 text-center flex items-center justify-center rounded-2xl" key={idx}>
            <img src={name} alt="image here" />
          </div>
      })}
    </section>
  )
}