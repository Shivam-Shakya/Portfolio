import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import '../styles/Hero.css'

function BlockReveal({ children, delay = 0, blockColor = "var(--red)", display = "inline-block" }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', display }}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.4, duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ delay, duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
        style={{ position: "absolute", inset: 0, backgroundColor: blockColor, zIndex: 20 }}
      />
    </div>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.2])
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.92])

  return (
    <div className="hero-spacer">
      <motion.div className="hero-fixed" style={{ opacity: heroOpacity, scale: heroScale }}>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="availability" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", delay: 1.1, stiffness: 100 }}>
              <span className="status-dot" /> OPEN TO OPPORTUNITIES
            </motion.div>
            
            <p className="eyebrow hero-eyebrow">
              <BlockReveal delay={1.2} blockColor="#333">MERN STACK DEVELOPER <span>·</span> INDIA</BlockReveal>
            </p>
            <h1 style={{ margin: 0, paddingBottom: '5px' }}>
              <BlockReveal delay={1.4} blockColor="var(--red)" display="block">I build digital</BlockReveal>
              <BlockReveal delay={1.6} blockColor="#fff" display="block">
                <span className="outlined-word">experiences</span><span className="red-dot">.</span>
              </BlockReveal>
            </h1>
            <div className="hero-intro">
              <BlockReveal delay={1.8} blockColor="#444" display="block">
                I'm <strong>Shivam Shakya</strong> — a developer who turns ideas into clean, responsive and useful web applications with the MERN stack.
              </BlockReveal>
            </div>

            <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, type: "spring" }}>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="button button-ghost" href="#contact">Get in touch <ArrowUpRight size={16} /></motion.a>
            </motion.div>
            <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}>
              <motion.a whileHover={{ y: -4, color: "#ff3b4e" }} href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></motion.a>
              <motion.a whileHover={{ y: -4, color: "#ff3b4e" }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></motion.a>
              <motion.a whileHover={{ y: -4, color: "#ff3b4e" }} href="#contact" aria-label="Email"><Mail size={18} /></motion.a>
              <span className="social-line" /><span className="social-caption">LET'S CONNECT</span>
            </motion.div>
          </div>
          
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .90 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 1.8, type: "spring" }}>
            <div className="hero-bg-image" style={{ backgroundImage: "url('/src/assets/Shivam.png')" }} />
            <div className="visual-glow" />
          </motion.div>

        </section>
      </motion.div>
    </div>
  )
}