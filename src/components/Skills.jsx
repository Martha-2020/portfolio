import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
} from "react-icons/fa";

function Skills(){
    const skills = [
        {icon: <FaHtml5 />, name: "HTML5"},
        {icon: <FaCss3Alt />, name: "CSS3"},
        {icon: <FaJs />, name: "JavaScript"},
        {icon: <FaReact />, name: "React"},
        {icon: <FaNodeJs />, name: "Node.js"},
        {icon: <FaGitAlt />, name: "Git"},
    
    ];


    return(
        <section id="skills" className="skills" data-aos="zoom-in">
            <h2>My Skills</h2>

            <p className="skills-text">
                These are the technologies i use to build modern and responsive web applications.
            </p>

            <div className="skills-container">
                {skills.map((skill, index) =>(
                    <div className="skill-card" key={index}>
                        <div className="skill-icon">{skill.icon}</div>
                        <h3>{skill.name}</h3>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Skills;