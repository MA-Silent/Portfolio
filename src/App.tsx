import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";

const test = ["tes","t","dfg","jhgf","hello","world","fred","is","gay"];

export default function App() {
  return (
    <>
      <Header />
      <main className="h-full">
        <Home id="home"/>
        <About id="about" />
          <section className="h-screen snap-center grid grid-cols-3 items-center place-items-center" id="skills">
          {test.map((name,idx)=>{
            return( 
              <div className="md:p-24 p-8 bg-gray-600 text-center flex items-center justify-center rounded-2xl" key={idx}>
                {name}
              </div>
            )
          })}
        </section>
      </main>
    </>
  )
}