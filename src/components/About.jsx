import { useReveal } from "../hooks/useReveal.js";

export default function About() {
  const [titleRef, titleVisible] = useReveal();
  const [subRef, subVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();

  return (
    <section id="about">
      <div className="wrap">
        <h2
          ref={titleRef}
          className={`section-title reveal ${titleVisible ? "visible" : ""}`}
        >
          About
        </h2>
        <p
          ref={subRef}
          className={`section-sub reveal ${subVisible ? "visible" : ""}`}
        >
          Hi! I’m Priya, a Computer Science engineering student and aspiring
          Frontend Developer with a strong interest in Artificial Intelligence.
          I enjoy building clean, responsive, and user-friendly websites using
          HTML, CSS, JavaScript, and React. I have a basic understanding of
          Python, practice Data Structures and Algorithms using Java, and am
          continuously exploring AI and modern web technologies. I’m passionate
          about learning, building real-world projects, and creating digital
          experiences that are both visually appealing and functional. .
        </p>
        <div
          ref={gridRef}
          className={`about-grid reveal ${gridVisible ? "visible" : ""}`}
        >
          <div>
            <p>
              I'm a frontend developer in training, currently completing a
              structured internship program to build real, deployable projects.
              I care about clean code, thoughtful UI, and interfaces that feel
              effortless to use.
            </p>
            <p>Outside of coding, I enjoy ,Dancing ,playing chess</p>
          </div>
          <div className="goal-box">
            <strong>Career goal:</strong> To grow into a confident
            frontend/full-stack developer, contribute to real-world products,
            and keep learning modern web technologies through consistent
            practice.
          </div>
        </div>
      </div>
    </section>
  );
}
