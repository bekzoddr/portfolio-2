import { useSelector } from "react-redux";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";

function App() {
  let theme = useSelector((s) => s.theme.value);

  return (
    <main className={`app ${theme ? "dark" : "light"}`}>
      <Navbar />
      <Hero />
      <Skills />
    </main>
  );
}

export default App;
