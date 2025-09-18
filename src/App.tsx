import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const test = ["hello", "world",];

export default function App() {
  return (
    <>
      <Header />
      <main className="h-full">
        <Home id="home" />
        <About id="about" />
        <Skills array={test} id="skills" type="name" />
        <Projects id="projects" />
      </main>
    </>
  )
}