
import project1 from "../assets/images/project1.png";
import taskManager from "../assets/images/task-manager.png";

 

function Projects(){
    const projects = [
  {
    image: project1,
    title: "Chuks Kitchen",
    description: "A responsive food ordering website built with React.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/Martha-2020/chuks-kitchen",
    live: "https://chuks-kitchen-cyan.vercel.app/",
  },

  {
    image: taskManager,
    title: "Task Manager",
    description:
      "A React task management application featuring task creation, editing, search, filtering, priorities, due dates, and Local Storage persistence.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Local Storage",
    ],
    
        status: "In Progress",github: "https://github.com/Martha-2020/react-task-manager",
        live: "https://react-task-manager-two-self.vercel.app/",
  },
];

    return (
       <section id="projects" className="projects" data-aos="fade-left">
            <h2>Featured Projects</h2>

            <p className="project-text">
                Here are some of the projects I've built to demonstrate my frontend development skills using React, 
                JavaScript, and modern web technologies.
            </p>
            <div className="project-container">
                {projects.map((project, index)=>(
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title}/>

                        <div className="project-content">
                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="tech-stack">
                                {project.technologies?.map((tech, index) => (
                                    <span key={index} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-buttons">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button>Live Demo</button>
                                    </a>
                                    )}

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button>GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>
                ))}
            </div>

        </section>
    );

    
}
export default Projects;