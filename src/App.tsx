import About from "./components/About";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main className="h-full">
        <section className="h-screen justify-center items-center flex" id="home">
          <div className="absolute top-[50%] flex justify-center font-bold text-xl flex-col">

            <div className="text-center text-white/50 text-2xl">
              I am <span className="text-green-700/70">Ben Ruitenbeek</span>
            </div>

            <div className="text-4xl text-center flex">
              A <span className="pl-4 text-indigo-500">Software Developer</span>
            </div>

          </div>
        </section>
        <About id="about" />
      </main>
    </>
  )
}