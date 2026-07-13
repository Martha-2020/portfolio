
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

        const form = useRef();

        const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_cws6aw6",
      "template_ymc6ncs",
      form.current,
      "7h6djYxwPF88gojs3"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message.");
        console.log(error);
      }
    );
};



  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Contact Me</h2>

      <p className="contact-text">
        I'm always open to discussing new opportunities,
        freelance projects, or collaborations.
      </p>

      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                />

                <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                />

                <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <p>
              💼{" "}
              <a
                href="https://www.linkedin.com/in/chinelo-ozoani"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>

            <p>
              🐙{" "}
              <a
                href="https://github.com/Martha-2020"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>

              <p>
                𝕏{" "}
                <a
                  href="https://x.com/Raidingnow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Raidingnow
                </a>
              </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;