import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Header />
      <main className="h-full">
        <Home id="home"/>
        <About id="about" />
      </main>
    </>
  )
}