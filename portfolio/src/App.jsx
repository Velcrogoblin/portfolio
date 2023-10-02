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
      <div id = "about">
      <About/>
      </div>
      <SkillCard/>
      <div id = "projects">
      <ProjectCard/>
      </div>
      <div id = "contact">
      <Footer/>
      </div>
    </div>
  )
}

export default App
