import Weather from "../projects/Weather/Weather";
import Todo from "../projects/task-manager/Todo";
import Converter from "../projects/currency-converter/Converter";
import "./projects.css"

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My projects</h2>
      
      <div className="website">
       
        <a href="https://fitness-studio-livid.vercel.app/">
          <h3>Fitness Website</h3>
           <img src="/Dumbell Sticker.jpg" alt="website-pic" />
          </a>
      </div>

      <Weather/>
      <Todo/>
      <Converter/>
    </div>
  )
}

export default Projects
