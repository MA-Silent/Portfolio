import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";

const test = ["tes","t","dfg","jhgf","hello","world","fred","is","gay"];

export default function App() {
  return (
    <>
      <Header />
      <main className="h-full">
        <Home id="home"/>
        <About id="about" />
        <Skills array={test} />
      </main>
    </>
  )
}