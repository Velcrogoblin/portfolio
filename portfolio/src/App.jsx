import { NavBar } from "./Components/NavBar/NavBar";
import { About } from "./Components/About/About";
import { SkillCard } from "./Components/SkillCard/SkillCard";
import { ProjectCard } from "./Components/ProjectCard/ProjectCard"
import { Footer } from "./Components/Footer/Footer" ;
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <NavBar/>
      <About/>
      <SkillCard/>
      <ProjectCard/>
      <Footer/>
    </div>
  )
}

export default App
