import { Link } from "react-router-dom"
import { projects } from "../constants"
import { arrow } from "../assets/icons"
import CTA from "../components/CTA"

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Hi there! I'm Eric, a passionate software developer with a deep love for creating 
          applications that combine functionality, efficiency, and creativity. Here, you'll find 
          a collection of my public projects, showcasing my skills, dedication, and enthusiasm for 
          problem-solving. Each project reflects my journey through various technologies, including 
          frontend frameworks like React.js, Vue.js, and Next.js, as well as backend systems using Node.js, 
          Spring Boot, and Django. I've also ventured into areas like game development, mental agility apps, 
          and user authentication systems with secure token-based mechanisms. 
          Feel free to explore, fork, or contribute to any of the repositories. 
          These projects are not just a demonstration of my technical expertise but also an invitation to 
          collaborate, learn, and innovate together. Let's build something amazing!</p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div key={project.name} className="lg:w-[400px] w-full">
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img 
                  src={project.iconUrl} 
                  alt='Project Icon'
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img 
                  src={arrow} 
                  alt="arrow"
                  className="w-4 h-4 object-contain" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default Projects