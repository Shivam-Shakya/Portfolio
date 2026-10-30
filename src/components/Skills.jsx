import { motion } from 'framer-motion'
import { Terminal, Database, MonitorSmartphone } from 'lucide-react'
import '../styles/Skills.css'

const skills = [
  { title: 'Frontend', icon: MonitorSmartphone, items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Tailwind CSS', 'Responsive UI'] },
  { title: 'Backend', icon: Database, items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication', 'CRUD'] },
  { title: 'Tools & Workflow', icon: Terminal, items: ['Git & GitHub', 'VS Code', 'Postman', 'npm', 'API Integration', 'WordPress'] },
]

function Reveal({ children, className = '', delay = 0, hover = false }) {
  const smoothReveal = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 24, stiffness: 100, mass: 0.8 } },
  }
  return (
    <motion.div
      className={className}
      variants={smoothReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
      whileHover={hover ? { scale: 1.02, y: -8, transition: { type: "spring", stiffness: 300 } } : {}}
    >
      {children}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section className="section-wrap section-block skills-section" id="skills">
      <div className="skills-container">
      <Reveal className="skills-header-container">
        <div className="skills-top-row">
          <div>
            <p className="eyebrow">✦ Skills</p>
            <h2 className="skills-main-heading">
              Skills that make <span className="italic-serif">ideas happen.</span>
            </h2>
          <p className="heading-note">
            The right tool for the right problem. Here are the technologies I work with.
          </p>
          </div>
        </div>
      </Reveal>

      {/* Cards Grid (Unchanged as requested) */}
      <div className="skills-grid">
        {skills.map((group, i) => {
          const Icon = group.icon
          return <Reveal className="skill-card" key={group.title} delay={i * .15} hover={true}>
            <div className="skill-card-top"><div className="skill-icon"><Icon size={20} /></div><span>0{i + 1}</span></div>
            <h3>{group.title}</h3><p className="skill-subtitle">{i === 0 ? 'Interfaces people enjoy using.' : i === 1 ? 'Logic, data and application flow.' : 'Tools for shipping better work.'}</p>
            <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
          </Reveal>
        })}
      </div>
      </div>
    </section>
  )
}