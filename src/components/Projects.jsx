
import project1 from "../assets/images/project1.png";

 

function Projects(){
    const  projects = [
       {
            image: project1,
            title: "Chuks Kitchen",
            description: "A responsive food ordering website built with React.",
            technologies: ["React", "CSS", "JavaScript"],
            github: "https://github.com/Martha-2020/chuks-kitchen",
            live: "YOUR_LIVE_DEMO_LINK"
            },
        {
            title: "Band Name Generator",
            description: "A Node.js and Express application that generates band names from user input",
            tech: "Node.js . Express . HTML . CSS",
            image: "https://placehold.co/600x400",
        
        },

        {
           title: "QR Code Generator",
            description: "A javaScript application that generates QR codes from user input",
            tech: " JavaScript . Node.js",
            image: "https://placehold.co/600x400",
          
        },
    ];

    return (
       <section id="projects" className="projects" data-aos="fade-left">
            <h2>Featured Projects</h2>

            <p className="project-text">
                Here are some of the projects I have built while learning frontend and backend development.
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
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button>Live Demo</button>
                                </a>

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