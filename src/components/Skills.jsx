import { useReveal } from '../hooks/useReveal.js'

const skillsData = [
  { icon: '</>', label: 'HTML5', level: 92, tag: 'Advanced' },
  { icon: '#', label: 'CSS3', level: 88, tag: 'Advanced' },
  { icon: '{}', label: 'JavaScript', level: 80, tag: 'Proficient' },
  { icon: '⚛', label: 'React', level: 72, tag: 'Growing' },
  { icon: 'git', label: 'Git / GitHub', level: 78, tag: 'Proficient' },
  { icon: '▦', label: 'Responsive Design', level: 85, tag: 'Advanced' },
  { icon: '◐', label: 'UI/UX Basics', level: 65, tag: 'Learning' },
]

function SkillChip({ icon, label, level, tag, delay }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`skill-chip reveal ${visible ? 'visible' : ''}`}
      style={{ '--level': `${level}%`, transitionDelay: `${delay}ms` }}
    >
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
      <span className="skill-level">{tag}</span>
      <div className="skill-bar">
        <div className="skill-fill"></div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [titleRef, titleVisible] = useReveal()
  const [subRef, subVisible] = useReveal()

  return (
    <section id="skills">
      <div className="wrap">
        <h2 ref={titleRef} className={`section-title reveal ${titleVisible ? 'visible' : ''}`}>
          Skills
        </h2>
        <p ref={subRef} className={`section-sub reveal ${subVisible ? 'visible' : ''}`}>
          Technologies I use to design and build for the web.
        </p>
        <div className="skills-grid">
          {skillsData.map((s, i) => (
            <SkillChip key={s.label} {...s} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  )
}
