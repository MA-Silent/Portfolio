export default function Skills({array, id}: {array:Array<string>, id:string}){
    return(
        <section className="h-screen snap-center grid grid-cols-3 items-center place-items-center" id={id}>
          {array.map((name,idx)=>{
            return( 
              <div className="md:p-24 p-8 bg-gray-600 text-center flex items-center justify-center rounded-2xl" key={idx}>
                {name}
              </div>
            )
          })}
        </section>
    )
}