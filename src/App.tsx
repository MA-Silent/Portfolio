import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { projects, skills } from "./util/constants";

export default function App() {
  return (
    <>
      <Header />
      <main className="h-full">
        <Home id="home" />
        <About id="about" />
        <Skills array={skills} id="skills" type="name" />
        <Projects id="projects" projectArray={projects} />
      </main>
    </>
  )
}