import { useReveal } from "../hooks/useReveal.js";

const projectsData = [
  {
    num: "01",
    name: "Weather App",
    desc: "A responsive Weather app with search and genre filters.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Priiyaa56/weather-app", 
  },
  {
    num: "02",
    name: "Portfolio",
    desc: "Personalized Portfolio that includes various react feautures and animations",
    tech: ["React+vite", "CSS", "Html"],
    github: "https://github.com/Priiyaa56/portfolio-react",
  },
  {
    num: "03",
    name: "Tic Tac Toe Game",
    desc: "tic tac toe responsive game ",
    tech: ["html", "css", "javascript"],
    github: "https://github.com/Priiyaa56/tic-tac-toe", 
  },
  {
    num: "04",
    name: "rock paper scissor Game",
    desc: "rock paper scissor responsive game ",
    tech: ["html", "css", "javascript"],
    github: "https://github.com/Priiyaa56/RockPaperScissor", 
  },
  {
    num: "05",
    name: "Currency Converter",
    desc: "realistic app that converts currency ",
    tech: ["html", "css", "javascript"],
    github: "https://github.com/Priiyaa56/currency-converter"}, 
];

function ProjectRow({ num, name, desc, tech, github, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`project-row reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="project-num">{num}</div>
      <div className="project-name">{name}</div>
      <div>
        <div className="project-desc">{desc}</div>
        <div className="project-tech">
          {tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
      <a
        href={github}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View project →
      </a>
    </div>
  );
}

export default function Projects() {
  const [titleRef, titleVisible] = useReveal();
  const [subRef, subVisible] = useReveal();

  return (
    <section id="projects">
      <div className="wrap">
        <h2
          ref={titleRef}
          className={`section-title reveal ${titleVisible ? "visible" : ""}`}
        >
          Projects
        </h2>
        <p
          ref={subRef}
          className={`section-sub reveal ${subVisible ? "visible" : ""}`}
        >
          A few things I've built.
        </p>
        <div className="projects-list">
          {projectsData.map((p, i) => (
            <ProjectRow key={p.num} {...p} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}