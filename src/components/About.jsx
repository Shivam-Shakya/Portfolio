import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import '../styles/About.css'
import img from '../assets/ShivamAbout.png'

// Number Counter Animation Component
function Counter({ value, suffix = "+" }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = parseInt(value, 10)
      if (start === end) return

      let totalDuration = 1500 // 1.5 seconds
      let incrementTime = Math.max(totalDuration / end, 20)

      let timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) {
          clearInterval(timer)
        }
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function About() {
  return (
    <section className="section-wrap section-block about-section" id="about">
      <div className="about-container">
        
        {/* Top: About Me label */}
        <motion.div 
          className="about-eyebrow-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">✦ About Me</p>
        </motion.div>

        {/* Main Content Layout: Image on Left, Text & Numbers on Right */}
        <div className="about-content-grid">
          
          {/* Left Side: Image Card */}
          <motion.div 
            className="about-image-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={img} alt="Shivam Shakya" />
          </motion.div>

          {/* Right Side: Heading & Numbers Below It */}
          <div className="about-right-col">
            <motion.div 
              className="about-main-title"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2>
                I'm a Frontend & Full-Stack Developer crafting <span className="italic-serif"> meaningful digital experiences.</span>
              </h2>
            </motion.div>

            {/* Stats Numbers Below the Text */}
            <motion.div 
              className="about-stats-grid"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="stat-box">
                <span className="stat-number">
                  <Counter value="2" suffix="+" />
                </span>
                <span className="stat-label">Years of Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-box">
                <span className="stat-number">
                  <Counter value="10" suffix="+" />
                </span>
                <span className="stat-label">Successful Launches</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-box">
                <span className="stat-number">
                  <Counter value="15" suffix="+" />
                </span>
                <span className="stat-label">Projects Delivered</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}