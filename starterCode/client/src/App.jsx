import Hero from "./components/hero/Hero";
import Wallet from "./components/Wallet/Wallet";
import Handles from "./components/handles/Handles";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import "./index.css";
function App() {
  

  return (
    <>
      <Wallet ></Wallet>
      <Hero />
      <Handles />
      <Projects/>
      <Skills />
      <Experience/>
      <Contact/>
      <Handles />
    </>
  );
}

export default App;


