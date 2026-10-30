import { motion } from 'framer-motion'
import '../styles/Experience.css'

const experiences = [
  {
    company: 'A2Z Online Solutions',
    role: 'WordPress Developer',
    period: 'Feb 2026 — Aug 2026',
    description: 'Built responsive web interfaces, landing pages, and handled site maintenance, ensuring cross-device compatibility and performance.'
  },
  {
    company: 'Full Stack Developer Intern',
    role: 'Full Stack Developer',
    period: 'Oct 2026 — Present',
    description: 'Working on full-stack web applications utilizing PHP (CodeIgniter 4), PostgreSQL, and React.js for scalable solutions.'
  }
]

export default function Experience() {
  return (
    <section className="section-wrap section-block experience-section" id="experience">
      <div className="experience-container">
        
        {/* Section Header */}
        <div className="experience-header-row">
          <div className="experience-header-text">
            <p className="eyebrow">✦ Experience</p>
            <h2 className="section-title">
              My work <span className="italic-serif">history</span>
            </h2>
            <p className="heading-note mt-15">
              A timeline of my professional journey, roles, and hands-on development experience.
            </p>
          </div>
        </div>

        {/* Clean Row Timeline Style */}
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div 
              className="experience-item" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="experience-info-left">
                <span className="exp-period">{exp.period}</span>
                <h3 className="exp-company">{exp.company}</h3>
              </div>
              <div className="experience-info-right">
                <h4 className="exp-role">{exp.role}</h4>
                <p className="exp-desc">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}