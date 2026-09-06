import { useReveal } from "../hooks/useReveal.js";

export default function Resume() {
  const [ref, visible] = useReveal();

  return (
    <section id="resume">
      <div className="wrap">
        <div
          ref={ref}
          className={`resume-card reveal ${visible ? "visible" : ""}`}
        >
          <div>
            <h3>Resume</h3>
            <p>
              Download a copy of my resume for a full overview of my education,
              skills, and experience.
            </p>
          </div>
          <a
            href="Priya_Resume.pdf"
            className="btn btn-primary"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
