import { useRef } from 'react'
import { useTypewriter } from '../hooks/useTypewriter.js'

const roles = ['Frontend Developer', 'Java', 'UI/UX Explorer', 'Problem Solver','Ai Enthusiast']

const codeHTML = `<span class="com">// about-me.js</span>
<span class="kw">const</span> developer = {
  name: <span class="str">"Priya Hariyale"</span>,
  role: <span class="str">"Aspiring Full-Stack Developer"</span>,
  stack: [<span class="str">"HTML"</span>, <span class="str">"CSS"</span>, <span class="str">"JavaScript"</span>, <span class="str">"React"</span>],<span class="str">"Java"</span>
  learning: <span class="kw">true</span>,
  <span class="fn">availableFor</span>: () =&gt; <span class="str">"Internships & Open source contribution"</span>
};`

export default function Hero() {
  const heroRef = useRef(null)
  const cardRef = useRef(null)
  const typed = useTypewriter(roles)

  const handleHeroMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect()
    heroRef.current.style.setProperty('--x', `${e.clientX - rect.left}px`)
    heroRef.current.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  const handleCardMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    cardRef.current.style.transform = `perspective(800px) rotateX(${(-py * 8).toFixed(
      2
    )}deg) rotateY(${(px * 10).toFixed(2)}deg) scale(1.015)`
  }

  const resetCard = () => {
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  const handleMagnetic = (e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const resetMagnetic = (e) => {
    e.currentTarget.style.transform = 'translate(0,0)'
  }

  return (
    <section className="hero" id="home" ref={heroRef} onMouseMove={handleHeroMove}>
      <div className="wrap hero-grid">
        <div>
          
          <h1 className="name fade-up d2">I'm Priya Hariyale</h1>
          <div className="typed-line fade-up d3">
            <span className="prompt">$ </span>
            <span>{typed}</span>
            <span className="type-cursor">&nbsp;</span>
          </div>
          <p className="role-line fade-up d3">
            Frontend Developer building clean, fast, responsive interfaces — currently
            sharpening my craft through hands-on projects.
          </p>
          <div className="hero-actions fade-up d4">
            <a
              href="#projects"
              className="btn btn-primary"
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
            >
              View my work
            </a>
            <a
              href="#contact"
              className="btn btn-ghost"
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
            >
              Get in touch
            </a>
          </div>
        </div>

        <div
          className="code-card fade-up d2"
          ref={cardRef}
          onMouseMove={handleCardMove}
          onMouseLeave={resetCard}
        >
          <div className="bar">
            <span className="dot r"></span>
            <span className="dot y"></span>
            <span className="dot g"></span>
          </div>
          <pre dangerouslySetInnerHTML={{ __html: codeHTML }} />
        </div>
      </div>
    </section>
  )
}
