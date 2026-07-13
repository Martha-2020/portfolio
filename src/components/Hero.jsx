


import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="intro">Hello 👋, I'm</p>

        <h1>Chinelo Martha</h1>

        <h2>Frontend Developer | React Developer</h2>

        <p className="description">
          I build responsive, modern, and user-friendly web applications
          using React, JavaScript, HTML, CSS, Node.js, and Express.
        </p>

                <div className="buttons">
                            <a href="#projects">
                                <button className="primary">View My Projects</button>
                            </a>

                            <a href="/Chinelo-CV.jpeg" target="_blank" rel="noopener noreferrer">
                              <button className="secondary">Download CV</button>
                            </a>
                </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Chinelo Martha" />
      </div>
    </section>
  );
}

export default Hero;