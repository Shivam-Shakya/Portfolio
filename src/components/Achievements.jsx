
import { motion } from 'framer-motion'
import '../styles/Achievements.css'

const achievements = [
  {
    title: 'Azisly Code2Career Hackathon',
    category: 'CONSOLATION PRIZE',
    desc: 'Received a Consolation Prize for participation and performance in the Azisly Code2Career Hackathon.',
    date: 'SEP 2026'
  },
  {
    title: 'India AI Impact Buildathon',
    category: 'HACKATHON FINALIST',
    desc: 'Selected as a finalist in the India AI Impact Buildathon for developing an innovative AI-driven solution.',
    date: 'MAR 2026'
  },
  {
    title: 'MERN Stack Developer Certificate',
    category: 'GUVI HCL CERTIFICATION',
    desc: 'Successfully completed MERN Stack Developer training covering React.js, Node.js, Express.js, and MongoDB.',
    date: 'MAR 2026'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    category: 'freeCodeCamp CERTIFICATION',
    desc: 'Completed the Legacy JavaScript Algorithms and Data Structures certification from freeCodeCamp.',
    date: 'JULY 2023'
  },
]

function Reveal({ children, className = '', delay = 0 }) {
  const smoothReveal = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        mass: 0.8
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={smoothReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <section
      className="section-wrap section-block achievements-section"
      id="achievements"
    >
      <div className="achievements-container">

        <div className="achievements-header-row">
          <div className="achievements-header-text">
            <p className="eyebrow">✦ Milestones</p>

            <h2 className="section-title">
              Achievements &
              <span className="italic-serif"> Highlights.</span>
            </h2>

            <p className="heading-note mt-15">
              Key milestones, hackathons, certifications, and achievements in my development journey.
            </p>
          </div>
        </div>

        <div className="achievements-grid">
          {achievements.map((ach, i) => (
            <Reveal
              className="achievement-item"
              delay={i * 0.1}
              key={i}
            >
              <div className="ach-card-top">
                <h3 className="ach-title">{ach.title}</h3>
                <span className="ach-date">{ach.date}</span>
              </div>

              <p className="ach-category">{ach.category}</p>

              <p className="ach-desc">{ach.desc}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
