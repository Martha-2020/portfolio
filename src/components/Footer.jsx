
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <h3>Chinelo Martha</h3>

      <p>Frontend Developer | React Developer</p>

      <div className="footer-icons">
        <a
          href="https://github.com/martha-2020"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/chinelo-ozoani"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://x.com/Dev_Nmoh"
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter />
        </a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Chinelo Martha. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;